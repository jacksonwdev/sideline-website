import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9355;
const BASE = "http://localhost:3280";
const OUT = "C:\\Users\\jacks\\sideline\\screenshots-v2";
const PROFILE = process.env.TEMP + "\\sl-cdp-shoot";

const PAGES = [
  ["home", "/"],
  ["communities", "/communities"],
  ["creators", "/creators"],
  ["compete", "/compete"],
  ["about", "/about"],
  ["contact", "/contact"],
  ["waitlist", "/waitlist"],
];

mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${PROFILE}`,
  "about:blank",
]);

async function getWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const j = await r.json();
      if (j.webSocketDebuggerUrl) return j.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("no devtools");
}

function makeConn(url) {
  const ws = new WebSocket(url);
  let id = 0;
  const pending = new Map();
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  });
  const ready = new Promise((res) => ws.addEventListener("open", () => res()));
  const send = (method, params = {}, sessionId, timeoutMs = 45000) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      const t = setTimeout(() => {
        pending.delete(mid);
        reject(new Error(`timeout ${method}`));
      }, timeoutMs);
      pending.set(mid, {
        resolve: (v) => { clearTimeout(t); resolve(v); },
        reject: (e) => { clearTimeout(t); reject(e); },
      });
      ws.send(JSON.stringify({ id: mid, method, params, sessionId }));
    });
  return { ws, send, ready };
}

async function run() {
  const conn = makeConn(await getWs());
  await conn.ready;
  const { targetId } = await conn.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await conn.send("Target.attachToTarget", { targetId, flatten: true });
  await conn.send("Page.enable", {}, sessionId);

  for (const [name, path] of PAGES) {
    for (const v of ["desktop", "mobile"]) {
      const metrics =
        v === "mobile"
          ? { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }
          : { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false };
      await conn.send("Emulation.setDeviceMetricsOverride", metrics, sessionId);
      await conn.send("Page.navigate", { url: BASE + path }, sessionId);
      await sleep(1600);
      const layout = await conn.send("Page.getLayoutMetrics", {}, sessionId);
      const cw = Math.ceil(layout.cssContentSize.width);
      const ch = Math.ceil(layout.cssContentSize.height);
      const shot = await conn.send(
        "Page.captureScreenshot",
        {
          format: "png",
          captureBeyondViewport: true,
          clip: { x: 0, y: 0, width: cw, height: ch, scale: 1 },
        },
        sessionId,
        90000,
      );
      writeFileSync(`${OUT}\\${name}-${v}.png`, Buffer.from(shot.data, "base64"));
      process.stdout.write(`${name}-${v}: ${cw}x${ch}\n`);
    }
  }
  conn.ws.close();
  chrome.kill();
}

run().catch((e) => {
  console.error(e);
  chrome.kill();
  process.exit(1);
});
