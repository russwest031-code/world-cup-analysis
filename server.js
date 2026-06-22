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
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
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
  const zhMd = message.match(/(\d{1,2})\s*[月/.]\s*(\d{1,2})\s*(日|号)?/);
  if (zhMd) return `${new Date().getFullYear()}-${String(zhMd[1]).padStart(2, "0")}-${String(zhMd[2]).padStart(2, "0")}`;
  if (/后天/.test(message)) return localDate(2);
  if (/明天|明日/.test(message)) return localDate(1);
  if (/今天|今日/.test(message)) return localDate(0);
  return "";
}

function parseChatLimit(message) {
  const match = message.match(/(\d+)\s*(场|场比赛|比赛)/);
  return match ? String(Math.max(1, Math.min(12, Number(match[1])))) : "";
}

function runNodeScript(script, env = {}, args = [], timeout = 240000) {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", script), ...args], {
    cwd: root,
    env: { ...process.env, ...env },
    encoding: "utf8",
    timeout
  });
  return {
    ok: result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    status: result.status,
    error: result.error ? result.error.message : ""
  };
}

function readJsonIfExists(file) {
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function latestAgentPayload() {
  return readJsonIfExists(path.join(root, "outputs", "agent", "latest.json"));
}

function latestXhsText() {
  const file = path.join(root, "outputs", "agent", "latest.xhs.txt");
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function imageUrlsFrom(dir, urlPrefix) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(name => name.toLowerCase().endsWith(".png"))
    .sort()
    .map(name => `${urlPrefix}/${encodeURIComponent(name)}`);
}

function latestLocalCardUrls() {
  return imageUrlsFrom(
    path.join(root, "outputs", "agent", "cards", "latest"),
    "/outputs/agent/cards/latest"
  );
}

function latestImage2Urls() {
  return imageUrlsFrom(
    path.join(root, "outputs", "agent", "image2", "latest"),
    "/outputs/agent/image2/latest"
  );
}

function isGenerateCommand(message) {
  return /(生成|出图|做图|来一张|小红书|图片|卡片|预测)/.test(message)
    && !/(在哪|路径|查看|只看|文案)/.test(message);
}

function wantsLocalTemplate(message) {
  return /(本地模板|本地生成|模板生成|不用image|不用Image|不用GPT|Pillow)/i.test(message);
}

function wantsDataRefresh(message) {
  return /(更新数据|刷新数据|重新拉数据|最新数据)/.test(message);
}

function chatbotHelp() {
  return [
    "你可以直接说：",
    "1. 生成明天小红书图（默认直连 GPT Image 2，需要 OPENAI_API_KEY）",
    "2. 本地模板生成明天小红书图（不用 OpenAI key）",
    "3. 生成 2026-06-22 4场",
    "4. 只看文案",
    "5. 图片在哪",
    "6. 更新数据后生成"
  ].join("\n");
}

function latestResponse(reply, cards = null) {
  return {
    reply,
    payload: latestAgentPayload(),
    text: latestXhsText(),
    cards: cards || latestImage2Urls().concat(latestLocalCardUrls()).slice(0, 8)
  };
}

function updateDataIfRequested(message) {
  if (!wantsDataRefresh(message)) return null;
  const update = runNodeScript("update-predictions.mjs", {}, [], 300000);
  if (!update.ok) {
    return latestResponse(`数据刷新失败，我没有继续生成。\n${update.stderr || update.stdout || update.error}`);
  }
  return null;
}

function generateAgentData(message, skipImages) {
  const date = parseChatDate(message);
  const limit = parseChatLimit(message);
  const env = {};
  if (date) env.AGENT_DATE = date;
  if (limit) env.AGENT_LIMIT = limit;
  if (skipImages) env.AGENT_SKIP_IMAGES = "1";
  const run = runNodeScript("daily-agent.mjs", env);
  return { run, date };
}

function generateLocalTemplate(message) {
  const { run, date } = generateAgentData(message, false);
  if (!run.ok) {
    return latestResponse(`本地模板生成失败：\n${run.stderr || run.stdout || run.error}`, latestLocalCardUrls());
  }
  const payload = latestAgentPayload();
  return {
    reply: `本地模板生成好了：${payload?.targetDate || date || "最近比赛"}，共 ${payload?.matches?.length || 0} 场。`,
    payload,
    text: latestXhsText(),
    cards: latestLocalCardUrls()
  };
}

function generateImage2(message) {
  const { run, date } = generateAgentData(message, true);
  if (!run.ok) {
    return latestResponse(`预测数据生成失败：\n${run.stderr || run.stdout || run.error}`, []);
  }

  if (!process.env.OPENAI_API_KEY) {
    return {
      reply: [
        "还不能直连 GPT Image 2：当前服务进程没有 OPENAI_API_KEY。",
        "",
        "要用 Image 2，需要先把 OpenAI API key 放进启动这个服务的环境变量里，然后重启 4186 服务。",
        "临时看效果可以点：本地模板生成。"
      ].join("\n"),
      payload: latestAgentPayload(),
      text: latestXhsText(),
      cards: []
    };
  }

  const jsonPath = path.join(root, "outputs", "agent", "latest.json");
  const imgRun = runNodeScript("generate-gpt-image-style.mjs", {}, [jsonPath, "--cover"], 300000);
  let result = null;
  try {
    result = JSON.parse((imgRun.stdout || "").trim());
  } catch {
    result = null;
  }

  if (!imgRun.ok || !result?.ok) {
    const error = result?.error || imgRun.stderr || imgRun.stdout || imgRun.error || "未知错误";
    return {
      reply: `GPT Image 2 生成失败：${error}\n\n可以先用“本地模板生成明天小红书图”兜底。`,
      payload: latestAgentPayload(),
      text: latestXhsText(),
      cards: []
    };
  }

  const payload = latestAgentPayload();
  return {
    reply: `GPT Image 2 生成好了：${payload?.targetDate || date || "最近比赛"}，共 ${payload?.matches?.length || 0} 场。`,
    payload,
    text: latestXhsText(),
    cards: result.cards?.length ? result.cards : latestImage2Urls()
  };
}

function chatbotReply(message) {
  const normalized = String(message || "").trim();
  if (!normalized || /帮助|怎么用|help/i.test(normalized)) return latestResponse(chatbotHelp());

  if (/只看文案|文案|正文/.test(normalized) && !isGenerateCommand(normalized)) {
    return latestResponse("这是最新小红书文案。", []);
  }

  if (/图片在哪|图片|路径|文件在哪/.test(normalized) && !isGenerateCommand(normalized)) {
    const image2Cards = latestImage2Urls();
    const localCards = latestLocalCardUrls();
    if (image2Cards.length) return latestResponse("这是最新 GPT Image 2 图片。", image2Cards);
    if (localCards.length) return latestResponse("当前还没有 GPT Image 2 图片，这是最新本地模板图片。", localCards);
    return latestResponse("还没有生成过图片。你可以说：生成明天小红书图。", []);
  }

  if (wantsDataRefresh(normalized) && !isGenerateCommand(normalized)) {
    const refreshError = updateDataIfRequested(normalized);
    if (refreshError) return refreshError;
    return latestResponse("数据已刷新。现在可以说：生成明天小红书图。", latestImage2Urls());
  }

  if (isGenerateCommand(normalized) || wantsDataRefresh(normalized)) {
    const refreshError = updateDataIfRequested(normalized);
    if (refreshError) return refreshError;
    return wantsLocalTemplate(normalized) ? generateLocalTemplate(normalized) : generateImage2(normalized);
  }

  return latestResponse(`我没理解这句。\n${chatbotHelp()}`);
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
      openaiImage2: Boolean(process.env.OPENAI_API_KEY),
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
      cards: latestImage2Urls().concat(latestLocalCardUrls())
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
      return serveFile(path.join(root, "data.js"), res, { "X-Data-Source": "bundled-fallback" });
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

server.listen(port, "0.0.0.0", () => {
  console.log(`World Cup Analysis: http://0.0.0.0:${port}`);
});
