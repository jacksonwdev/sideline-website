import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9344;
const BASE = "http://localhost:3280";
const PROFILE = process.env.TEMP + "\\sl-cdp-measure";

const PAGES = [
  ["home", "/"],
  ["communities", "/communities"],
  ["creators", "/creators"],
  ["compete", "/compete"],
  ["about", "/about"],
  ["contact", "/contact"],
  ["waitlist", "/waitlist"],
];

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

  for (const [name, path] of PAGES) {
    for (const v of ["mobile", "desktop"]) {
      const metrics =
        v === "mobile"
          ? { width: 390, height: 844, deviceScaleFactor: 1, mobile: true }
          : { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false };
      await conn.send("Emulation.setDeviceMetricsOverride", metrics, sessionId);
      await conn.send("Page.navigate", { url: BASE + path }, sessionId);
      await sleep(1500);
      const r = await conn.send(
        "Runtime.evaluate",
        {
          expression:
            "(()=>{let m=0,el=null;document.querySelectorAll('*').forEach(n=>{if(n.scrollWidth>document.documentElement.clientWidth&&n.getBoundingClientRect().right>m){m=Math.ceil(n.getBoundingClientRect().right);el=n;}});return JSON.stringify({cw:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth,worst:m,tag:el?el.tagName+'.'+(el.className&&el.className.toString?el.className.toString().slice(0,70):''):'none'});})()",
          returnByValue: true,
        },
        sessionId,
      );
      const m = JSON.parse(r.result.value);
      const ov = m.sw - m.cw;
      process.stdout.write(
        `${name}-${v}: cw=${m.cw} sw=${m.sw} overflow=${ov}` +
          (ov > 0 ? `  WORST right=${m.worst} -> ${m.tag}` : ` OK`) +
          "\n",
      );
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
