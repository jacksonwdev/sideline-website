import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9377;
const BASE = "http://localhost:3253";
const OUT = "C:\\Users\\jacks\\sideline";
const PROFILE = process.env.TEMP + "\\sl-hero";

const TARGETS = [
  ["hero-compete", "/compete"],
  ["hero-creators", "/creators"],
  ["hero-home", "/"],
];

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
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
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
    }
  });
  const ready = new Promise((res) => ws.addEventListener("open", () => res()));
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
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
  await conn.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 760, deviceScaleFactor: 2, mobile: false }, sessionId);
  for (const [name, path] of TARGETS) {
    await conn.send("Page.navigate", { url: BASE + path }, sessionId);
    await sleep(2000);
    const shot = await conn.send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 1440, height: 760, scale: 1 } }, sessionId);
    writeFileSync(`${OUT}\\${name}.png`, Buffer.from(shot.data, "base64"));
    process.stdout.write(`${name} done\n`);
  }
  conn.ws.close();
  chrome.kill();
}
run().catch((e) => { console.error(e); chrome.kill(); process.exit(1); });
