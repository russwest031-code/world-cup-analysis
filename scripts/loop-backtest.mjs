// Loop 1: Auto-backtest + weight optimization
// Runs after each daily prediction refresh
// Compares predictions vs actual results, auto-adjusts factor weights

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");

// Desired weight range per factor
const WEIGHT_LIMITS = {
  "世界排名": { min: 15, max: 40 },
  "联合会强度": { min: 1, max: 8 },
  "攻防综合": { min: 15, max: 35 },
  "近期状态": { min: 10, max: 30 },
  "交锋历史": { min: 2, max: 10 },
  "出线动机": { min: 4, max: 16 },
  "风格碰撞": { min: 1, max: 6 },
  "休息天数": { min: 1, max: 5 },
  "场地因素": { min: 1, max: 5 },
  "赔率市场": { min: 0, max: 0 },
};

const MIN_SAMPLES = 5;
const ADJUST_THRESHOLD = 45; // Trigger weight adjustment if accuracy < 45%
const ADJUST_AMOUNT = 1; // +/- 1% per factor per cycle

function loadMatches() {
  const code = fs.readFileSync(dataPath, "utf8");
  const sandbox = { window: {} };
  const vm = require("node:vm");
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: "data.js" });
  return {
    matches: sandbox.window.MATCHES || [],
    meta: sandbox.window.ANALYSIS_META || {},
    backtest: sandbox.window.ANALYSIS_BACKTEST || null,
  };
}

function actualResult(match) {
  if (!match.actualScore) return null;
  const [h, a] = match.actualScore.split("-").map(Number);
  if (isNaN(h) || isNaN(a)) return null;
  if (h > a) return 0; // home
  if (h === a) return 1; // draw
  return 2; // away
}

function analyzeCompleted(matches, oldBacktest) {
  const completed = matches.filter(m => m.status === "completed" && m.actualScore);
  const previousIds = new Set((oldBacktest?.results || []).map(r => r.matchId));

  // Only analyze newly completed or all (for recalibration)
  const toAnalyze = completed; // Re-analyze all for cumulative stats

  const results = [];
  const factorCorrect = {};
  const factorTotal = {};

  for (const m of toAnalyze) {
    const actual = actualResult(m);
    if (actual === null) continue;

    const probs = m.probabilities || [];
    const predicted = probs.indexOf(Math.max(...probs));
    const correct = predicted === actual;
    const cs = m.factorContributions || [];

    // Per-factor direction check
    const factorVotes = [];
    let netContrib = 0;
    for (const c of cs) {
      const dir = c.contribution > 1 ? 0 : c.contribution < -1 ? 2 : 1;
      const right = dir === actual;
      factorVotes.push({ name: c.name, contribution: c.contribution, direction: dir, correct: right });
      netContrib += c.contribution;

      if (!factorCorrect[c.name]) { factorCorrect[c.name] = 0; factorTotal[c.name] = 0; }
      factorTotal[c.name] += 1;
      if (right) factorCorrect[c.name] += 1;
    }

    results.push({
      matchId: m.id,
      date: m.date,
      home: m.home.name,
      away: m.away.name,
      actualScore: m.actualScore,
      actualResult: actual,
      predictedResult: predicted,
      correct,
      probabilities: probs,
      factorVotes,
    });
  }

  // Calculate cumulative accuracy
  const totalCorrect = results.filter(r => r.correct).length;
  const accuracy = results.length > 0 ? +(totalCorrect / results.length * 100).toFixed(1) : 0;

  // Per-factor accuracy
  const factorAccuracy = {};
  for (const name of Object.keys(factorTotal)) {
    factorAccuracy[name] = +((factorCorrect[name] || 0) / factorTotal[name] * 100).toFixed(0);
  }

  // Determine if weights need adjustment
  const needsAdjust = results.length >= MIN_SAMPLES && accuracy < ADJUST_THRESHOLD;

  // Compute suggested weight adjustments
  const adjustments = {};
  if (needsAdjust) {
    // Reward accurate factors, penalize inaccurate ones
    const avgAcc = Object.values(factorAccuracy).reduce((a, b) => a + b, 0) / Object.values(factorAccuracy).length;
    for (const [name, acc] of Object.entries(factorAccuracy)) {
      if (name === "赔率市场") continue; // Fixed at 0
      const delta = (acc - avgAcc) / 100 * ADJUST_AMOUNT * 2;
      adjustments[name] = +delta.toFixed(1);
    }
  }

  return {
    updatedAt: new Date().toISOString(),
    totalMatches: results.length,
    correct: totalCorrect,
    accuracy,
    needsAdjust,
    factorAccuracy,
    adjustments: needsAdjust ? adjustments : {},
    results,
  };
}

function main() {
  console.log("=== Loop Backtest ===");
  const { matches, backtest } = loadMatches();
  const completed = matches.filter(m => m.status === "completed" && m.actualScore);
  console.log(`Completed matches: ${completed.length}`);

  if (completed.length < MIN_SAMPLES) {
    console.log(`Need ${MIN_SAMPLES}+ completed (have ${completed.length}), skipping.`);
    return null;
  }

  const result = analyzeCompleted(matches, backtest);
  console.log(`Accuracy: ${result.accuracy}% (${result.correct}/${result.totalMatches})`);
  console.log(`Needs adjustment: ${result.needsAdjust}`);

  if (result.needsAdjust) {
    console.log("Suggested weight changes:");
    for (const [name, delta] of Object.entries(result.adjustments)) {
      console.log(`  ${name}: ${delta > 0 ? '+' : ''}${delta}%`);
    }
  }

  // Per-factor accuracy
  console.log("\nPer-factor accuracy:");
  for (const [name, acc] of Object.entries(result.factorAccuracy)) {
    console.log(`  ${name}: ${acc}%`);
  }

  return result;
}

export { main as runBacktest };
