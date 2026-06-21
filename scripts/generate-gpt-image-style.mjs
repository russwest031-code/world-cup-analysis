import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "outputs", "agent", "style");
const apiKey = process.env.OPENAI_API_KEY || "";
const model = process.env.GPT_IMAGE_MODEL || "gpt-image-2";
const enabled = process.env.USE_GPT_IMAGE !== "0";

function writeMeta(targetDate, payload) {
  fs.mkdirSync(outputDir, { recursive: true });
  const meta = {
    generatedAt: new Date().toISOString(),
    targetDate,
    model,
    ...payload
  };
  fs.writeFileSync(path.join(outputDir, `${targetDate}-style-meta.json`), `${JSON.stringify(meta, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(outputDir, "latest-style-meta.json"), `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

function promptForOverview(payload) {
  const matches = (payload.matches || []).slice(0, 4).map(item => item.title).join(" / ");
  return [
    "Create a premium Xiaohongshu-style vertical football prediction infographic BACKGROUND TEMPLATE.",
    "Canvas: vertical 1088x1440, clean blue and white sports analytics style.",
    "Important: do NOT include any readable text, numbers, team names, flags, logos, watermarks, odds, percentages, or score values.",
    "Leave clean empty zones for an app to overlay exact match data later:",
    "- top title band",
    "- four rounded match rows",
    "- lower score-structure panel",
    "- bottom conclusion strip",
    "Use subtle football texture, diagonal blue ribbons, soft shadows, chart-like decorative lines, modern Chinese sports media aesthetic.",
    "The final image must be a background only, with no factual content.",
    `Context only, do not render as text: ${matches}`
  ].join("\n");
}

async function generate(payloadPath) {
  const payload = JSON.parse(fs.readFileSync(payloadPath, "utf8"));
  const targetDate = payload.targetDate || new Date().toISOString().slice(0, 10);
  fs.mkdirSync(outputDir, { recursive: true });

  if (!enabled) {
    writeMeta(targetDate, { status: "disabled", note: "USE_GPT_IMAGE=0" });
    return false;
  }
  if (!apiKey) {
    writeMeta(targetDate, { status: "skipped", note: "OPENAI_API_KEY is not set; using deterministic card background." });
    return false;
  }

  const prompt = promptForOverview(payload);
  const body = {
    model,
    prompt,
    size: "1088x1440",
    quality: process.env.GPT_IMAGE_QUALITY || "medium",
    output_format: "png",
    background: "opaque",
    n: 1
  };

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const json = await response.json().catch(() => null);
  if (!response.ok) {
    writeMeta(targetDate, {
      status: "error",
      error: json?.error?.message || `HTTP ${response.status}`,
      prompt
    });
    return false;
  }

  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) {
    writeMeta(targetDate, { status: "error", error: "OpenAI response did not include b64_json.", prompt });
    return false;
  }

  const image = Buffer.from(b64, "base64");
  const dated = path.join(outputDir, `${targetDate}-overview-bg.png`);
  const latest = path.join(outputDir, "latest-overview-bg.png");
  fs.writeFileSync(dated, image);
  fs.writeFileSync(latest, image);
  writeMeta(targetDate, {
    status: "connected",
    output: path.relative(root, dated),
    prompt
  });
  console.log(`GPT Image style background generated -> ${path.relative(root, dated)}`);
  return true;
}

const payloadPath = process.argv[2];
if (!payloadPath) {
  console.error("Usage: node scripts/generate-gpt-image-style.mjs <agent-json>");
  process.exit(1);
}

generate(path.resolve(payloadPath)).catch(error => {
  const fallbackDate = new Date().toISOString().slice(0, 10);
  writeMeta(fallbackDate, { status: "error", error: error.message });
  console.warn(`GPT Image style generation failed: ${error.message}`);
  process.exitCode = 0;
});
