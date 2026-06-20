// Loop 3: Data Integrity Guard
// Self-checks after each refresh: data completeness, frontend sync, deployment status

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");

function loadData() {
  try {
    const code = fs.readFileSync(dataPath, "utf8");
    const sandbox = { window: {} };
    const vm = require("node:vm");
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox, { filename: "data.js" });
    return { meta: sandbox.window.ANALYSIS_META || {}, matches: sandbox.window.MATCHES || [] };
  } catch (e) {
    return { error: `data.js parse failed: ${e.message}` };
  }
}

function checkVersionConsistency() {
  const htmlFiles = ["index.html", "detail.html", "methodology.html"].map(f => path.join(root, f));
  const versions = [];
  for (const f of htmlFiles) {
    if (!fs.existsSync(f)) { versions.push({ file: f, error: "missing" }); continue; }
    const content = fs.readFileSync(f, "utf8");
    const vMatch = content.match(/v=(\d+)/g);
    versions.push({ file: path.basename(f), versions: vMatch });
  }
  // Check all HTML files use the same version
  const allV = versions.map(v => (v.versions || []).join(",")).filter(Boolean);
  const unique = new Set(allV);
  return unique.size <= 1 ? "OK" : `MISMATCH: ${allV.join(" | ")}`;
}

async function checkDeployment() {
  try {
    const res = await fetch("https://russwest031-code.github.io/world-cup-analysis/data.js", {
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return `HTTP ${res.status}`;
    const text = await res.text();
    const hasMatches = text.includes("window.MATCHES");
    const hasMeta = text.includes("window.ANALYSIS_META");
    return hasMatches && hasMeta ? "OK" : "Incomplete data";
  } catch (e) {
    return `Deploy check failed: ${e.message}`;
  }
}

async function main() {
  console.log("=== Loop Guard ===");
  const results = [];

  // 1. Data validity
  const data = loadData();
  if (data.error) {
    results.push({ check: "data.js parse", status: "FAIL", detail: data.error });
  } else {
    const matchCount = data.matches.length;
    results.push({ check: "data.js parse", status: matchCount >= 104 ? "OK" : "WARN", detail: `${matchCount} matches` });

    const completed = data.matches.filter(m => m.status === "completed" && m.actualScore).length;
    results.push({ check: "completed matches", status: "OK", detail: `${completed} with scores` });

    // Check market signals
    const hasOdds = data.matches.filter(m => m.marketSignals?.status === "connected").length;
    results.push({ check: "odds connected", status: hasOdds > 0 ? "OK" : "WARN", detail: `${hasOdds} matches` });

    // Check shot data
    const hasShots = data.matches.filter(m => m.home?.shotsPerGame || m.away?.shotsPerGame).length;
    results.push({ check: "shot data", status: hasShots > 0 ? "OK" : "WARN", detail: `${hasShots} matches with shot stats` });

    // Check ESPN data
    const hasESPN = data.matches.filter(m => (m.home?.shotSource || "").startsWith("ESPN")).length;
    results.push({ check: "ESPN live stats", status: hasESPN > 0 ? "OK" : "WARN", detail: `${hasESPN} matches` });
  }

  // 2. Version consistency
  const versionCheck = checkVersionConsistency();
  results.push({ check: "HTML versions", status: versionCheck === "OK" ? "OK" : "FAIL", detail: versionCheck });

  // 3. Deployment check
  const deployCheck = await checkDeployment();
  results.push({ check: "GitHub Pages deploy", status: deployCheck === "OK" ? "OK" : "FAIL", detail: deployCheck });

  // Report
  console.log("");
  let allOk = true;
  for (const r of results) {
    const icon = r.status === "OK" ? "✓" : r.status === "WARN" ? "⚠" : "✗";
    console.log(`${icon} ${r.check}: ${r.detail}`);
    if (r.status === "FAIL") allOk = false;
  }
  console.log(`\n${allOk ? "All checks passed." : "SOME CHECKS FAILED — manual review needed."}`);

  return { allOk, results };
}

export { main as runGuard };
