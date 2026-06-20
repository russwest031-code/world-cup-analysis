// Loop 2: Match Autopsy
// Analyzes WHY a completed match had its score — which factors were right/wrong

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");

function loadMatches() {
  const code = fs.readFileSync(dataPath, "utf8");
  const sandbox = { window: {} };
  const vm = require("node:vm");
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: "data.js" });
  return sandbox.window.MATCHES || [];
}

function actualResult(m) {
  if (!m.actualScore) return null;
  const [h, a] = m.actualScore.split("-").map(Number);
  if (isNaN(h) || isNaN(a)) return null;
  if (h > a) return 0;
  if (h === a) return 1;
  return 2;
}

function generateAutopsy(match) {
  const actual = actualResult(match);
  if (actual === null) return null;

  const probs = match.probabilities || [];
  const labels = ["主胜", "平局", "客胜"];
  const actualLabel = labels[actual];
  const predictedIdx = probs.indexOf(Math.max(...probs));
  const predictedLabel = labels[predictedIdx];
  const correct = actual === predictedIdx;

  const cs = match.factorContributions || [];

  // Classify each factor
  const rightFactors = [];
  const wrongFactors = [];
  const neutralFactors = [];

  for (const c of cs) {
    if (c.weight === 0) { neutralFactors.push(c); continue; }
    const dir = c.contribution > 1 ? 0 : c.contribution < -1 ? 2 : 1;
    if (dir === actual) {
      rightFactors.push(c.name);
    } else if (dir !== 1 && actual !== 1) {
      // Factor was decisive wrong direction (not neutral)
      wrongFactors.push(c.name);
    } else {
      neutralFactors.push(c.name);
    }
  }

  // Market check
  const market = match.marketSignals || {};
  let marketNote = "";
  if (market.status === "connected" && market.impliedProbabilities) {
    const marketPred = market.impliedProbabilities.indexOf(Math.max(...market.impliedProbabilities));
    const marketCorrect = marketPred === actual;
    marketNote = marketCorrect
      ? `赔率市场正确预判了${labels[marketPred]}方向。`
      : `赔率市场倾向${labels[marketPred]}，实际结果为${actualLabel}，市场也判断错了。`;
  }

  // Shot data context
  const homeShots = match.home?.shotsPerGame ? `${match.home.name}场均射门${match.home.shotsPerGame}次` : "";
  const awayShots = match.away?.shotsPerGame ? `${match.away.name}场均射门${match.away.shotsPerGame}次` : "";

  // Motivation context
  const mot = match.motivation || {};
  const motNote = mot.note || "";

  // Build summary
  const verdict = correct
    ? `模型正确预测了${predictedLabel}方向（${predictedLabel}概率${probs[predictedIdx]}%），与实际结果一致。`
    : `模型预测倾向${predictedLabel}（概率${probs[predictedIdx]}%），但实际结果为${actualLabel}。模型对本场判断存在偏差。`;

  let factorAnalysis = "";
  if (rightFactors.length > 0) {
    factorAnalysis += `判断正确的因素：${rightFactors.join("、")}。`;
  }
  if (wrongFactors.length > 0) {
    factorAnalysis += `判断错误的因素：${wrongFactors.join("、")}。`;
  }

  const shotContext = [homeShots, awayShots].filter(Boolean).join("；");

  const text = `${verdict} ${factorAnalysis} ${marketNote} ${shotContext ? shotContext + "。" : ""} ${motNote}`;

  return {
    matchId: match.id,
    date: match.date,
    home: match.home?.name,
    away: match.away?.name,
    actualScore: match.actualScore,
    actualResult: actualLabel,
    predictedResult: predictedLabel,
    correct,
    rightFactors,
    wrongFactors,
    neutralFactors,
    marketCorrect: marketNote.includes("正确"),
    text,
  };
}

function main() {
  console.log("=== Loop Autopsy ===");
  const matches = loadMatches();
  const completed = matches.filter(m => m.status === "completed" && m.actualScore);
  console.log(`Completed: ${completed.length}`);

  const autopsies = [];
  for (const m of completed) {
    const a = generateAutopsy(m);
    if (a) {
      autopsies.push(a);
      console.log(`${a.home} ${a.actualScore} ${a.away} — ${a.correct ? "✓" : "✗"} ${a.text.slice(0, 80)}...`);
    }
  }

  console.log(`\nGenerated ${autopsies.length} autopsies`);
  return autopsies;
}

export { main as runAutopsy, generateAutopsy };
