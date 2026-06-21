import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");
const outputDir = path.join(root, "outputs", "agent");
const requestedDate = process.env.AGENT_DATE || "";
const maxMatches = Number(process.env.AGENT_LIMIT || 12);
const bundledPython = "C:\\Users\\Russell\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe";

function loadData() {
  const code = fs.readFileSync(dataPath, "utf8");
  const sandbox = {};
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return {
    meta: sandbox.ANALYSIS_META || {},
    matches: sandbox.MATCHES || [],
    backtest: sandbox.BACKTEST || null
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundTriplet(values) {
  const rounded = values.map(value => Math.round(value));
  rounded[0] += 100 - rounded.reduce((sum, value) => sum + value, 0);
  return rounded;
}

function outcomeLabel(index) {
  return index === 0 ? "主胜" : index === 1 ? "平局" : "客胜";
}

function sideName(match, index) {
  return index === 0 ? match.home.name : index === 2 ? match.away.name : "平局";
}

function topIndex(values) {
  return values.indexOf(Math.max(...values));
}

function hasMarket(match) {
  return ["connected", "snapshot"].includes(match.marketSignals?.status) && Array.isArray(match.marketSignals?.impliedProbabilities);
}

function qualityPenalty(match) {
  const counts = match.matchIntelligence?.dataQuality?.counts || {};
  const missing = counts.missing || 0;
  const inferred = counts.inferred || 0;
  return missing * 3 + inferred * 1.5;
}

function marketBlendWeight(match) {
  if (!hasMarket(match)) return 0;
  const bookmakers = Number(match.marketSignals.bookmakers || 0);
  const missingPenalty = qualityPenalty(match);
  let weight = bookmakers >= 30 ? 0.38 : bookmakers >= 10 ? 0.32 : 0.24;
  if (missingPenalty >= 9) weight += 0.05;
  if (match.marketCalibration?.drawGuardApplied) weight = Math.min(weight, 0.35);
  return clamp(weight, 0.18, 0.45);
}

function consensusLevel(model, market) {
  if (!market) return { level: "无市场", gap: null };
  const modelTop = topIndex(model);
  const marketTop = topIndex(market);
  const gap = Math.abs(model[modelTop] - market[modelTop]);
  if (modelTop === marketTop && gap <= 12) return { level: "高度一致", gap };
  if (modelTop === marketTop) return { level: "方向一致但强度分歧", gap };
  return { level: "方向冲突", gap };
}

function agentProbabilities(match) {
  const base = match.marketCalibration?.modelOnly || match.probabilities || [34, 33, 33];
  const current = match.probabilities || base;
  const market = hasMarket(match) ? match.marketSignals.impliedProbabilities : null;
  if (!market) {
    return {
      probabilities: current,
      marketWeight: 0,
      market: null,
      consensus: consensusLevel(base, null),
      note: "未采集到可用赔率，Agent 使用基础模型并降低市场层判断权重。"
    };
  }

  const weight = marketBlendWeight(match);
  const blended = roundTriplet(base.map((value, index) => value * (1 - weight) + market[index] * weight));
  const consensus = consensusLevel(base, market);
  let probabilities = blended;

  if (consensus.level === "方向冲突") {
    probabilities = roundTriplet(blended.map((value, index) => value * 0.85 + current[index] * 0.15));
  }

  return {
    probabilities,
    marketWeight: weight,
    market,
    consensus,
    note: consensus.level === "方向冲突"
      ? "基础模型与市场方向冲突，Agent 未盲从赔率，采用折中并降低置信。"
      : `赔率作为市场共识层参与 ${Math.round(weight * 100)}% 权重。`
  };
}

function confidence(match, agent) {
  const probs = agent.probabilities;
  const sorted = [...probs].sort((a, b) => b - a);
  let score = 48 + (sorted[0] - sorted[1]) * 0.55;
  if (agent.consensus.level === "高度一致") score += 10;
  if (agent.consensus.level === "方向一致但强度分歧") score += 4;
  if (agent.consensus.level === "方向冲突") score -= 12;
  score -= qualityPenalty(match);
  if (match.marketCalibration?.drawGuardApplied) score -= 4;
  return Math.round(clamp(score, 35, 88));
}

function confidenceLabel(value) {
  if (value >= 78) return "高";
  if (value >= 64) return "中高";
  if (value >= 52) return "中";
  return "低";
}

function pickScoreBand(match) {
  const bands = match.scoreBands || [];
  return bands[0] || { label: "比分区间待定", chance: "-", examples: [] };
}

function riskItems(match, agent) {
  const risks = [];
  const gaps = match.matchIntelligence?.dataQuality?.gaps || [];
  if (gaps.length) risks.push(`数据缺口：${gaps.join("、")}`);
  if (agent.consensus.level === "方向冲突") risks.push("模型与赔率方向冲突");
  if (agent.consensus.level === "方向一致但强度分歧") risks.push("模型与赔率强度分歧较大");
  if (match.marketCalibration?.drawGuardApplied) risks.push("低进球/僵局保护触发，热门方向有回撤风险");
  if ((match.motivation?.drawValue || 0) >= 0.65) risks.push("平局收益较高，强弱判断需打折");
  return risks.slice(0, 4);
}

function evidenceItems(match, agent) {
  const items = [];
  const probs = agent.probabilities;
  const pick = topIndex(probs);
  items.push(`Agent 综合概率：主${probs[0]}% / 平${probs[1]}% / 客${probs[2]}%，倾向${sideName(match, pick)}。`);
  if (agent.market) {
    items.push(`市场隐含概率：主${agent.market[0]}% / 平${agent.market[1]}% / 客${agent.market[2]}%，${agent.consensus.level}。`);
  }
  if (match.expectedGoals) {
    items.push(`预期进球：${match.home.name} ${match.expectedGoals.home}，${match.away.name} ${match.expectedGoals.away}。`);
  }
  if (match.motivation?.note) items.push(match.motivation.note);
  if (match.matchIntelligence?.dataQuality?.summary) items.push(match.matchIntelligence.dataQuality.summary);
  return items.slice(0, 5);
}

function analyzeMatch(match) {
  const agent = agentProbabilities(match);
  const conf = confidence(match, agent);
  const pick = topIndex(agent.probabilities);
  const scoreBand = pickScoreBand(match);
  const topScores = (match.scoreOdds || []).slice(0, 3).map(item => `${item.score}(${item.chance}%)`);
  const risks = riskItems(match, agent);
  return {
    id: match.id,
    date: match.date,
    time: match.time,
    title: `${match.home.name} vs ${match.away.name}`,
    homeName: match.home.name,
    awayName: match.away.name,
    homeCode: match.home.code,
    awayCode: match.away.code,
    pick: outcomeLabel(pick),
    pickText: sideName(match, pick),
    probabilities: {
      home: agent.probabilities[0],
      draw: agent.probabilities[1],
      away: agent.probabilities[2]
    },
    confidence: conf,
    confidenceLabel: confidenceLabel(conf),
    baseline: match.probabilities,
    market: agent.market,
    marketWeight: Math.round(agent.marketWeight * 100),
    consensus: agent.consensus.level,
    scoreBand,
    topScores,
    risks,
    evidence: evidenceItems(match, agent),
    xhs: buildXhsText(match, agent, conf, scoreBand, topScores, risks)
  };
}

function buildXhsText(match, agent, conf, scoreBand, topScores, risks) {
  const probs = agent.probabilities;
  const pick = topIndex(probs);
  const scoreText = topScores.length ? topScores.join(" / ") : "暂无精确比分";
  return [
    `【${match.home.name} vs ${match.away.name}】`,
    `方向：${outcomeLabel(pick)}（${sideName(match, pick)}）`,
    `比分区间：${scoreBand.label}，参考 ${scoreBand.examples?.join(" / ") || scoreText}`,
    `综合概率：主${probs[0]}% / 平${probs[1]}% / 客${probs[2]}%`,
    `信心：${confidenceLabel(conf)}（${conf}）`,
    `关键点：${agent.note}`,
    risks.length ? `风险：${risks.join("；")}` : "风险：暂无明显额外风险，但足球单场随机性较高。",
    "仅做赛前分析，不构成投注建议。"
  ].join("\n");
}

function markdownReport(meta, analyses, targetDate) {
  const lines = [];
  lines.push(`# 每日比赛预测 Agent`);
  lines.push("");
  lines.push(`生成时间：${new Date().toISOString()}`);
  lines.push(`目标日期：${targetDate}`);
  lines.push(`数据刷新：${meta.updatedAt || "-"}`);
  lines.push("");
  lines.push(`> 规则：现有模型作为 baseline，赔率作为市场共识层，Agent 只在证据充分时调整方向；数据缺口必须上报，不用假数据补齐。`);
  lines.push("");
  for (const item of analyses) {
    lines.push(`## ${item.time} ${item.title}`);
    lines.push("");
    lines.push(`- 最终方向：**${item.pick} / ${item.pickText}**`);
    lines.push(`- 三层对比：基础模型 ${tripletText(item.baseline)}；市场 ${item.market ? tripletText(item.market) : "未采集"}；Agent ${tripletText([item.probabilities.home, item.probabilities.draw, item.probabilities.away])}`);
    lines.push(`- 综合概率：主 ${item.probabilities.home}% / 平 ${item.probabilities.draw}% / 客 ${item.probabilities.away}%`);
    lines.push(`- 信心：${item.confidenceLabel}（${item.confidence}）`);
    lines.push(`- 市场一致性：${item.consensus}，赔率权重 ${item.marketWeight}%`);
    lines.push(`- 比分区间：${item.scoreBand.label}（${item.scoreBand.chance}%），例：${item.scoreBand.examples?.join(" / ") || "-"}`);
    lines.push(`- 参考比分：${item.topScores.join(" / ") || "-"}`);
    lines.push("");
    lines.push(`依据：`);
    for (const evidence of item.evidence) lines.push(`- ${evidence}`);
    lines.push("");
    lines.push(`风险：`);
    if (item.risks.length) {
      for (const risk of item.risks) lines.push(`- ${risk}`);
    } else {
      lines.push(`- 暂无明显额外风险，但足球单场随机性较高。`);
    }
    lines.push("");
    lines.push(`小红书文案：`);
    lines.push("```text");
    lines.push(item.xhs);
    lines.push("```");
    lines.push("");
  }
  return lines.join("\n");
}

function tripletText(values) {
  if (!Array.isArray(values)) return "-";
  return `主${values[0]}% / 平${values[1]}% / 客${values[2]}%`;
}

function xhsReport(analyses) {
  return analyses.map(item => item.xhs).join("\n\n---\n\n");
}

function main() {
  const { meta, matches } = loadData();
  const upcoming = matches.filter(match => match.status !== "completed");
  const targetDate = requestedDate || upcoming.map(match => match.date).sort()[0] || new Date().toISOString().slice(0, 10);
  const candidates = matches
    .filter(match => match.status !== "completed")
    .filter(match => !targetDate || match.date === targetDate)
    .slice(0, maxMatches);
  const fallback = candidates.length ? candidates : matches.filter(match => match.status !== "completed").slice(0, maxMatches);
  const analyses = fallback.map(analyzeMatch);

  fs.mkdirSync(outputDir, { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    targetDate,
    sourceUpdatedAt: meta.updatedAt || null,
    model: "agent-ensemble-v1",
    policy: "baseline-plus-market-plus-evidence-gaps",
    matches: analyses
  };
  fs.writeFileSync(path.join(outputDir, `${targetDate}.json`), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(outputDir, `${targetDate}.md`), markdownReport(meta, analyses, targetDate), "utf8");
  fs.writeFileSync(path.join(outputDir, `${targetDate}.xhs.txt`), xhsReport(analyses), "utf8");
  fs.writeFileSync(path.join(outputDir, "latest.json"), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(outputDir, "latest.md"), markdownReport(meta, analyses, targetDate), "utf8");
  fs.writeFileSync(path.join(outputDir, "latest.xhs.txt"), xhsReport(analyses), "utf8");
  renderCards(path.join(outputDir, `${targetDate}.json`));
  console.log(`Agent report generated: ${analyses.length} matches -> outputs/agent/${targetDate}.md`);
}

function renderCards(jsonFile) {
  const script = path.join(root, "scripts", "render-agent-cards.py");
  const candidates = [
    process.env.PYTHON,
    fs.existsSync(bundledPython) ? bundledPython : "",
    "python"
  ].filter(Boolean);
  for (const python of candidates) {
    const result = spawnSync(python, [script, jsonFile], { cwd: root, encoding: "utf8" });
    if (result.status === 0) {
      if (result.stdout) process.stdout.write(result.stdout);
      return true;
    }
  }
  console.warn("Card images were not rendered: Python/Pillow runtime unavailable.");
  return false;
}

main();
