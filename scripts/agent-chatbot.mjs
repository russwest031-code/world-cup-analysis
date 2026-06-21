import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "outputs", "agent");
const node = process.execPath;

input.setEncoding("utf8");

function localDate(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDate(message) {
  const explicit = message.match(/20\d{2}[-/.]\d{1,2}[-/.]\d{1,2}/);
  if (explicit) {
    const [y, m, d] = explicit[0].split(/[-/.]/);
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }
  const md = message.match(/(\d{1,2})\s*[月/.-]\s*(\d{1,2})\s*(日|号)?/);
  if (md) {
    return `${new Date().getFullYear()}-${String(md[1]).padStart(2, "0")}-${String(md[2]).padStart(2, "0")}`;
  }
  if (/后天/.test(message)) return localDate(2);
  if (/明天|明日/.test(message)) return localDate(1);
  if (/今天|今日/.test(message)) return localDate(0);
  return "";
}

function parseLimit(message) {
  const match = message.match(/(\d+)\s*(场|場)/);
  if (!match) return "";
  return String(Math.max(1, Math.min(12, Number(match[1]))));
}

function runAgent({ date = "", limit = "" } = {}) {
  const env = { ...process.env };
  if (date) env.AGENT_DATE = date;
  if (limit) env.AGENT_LIMIT = limit;
  const result = spawnSync(node, [path.join(root, "scripts", "daily-agent.mjs")], {
    cwd: root,
    env,
    encoding: "utf8"
  });
  return {
    ok: result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || ""
  };
}

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function latestJson() {
  const file = path.join(outputDir, "latest.json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function cardPaths() {
  const dir = path.join(outputDir, "cards", "latest");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(name => name.toLowerCase().endsWith(".png"))
    .sort()
    .map(name => path.join(dir, name));
}

function printOutputs({ showCopy = true } = {}) {
  const payload = latestJson();
  const cards = cardPaths();
  if (!payload) {
    console.log("还没有生成内容。你可以说：生成明天小红书图");
    return;
  }
  console.log("");
  console.log(`已生成：${payload.targetDate}，共 ${payload.matches?.length || 0} 场`);
  console.log("图片：");
  for (const file of cards) console.log(`- ${file}`);
  console.log(`完整报告：${path.join(outputDir, "latest.md")}`);
  console.log(`小红书文案：${path.join(outputDir, "latest.xhs.txt")}`);
  if (showCopy) {
    const copy = readText(path.join(outputDir, "latest.xhs.txt"));
    if (copy) {
      console.log("");
      console.log("小红书文案预览：");
      console.log(copy);
    }
  }
}

function help() {
  console.log(`
你可以这样说：
- 生成明天小红书图
- 生成 2026-06-22 4场
- 只看文案
- 图片在哪
- 完整报告
- 更新数据后生成
- 退出
`);
}

function shouldGenerate(message) {
  return /(生成|出|做|来一版|小红书|图片|卡片|预测)/.test(message) && !/(在哪|路径|打开|查看)/.test(message);
}

function shouldUpdateData(message) {
  return /(更新数据|刷新数据|重新拉数据|最新数据)/.test(message);
}

function updatePredictions() {
  console.log("开始刷新预测数据，这一步可能稍慢。");
  const result = spawnSync(node, [path.join(root, "scripts", "update-predictions.mjs")], {
    cwd: root,
    env: process.env,
    encoding: "utf8"
  });
  if (result.stdout) console.log(result.stdout);
  if (result.stderr) console.warn(result.stderr);
  return result.status === 0;
}

async function main() {
  console.log("比赛预测 Chatbot 已启动。你说指令，我生成内容。输入“帮助”看例子，输入“退出”结束。");
  const rl = readline.createInterface({ input, output });
  while (true) {
    const answer = (await rl.question("\n你：")).trim();
    if (!answer) continue;
    if (/^(退出|exit|quit|q)$/i.test(answer)) break;
    if (/帮助|help|怎么用/.test(answer)) {
      help();
      continue;
    }
    if (/文案/.test(answer) && !shouldGenerate(answer)) {
      const copy = readText(path.join(outputDir, "latest.xhs.txt"));
      console.log(copy || "还没有文案。你可以说：生成明天小红书图");
      continue;
    }
    if (/(图片在哪|图片|路径|文件在哪)/.test(answer) && !shouldGenerate(answer)) {
      printOutputs({ showCopy: false });
      continue;
    }
    if (/(完整报告|报告)/.test(answer) && !shouldGenerate(answer)) {
      const report = readText(path.join(outputDir, "latest.md"));
      console.log(report ? report.slice(0, 3000) : "还没有报告。你可以说：生成明天小红书图");
      continue;
    }
    if (shouldUpdateData(answer)) {
      const ok = updatePredictions();
      if (!ok) {
        console.log("数据刷新失败，我先用现有数据继续生成。");
      }
    }
    if (shouldGenerate(answer) || shouldUpdateData(answer)) {
      const date = parseDate(answer);
      const limit = parseLimit(answer);
      console.log(`开始生成${date ? ` ${date}` : ""}${limit ? ` ${limit}场` : ""}。`);
      const result = runAgent({ date, limit });
      if (result.stdout) console.log(result.stdout);
      if (result.stderr) console.warn(result.stderr);
      if (!result.ok) {
        console.log("生成失败。你可以把上面的错误发给我。");
        continue;
      }
      printOutputs({ showCopy: true });
      continue;
    }
    console.log("我没理解这句。你可以说：生成明天小红书图 / 只看文案 / 图片在哪 / 帮助");
  }
  rl.close();
  console.log("已退出。");
}

main();
