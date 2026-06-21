// force Render redeploy 2026-06-19
const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = __dirname;
const port = Number(process.env.PORT || 4186);
const remoteDataUrl = process.env.REMOTE_DATA_URL || "https://raw.githubusercontent.com/russwest031-code/world-cup-analysis/main/data.js";
const remoteDataTtlMs = Number(process.env.REMOTE_DATA_TTL_MS || 5 * 60 * 1000);
let remoteDataCache = null;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".txt": "text/plain; charset=utf-8"
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1024 * 64) {
        reject(new Error("request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function json(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(payload, null, 2));
}

function localDate(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function parseChatDate(message) {
  const explicit = message.match(/20\d{2}[-/.]\d{1,2}[-/.]\d{1,2}/);
  if (explicit) {
    const [y, m, d] = explicit[0].split(/[-/.]/);
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }
  const md = message.match(/(\d{1,2})\s*[月/.-]\s*(\d{1,2})\s*(日|号)?/);
  if (md) return `${new Date().getFullYear()}-${String(md[1]).padStart(2, "0")}-${String(md[2]).padStart(2, "0")}`;
  if (/后天/.test(message)) return localDate(2);
  if (/明天|明日/.test(message)) return localDate(1);
  if (/今天|今日/.test(message)) return localDate(0);
  return "";
}

function parseChatLimit(message) {
  const match = message.match(/(\d+)\s*(场|場)/);
  return match ? String(Math.max(1, Math.min(12, Number(match[1])))) : "";
}

function runNodeScript(script, env = {}) {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", script)], {
    cwd: root,
    env: { ...process.env, ...env },
    encoding: "utf8",
    timeout: 180000
  });
  return {
    ok: result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    status: result.status
  };
}

function latestAgentPayload() {
  const file = path.join(root, "outputs", "agent", "latest.json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function latestXhsText() {
  const file = path.join(root, "outputs", "agent", "latest.xhs.txt");
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function latestCardUrls() {
  const dir = path.join(root, "outputs", "agent", "cards", "latest");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(name => name.toLowerCase().endsWith(".png"))
    .sort()
    .map(name => `/outputs/agent/cards/latest/${encodeURIComponent(name)}`);
}

function shouldGenerate(message) {
  return /(生成|出|做|来一版|小红书|图片|卡片|预测)/.test(message) && !/(在哪|路径|查看)/.test(message);
}

function chatbotHelp() {
  return [
    "你可以直接说：",
    "1. 生成明天小红书图",
    "2. 生成 2026-06-22 4场",
    "3. 只看文案",
    "4. 图片在哪",
    "5. 更新数据后生成"
  ].join("\n");
}

function chatbotReply(message) {
  const normalized = String(message || "").trim();
  if (!normalized) return { reply: chatbotHelp(), payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
  if (/帮助|help|怎么用/.test(normalized)) {
    return { reply: chatbotHelp(), payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
  }
  if (/(文案|正文)/.test(normalized) && !shouldGenerate(normalized)) {
    return { reply: "这是最新小红书文案。", payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
  }
  if (/(图片在哪|图片|路径|文件在哪)/.test(normalized) && !shouldGenerate(normalized)) {
    return { reply: "这是最新生成的图片。", payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
  }
  if (/更新数据|刷新数据|重新拉数据|最新数据/.test(normalized)) {
    const update = runNodeScript("update-predictions.mjs");
    if (!update.ok) {
      return { reply: `数据刷新失败，我没有继续生成。\n${update.stderr || update.stdout}`, payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
    }
  }
  if (shouldGenerate(normalized) || /更新数据|刷新数据|重新拉数据|最新数据/.test(normalized)) {
    const date = parseChatDate(normalized);
    const limit = parseChatLimit(normalized);
    const env = {};
    if (date) env.AGENT_DATE = date;
    if (limit) env.AGENT_LIMIT = limit;
    const run = runNodeScript("daily-agent.mjs", env);
    if (!run.ok) {
      return { reply: `生成失败：\n${run.stderr || run.stdout}`, payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
    }
    const payload = latestAgentPayload();
    return {
      reply: `生成好了：${payload?.targetDate || date || "最近比赛"}，共 ${payload?.matches?.length || 0} 场。下面是图片和文案。`,
      payload,
      text: latestXhsText(),
      cards: latestCardUrls()
    };
  }
  return { reply: `我没理解这句。\n${chatbotHelp()}`, payload: latestAgentPayload(), text: latestXhsText(), cards: latestCardUrls() };
}

async function fetchRemoteDataJs() {
  const now = Date.now();
  if (remoteDataCache && remoteDataCache.expiresAt > now) return remoteDataCache;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${remoteDataUrl}?t=${now}`, {
      signal: controller.signal,
      headers: { "User-Agent": "world-cup-analysis-render/1.0" }
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const body = await response.text();
    if (!body.includes("ANALYSIS_META") || !body.includes("MATCHES")) {
      throw new Error("remote data.js did not look like app data");
    }
    remoteDataCache = {
      body,
      fetchedAt: new Date().toISOString(),
      expiresAt: now + remoteDataTtlMs,
      source: "github-main"
    };
    return remoteDataCache;
  } finally {
    clearTimeout(timer);
  }
}

function serveFile(file, res, extraHeaders = {}) {
  res.writeHead(200, {
    "Content-Type": types[path.extname(file)] || "application/octet-stream",
    "Cache-Control": "no-store",
    ...extraHeaders
  });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({
      status: "ok",
      uptime: process.uptime(),
      remoteData: remoteDataCache ? {
        source: remoteDataCache.source,
        fetchedAt: remoteDataCache.fetchedAt,
        expiresAt: new Date(remoteDataCache.expiresAt).toISOString()
      } : null
    }));
  }

  if (url.pathname === "/api/chatbot" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const input = body ? JSON.parse(body) : {};
      return json(res, 200, chatbotReply(input.message || ""));
    } catch (error) {
      return json(res, 500, { reply: `Chatbot error: ${error.message}`, error: error.message });
    }
  }

  if (url.pathname === "/api/agent/latest") {
    return json(res, 200, {
      payload: latestAgentPayload(),
      text: latestXhsText(),
      cards: latestCardUrls()
    });
  }

  if (url.pathname === "/data.js") {
    try {
      const remote = await fetchRemoteDataJs();
      res.writeHead(200, {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Data-Source": remote.source,
        "X-Data-Fetched-At": remote.fetchedAt
      });
      return res.end(remote.body);
    } catch (error) {
      console.warn(`Remote data.js unavailable, falling back to bundled file: ${error.message}`);
      const localData = path.join(root, "data.js");
      return serveFile(localData, res, { "X-Data-Source": "bundled-fallback" });
    }
  }

  const relative = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const file = path.resolve(root, relative);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Not found");
  }
  serveFile(file, res);
});

server.listen(port, "0.0.0.0", () => console.log(`World Cup Analysis: http://0.0.0.0:${port}`));
