// force Render redeploy 2026-06-19
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4186);
const remoteDataUrl = process.env.REMOTE_DATA_URL || "https://raw.githubusercontent.com/russwest031-code/world-cup-analysis/main/data.js";
const remoteDataTtlMs = Number(process.env.REMOTE_DATA_TTL_MS || 5 * 60 * 1000);
let remoteDataCache = null;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

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
