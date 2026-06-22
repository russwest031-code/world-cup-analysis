import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiKey = process.env.OPENAI_API_KEY || "";
const model = process.env.GPT_IMAGE_MODEL || "gpt-image-2";
const size = process.env.GPT_IMAGE_SIZE || "1024x1536";
const quality = process.env.GPT_IMAGE_QUALITY || "medium";

function cnDate(value) {
  const parts = String(value || "").split("-");
  if (parts.length !== 3) return value || "";
  return `${parts[0]}年${Number(parts[1])}月${Number(parts[2])}日`;
}

function pctTriplet(item) {
  const probs = item.probabilities || {};
  return `主胜 ${probs.home ?? "-"}% / 平局 ${probs.draw ?? "-"}% / 客胜 ${probs.away ?? "-"}%`;
}

function cleanScore(value) {
  return String(value || "").replace(/\(.+?\)/g, "");
}

function matchBlock(item, index) {
  const examples = item.scoreBand?.examples?.length
    ? item.scoreBand.examples.slice(0, 3).join(" / ")
    : (item.topScores || []).slice(0, 3).map(cleanScore).join(" / ");
  const risks = (item.risks || []).slice(0, 2).join("；") || "暂无明显额外风险";
  return [
    `${index}. ${item.homeName} vs ${item.awayName}`,
    `方向：${item.pick}，倾向 ${item.pickText}`,
    `概率：${pctTriplet(item)}`,
    `信心：${item.confidenceLabel} ${item.confidence}`,
    `比分区间：${item.scoreBand?.label || "待定"}，参考 ${examples || "待定"}`,
    `风险：${risks}`
  ].join("\n");
}

function buildCoverPrompt(payload) {
  const matches = (payload.matches || []).slice(0, 6);
  const blocks = matches.map((item, index) => matchBlock(item, index + 1)).join("\n\n");
  return [
    "生成一张竖版小红书足球赛前预测信息图。",
    `画布尺寸：${size}。风格：专业体育数据分析、蓝白配色、干净、有国旗氛围但不要使用真实队徽，不要加水印。`,
    "请直接把下面所有中文内容排版到图片里，文字必须清晰可读，不要乱码，不要替换数字。",
    "",
    `主标题：世界杯赛前预测`,
    `副标题：${cnDate(payload.targetDate)}｜Agent 模型 + 赔率共识`,
    "",
    "内容区：做成 4 到 6 个圆角比赛卡片，每张卡包含队名、方向、三项概率、信心、比分区间、风险。",
    "概率条：主胜用蓝色，平局用灰色，客胜用红色。",
    "底部固定免责声明：仅做赛前分析，不构成投注建议。",
    "",
    "准确排版以下数据：",
    blocks,
    "",
    "视觉要求：",
    "1. 整体像可以直接发小红书的成品封面图。",
    "2. 字体粗细有层级，标题大，队名醒目，概率和比分突出。",
    "3. 留白舒服，不要拥挤。",
    "4. 不要生成任何未提供的新事实。",
    "5. 如果需要装饰，可以用足球、球场线、数据图标、抽象国旗色块。"
  ].join("\n");
}

async function callImageApi(prompt) {
  const requestBody = {
    model,
    prompt,
    size,
    quality,
    output_format: "png",
    n: 1
  };

  let response;
  try {
    response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
  } catch (error) {
    return callImageApiWithCurl(requestBody, error);
  }

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(body?.error?.message || `HTTP ${response.status} ${response.statusText}`);
  }

  const b64 = body?.data?.[0]?.b64_json;
  if (!b64) throw new Error("OpenAI response did not include data[0].b64_json");
  return Buffer.from(b64, "base64");
}

function callImageApiWithCurl(requestBody, originalError) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "wc26-image2-"));
  const requestPath = path.join(tempDir, "request.json");
  const responsePath = path.join(tempDir, "response.json");
  const configPath = path.join(tempDir, "curl.conf");
  fs.writeFileSync(requestPath, JSON.stringify(requestBody), "utf8");
  fs.writeFileSync(configPath, [
    'url = "https://api.openai.com/v1/images/generations"',
    'request = "POST"',
    'header = "Content-Type: application/json"',
    `header = "Authorization: Bearer ${apiKey.replace(/"/g, '\\"')}"`,
    `data = "@${requestPath.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`,
    `output = "${responsePath.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`,
    'silent',
    'show-error'
  ].join("\n"), "utf8");

  const result = spawnSync("curl.exe", ["--config", configPath, "--write-out", "%{http_code}"], {
    cwd: root,
    encoding: "utf8",
    timeout: 240000,
    maxBuffer: 64 * 1024 * 1024
  });

  try {
    const httpCode = Number((result.stdout || "").trim().slice(-3));
    const raw = fs.existsSync(responsePath) ? fs.readFileSync(responsePath, "utf8") : "";
    let body = null;
    try {
      body = raw ? JSON.parse(raw) : null;
    } catch {
      body = null;
    }

    if (result.status !== 0 || !httpCode || httpCode >= 400) {
      const cause = originalError?.cause?.code ? `${originalError.cause.code}: ${originalError.cause.message}` : originalError.message;
      const apiError = body?.error?.message || raw || result.stderr || "unknown error";
      throw new Error(`Node fetch failed (${cause}); curl fallback failed (HTTP ${httpCode || "?"}: ${apiError})`);
    }

    const b64 = body?.data?.[0]?.b64_json;
    if (!b64) throw new Error("curl response did not include data[0].b64_json");
    return Buffer.from(b64, "base64");
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function callImageApiWithPowerShell(requestBody, originalError) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "wc26-image2-"));
  const requestPath = path.join(tempDir, "request.json");
  const responsePath = path.join(tempDir, "response.json");
  const errorPath = path.join(tempDir, "error.txt");
  fs.writeFileSync(requestPath, JSON.stringify(requestBody), "utf8");

  const command = [
    "$ErrorActionPreference = 'Stop'",
    `$body = Get-Content -LiteralPath '${requestPath.replace(/'/g, "''")}' -Raw`,
    "$headers = @{ Authorization = ('Bearer ' + $env:OPENAI_API_KEY) }",
    "try {",
    "  $response = Invoke-RestMethod -Uri 'https://api.openai.com/v1/images/generations' -Method Post -Headers $headers -ContentType 'application/json' -Body $body -TimeoutSec 180",
    `  $response | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath '${responsePath.replace(/'/g, "''")}' -Encoding UTF8`,
    "} catch {",
    "  $message = $_.Exception.Message",
    "  if ($_.Exception.Response -and $_.Exception.Response.GetResponseStream()) {",
    "    $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())",
    "    $bodyText = $reader.ReadToEnd()",
    "    if ($bodyText) { $message = $bodyText }",
    "  }",
    `  $message | Set-Content -LiteralPath '${errorPath.replace(/'/g, "''")}' -Encoding UTF8`,
    "  exit 1",
    "}"
  ].join("; ");

  const result = spawnSync("powershell", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", command], {
    cwd: root,
    env: { ...process.env, OPENAI_API_KEY: apiKey },
    encoding: "utf8",
    timeout: 240000,
    maxBuffer: 64 * 1024 * 1024
  });

  try {
    if (result.status !== 0) {
      const detail = fs.existsSync(errorPath) ? fs.readFileSync(errorPath, "utf8").trim() : (result.stderr || result.stdout || "");
      const cause = originalError?.cause?.code ? `${originalError.cause.code}: ${originalError.cause.message}` : originalError.message;
      throw new Error(`Node fetch failed (${cause}); PowerShell fallback failed (${detail || "unknown error"})`);
    }

    const body = JSON.parse(fs.readFileSync(responsePath, "utf8"));
    const b64 = Array.isArray(body.data) ? body.data[0]?.b64_json : body.data?.b64_json;
    if (!b64) {
      const apiError = body.error?.message || "PowerShell response did not include data[0].b64_json";
      throw new Error(apiError);
    }
    return Buffer.from(b64, "base64");
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function emptyDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

async function generateCover(payloadPath) {
  if (!apiKey) {
    return { ok: false, cards: [], error: "OPENAI_API_KEY is not set" };
  }

  const payload = JSON.parse(fs.readFileSync(payloadPath, "utf8"));
  const targetDate = payload.targetDate || new Date().toISOString().slice(0, 10);
  const prompt = buildCoverPrompt(payload);
  const image = await callImageApi(prompt);

  const baseDir = path.join(root, "outputs", "agent", "image2");
  const datedDir = path.join(baseDir, targetDate);
  const latestDir = path.join(baseDir, "latest");
  fs.mkdirSync(datedDir, { recursive: true });
  emptyDir(latestDir);

  const filename = "00-image2-cover.png";
  fs.writeFileSync(path.join(datedDir, filename), image);
  fs.writeFileSync(path.join(latestDir, filename), image);

  const meta = {
    generatedAt: new Date().toISOString(),
    targetDate,
    model,
    size,
    quality,
    prompt,
    cards: [`/outputs/agent/image2/latest/${filename}`]
  };
  fs.writeFileSync(path.join(datedDir, "image2-meta.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
  fs.writeFileSync(path.join(latestDir, "image2-meta.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
  return { ok: true, cards: meta.cards };
}

const args = process.argv.slice(2);
if (!args[0] || args.includes("--help") || args.includes("-h")) {
  console.error("Usage: node scripts/generate-gpt-image-style.mjs <agent-json> [--cover]");
  process.exit(args[0] ? 0 : 1);
}

generateCover(path.resolve(args[0]))
  .then(result => {
    console.log(JSON.stringify(result));
    if (!result.ok) process.exitCode = 1;
  })
  .catch(error => {
    console.log(JSON.stringify({ ok: false, cards: [], error: error.message }));
    process.exitCode = 1;
  });
