(async function () {
  const seedMatches = window.MATCHES || [];
  let matches = seedMatches;
  let days = [];

  const fmt = value => Number(value).toFixed(2);
  const weekNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const marketNames = {
    had: "胜平负",
    hhad: "让球胜平负",
    crs: "比分",
    ttg: "总进球",
    hafu: "半全场"
  };
  const hafuNames = {
    hh: "胜胜", hd: "胜平", ha: "胜负",
    dh: "平胜", dd: "平平", da: "平负",
    ah: "负胜", ad: "负平", aa: "负负"
  };

  function flag(team) {
    return '<span class="flag" style="--flag:' + team.color + '">' + team.code + '</span>';
  }

  function scoreLabel(code) {
    if (code === "s1sh") return "胜其他";
    if (code === "s1sd") return "平其他";
    if (code === "s1sa") return "负其他";
    const match = /^s(\d{2})s(\d{2})$/.exec(code);
    if (!match) return code;
    return Number(match[1]) + ":" + Number(match[2]);
  }

  function getMarketOptions(match, market) {
    const source = (match.jc && match.jc[market]) || {};
    if (market === "ttg") {
      return Object.entries(source)
        .filter(function (kv) { return /^s[0-7]$/.test(kv[0]) && Number(kv[1]); })
        .map(function (kv) { return { key: kv[0], label: kv[0] === "s7" ? "7+球" : kv[0].slice(1) + "球", odd: Number(kv[1]) }; });
    }
    if (market === "hafu") {
      return Object.entries(source)
        .filter(function (kv) { return hafuNames[kv[0]] && Number(kv[1]); })
        .map(function (kv) { return { key: kv[0], label: hafuNames[kv[0]], odd: Number(kv[1]) }; });
    }
    if (market === "crs") {
      return Object.entries(source)
        .filter(function (kv) { return /^s\d{2}s\d{2}$/.test(kv[0]) || /^s1s[had]$/.test(kv[0]); })
        .filter(function (kv) { return Number(kv[1]); })
        .map(function (kv) { return { key: kv[0], label: scoreLabel(kv[0]), odd: Number(kv[1]) }; });
    }
    return [];
  }

  function deriveGoalTendency(match) {
    var picks = match.picks || [];
    for (var i = 0; i < picks.length; i++) {
      var v = picks[i].value || "";
      if (v.indexOf("大于") !== -1) return { label: "总进球倾向: 偏大", cls: "over" };
      if (v.indexOf("小于") !== -1) return { label: "总进球倾向: 偏小", cls: "under" };
    }
    var t = match.total;
    if (t && Number(t) < 2.5) return { label: "总进球倾向: 偏小", cls: "under" };
    if (t && Number(t) > 2.5) return { label: "总进球倾向: 偏大", cls: "over" };
    return null;
  }

  function confidenceLabel(c) {
    if (c >= 80) return { text: "高信心 " + c + "%", cls: "high" };
    if (c >= 65) return { text: "中信心 " + c + "%", cls: "medium" };
    return { text: "低信心 " + c + "%", cls: "low" };
  }

  // ─── ANALYSIS PAGE ───────────────────────────────────────────
  function renderAnalysis() {
    var list = document.getElementById("matchList");
    if (!list) return;

    var strip = document.getElementById("dateStrip");
    var input = document.getElementById("searchInput");
    var empty = document.getElementById("emptyState");
    var heading = document.getElementById("matchHeading");
    var selectedDate = days[0] ? days[0].date : "";

    strip.innerHTML = days.map(function (day, index) {
      var active = index === 0 ? "active" : "";
      return '<button class="date-chip ' + active + '" data-date="' + day.date + '"><small>' + day.week + '</small><strong>' + day.day + '</strong><small>6月</small></button>';
    }).join("");

    function renderAnalysisCard(match) {
      var probs = match.probabilities; // [home, draw, away]
      var primaryScore = (match.scoreOdds && match.scoreOdds[0]) ? match.scoreOdds[0] : null;
      var altScores = (match.scoreOdds || []).slice(1, 4);
      var conf = confidenceLabel(match.confidence);
      var tendency = deriveGoalTendency(match);
      var statusText = match.matchStatus === "Selling" ? "销售中" : "赛前";
      var sourceBadge = (match.jc && match.jc.had && match.jc.had.home)
        ? '<span class="single-badge">官方固定奖金</span>'
        : '<span>模拟盘口</span>';

      var scoreHTML = "";
      if (primaryScore) {
        scoreHTML = '<div class="score-headline">' +
          '<span class="predicted-score">' + primaryScore.score + '</span>' +
          '<div class="score-meta">' +
            '<small>泊松分布 · 最可能比分</small>' +
            '<span class="model-badge">概率 ' + primaryScore.chance + '%</span>' +
          '</div>' +
        '</div>';
      }

      var altsHTML = "";
      if (altScores.length) {
        altsHTML = '<div class="score-alts">' +
          altScores.map(function (s) {
            return '<span class="score-alt"><strong>' + s.score + '</strong><small>' + s.chance + '%</small></span>';
          }).join("") +
        '</div>';
      }

      var wdlHTML = '<div class="wdl-bars">' +
        ['胜', '平', '负'].map(function (label, i) {
          return '<div class="wdl-bar-item"><span>' + label + '</span><strong>' + probs[i] + '%</strong><div class="wdl-track"><i style="width:' + probs[i] + '%"></i></div></div>';
        }).join("") +
      '</div>';

      var metaHTML = '<div class="analysis-meta-row">' +
        '<span class="confidence-badge ' + conf.cls + '">' + conf.text + '</span>' +
        (tendency ? '<span class="total-tendency ' + tendency.cls + '">' + tendency.label + '</span>' : '') +
      '</div>';

      return '<article class="match-card analysis-card">' +
        '<div class="card-top">' +
          '<div class="card-top-left">' +
            '<span class="match-num">' + (match.matchNum || match.group) + '</span>' +
            '<span class="match-tag">' + match.tag + '</span>' +
            '<small>' + statusText + '</small>' +
          '</div>' +
          '<a class="detail-link" href="detail.html?id=' + match.id + '">比赛分析</a>' +
        '</div>' +
        '<div class="team-row">' +
          '<div class="team">' + flag(match.home) + '<div class="team-name"><strong>' + match.home.name + '</strong><small>世界第' + match.home.rank + '</small></div></div>' +
          '<div class="kickoff"><strong>' + match.time + '</strong><i></i><small>北京时间</small></div>' +
          '<div class="team away">' + flag(match.away) + '<div class="team-name"><strong>' + match.away.name + '</strong><small>世界第' + match.away.rank + '</small></div></div>' +
        '</div>' +
        scoreHTML +
        altsHTML +
        wdlHTML +
        metaHTML +
        '<p class="analysis-summary">' + (match.summary || "") + '</p>' +
        '<div class="card-foot">' +
          '<span>' + (match.venue || "") + '</span>' +
          sourceBadge +
        '</div>' +
      '</article>';
    }

    function draw() {
      var query = input.value.trim().toLowerCase();
      var filtered = matches.filter(function (match) {
        var dateOk = !selectedDate || match.date === selectedDate;
        var queryOk = !query || (match.home.name + match.away.name + match.home.code + match.away.code).toLowerCase().indexOf(query) !== -1;
        return dateOk && queryOk;
      });

      heading.textContent = selectedDate && days[0] && selectedDate === days[0].date
        ? "今日比赛"
        : (selectedDate ? selectedDate.slice(5).replace("-", "月") + "日比赛" : "全部比赛");

      list.innerHTML = filtered.map(renderAnalysisCard).join("");
      empty.hidden = filtered.length > 0;
    }

    strip.addEventListener("click", function (event) {
      var button = event.target.closest(".date-chip");
      if (!button) return;
      selectedDate = button.dataset.date;
      strip.querySelectorAll(".date-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip === button);
      });
      draw();
    });

    input.addEventListener("input", draw);
    document.getElementById("clearSearch").addEventListener("click", function () {
      input.value = "";
      input.focus();
      draw();
    });
    document.getElementById("searchToggle").addEventListener("click", function () {
      var panel = document.getElementById("searchPanel");
      panel.classList.toggle("open");
      if (panel.classList.contains("open")) input.focus();
    });

    draw();
  }

  // ─── BETTING PAGE ─────────────────────────────────────────────
  function renderBetting() {
    var list = document.getElementById("matchList");
    if (!list) return;

    var strip = document.getElementById("dateStrip");
    var input = document.getElementById("searchInput");
    var empty = document.getElementById("emptyState");
    var heading = document.getElementById("matchHeading");
    var viewPlan = document.getElementById("viewPlan");
    var clearBets = document.getElementById("clearBets");
    var multipleInput = document.getElementById("multipleInput");
    var minusMultiple = document.getElementById("minusMultiple");
    var plusMultiple = document.getElementById("plusMultiple");
    var planModal = document.getElementById("planModal");
    var moreModal = document.getElementById("moreModal");
    var marketTabs = document.getElementById("marketTabs");
    var marketPanels = document.getElementById("marketPanels");

    var selectedDate = days[0] ? days[0].date : "";
    var multiple = 1;
    var activeMoreMatch = null;
    var activeMoreTab = "crs";
    var selections = new Map();

    strip.innerHTML = days.map(function (day, index) {
      var active = index === 0 ? "active" : "";
      return '<button class="date-chip ' + active + '" data-date="' + day.date + '"><small>' + day.week + '</small><strong>' + day.day + '</strong><small>6月</small></button>';
    }).join("");

    function optionKey(matchId, market, outcome) {
      return matchId + ":" + market + ":" + outcome;
    }

    function getSelectedByMatch(matchId) {
      return Array.from(selections.values()).filter(function (item) { return item.matchId === matchId; });
    }

    function syncPrimarySelections() {
      list.querySelectorAll(".play-option").forEach(function (button) {
        button.classList.toggle("selected", selections.has(optionKey(button.dataset.match, button.dataset.market, button.dataset.outcome)));
      });
    }

    function groupedSelections() {
      var grouped = new Map();
      selections.forEach(function (value) {
        if (!grouped.has(value.matchId)) grouped.set(value.matchId, []);
        grouped.get(value.matchId).push(value);
      });
      return grouped;
    }

    function calculate() {
      var grouped = groupedSelections();
      var lineCount = grouped.size
        ? Array.from(grouped.values()).map(function (items) { return items.length; }).reduce(function (acc, count) { return acc * count; }, 1)
        : 0;
      var stake = lineCount * multiple * 2;
      var minPayout = 0;
      var maxPayout = 0;

      if (grouped.size) {
        minPayout =
          Array.from(grouped.values())
            .map(function (items) { return Math.min.apply(null, items.map(function (item) { return item.odd; })); })
            .reduce(function (acc, odd) { return acc * odd; }, 1) *
          multiple * 2;
        maxPayout =
          Array.from(grouped.values())
            .map(function (items) { return Math.max.apply(null, items.map(function (item) { return item.odd; })); })
            .reduce(function (acc, odd) { return acc * odd; }, 1) *
          multiple * 2;
      }

      document.getElementById("betCount").textContent = String(grouped.size);
      document.getElementById("betLabel").textContent = grouped.size ? "已选 " + grouped.size + " 场 · " + lineCount + " 注" : "请选择比赛";
      document.getElementById("betHint").textContent = grouped.size ? "支持同场多选与混合过关模拟" : "模拟投注，不产生真实交易";
      document.getElementById("stakeAmount").textContent = String(stake);
      document.getElementById("potentialPayout").textContent = grouped.size
        ? minPayout.toFixed(2) + (maxPayout > minPayout ? "~" + maxPayout.toFixed(2) : "")
        : "0.00";
      viewPlan.disabled = grouped.size === 0;

      return { grouped: grouped, lineCount: lineCount, stake: stake };
    }

    function renderExtraSummary(match) {
      var extra = getSelectedByMatch(match.id).filter(function (item) { return ["crs", "ttg", "hafu"].indexOf(item.market) !== -1; });
      if (!extra.length) return "比分 / 总进球 / 半全场";
      return extra.map(function (item) { return item.marketLabel + " " + item.outcome; }).join("、");
    }

    function renderBetCard(match) {
      var had = match.jc ? match.jc.had : match.odds;
      var hhad = match.jc ? match.jc.hhad : { line: match.handicap || "", home: null, draw: null, away: null };
      var extras = getSelectedByMatch(match.id).filter(function (item) { return ["crs", "ttg", "hafu"].indexOf(item.market) !== -1; });

      function renderOption(market, outcome, label, value) {
        return '<button class="play-option" data-match="' + match.id + '" data-market="' + market + '" data-outcome="' + outcome + '" data-label="' + label + '" data-odd="' + (value || "") + '" ' + (value ? "" : "disabled") + '>' +
          '<span>' + label + '</span><strong>' + (value ? fmt(value) : "--") + '</strong>' +
        '</button>';
      }

      return '<article class="match-card bet-card">' +
        '<div class="bet-card-head">' +
          '<div class="bet-card-head-left">' +
            '<span class="match-num">' + (match.matchNum || match.group) + '</span>' +
            '<span class="match-tag">' + match.tag + '</span>' +
            '<small>' + (match.matchStatus === "Selling" ? "销售中" : "赛前") + '</small>' +
          '</div>' +
          '<button class="analysis-entry" data-detail="' + match.id + '">比赛分析</button>' +
        '</div>' +
        '<div class="bet-matchup" data-detail="' + match.id + '">' +
          '<strong>' + match.home.name + '</strong>' +
          '<div class="bet-vs"><b>' + match.time + '</b>VS</div>' +
          '<strong class="away-name">' + match.away.name + '</strong>' +
        '</div>' +
        '<div class="play-row">' +
          '<div class="play-label"><span>胜平负</span><strong>[0]</strong></div>' +
          '<div class="play-options">' +
            renderOption("had", "home", "胜", had.home) +
            renderOption("had", "draw", "平", had.draw) +
            renderOption("had", "away", "负", had.away) +
          '</div>' +
        '</div>' +
        '<div class="play-row">' +
          '<div class="play-label"><span>让球</span><strong>[' + (hhad.line || "--") + ']</strong></div>' +
          '<div class="play-options">' +
            renderOption("hhad", "home", "胜", hhad.home) +
            renderOption("hhad", "draw", "平", hhad.draw) +
            renderOption("hhad", "away", "负", hhad.away) +
          '</div>' +
        '</div>' +
        '<div class="more-play-row">' +
          '<span>更多玩法</span>' +
          '<div class="more-summary ' + (extras.length ? "has-value" : "") + '">' + renderExtraSummary(match) + '</div>' +
          '<button class="more-play-btn" data-more="' + match.id + '">' + (extras.length ? "已选 " + extras.length + " 项" : "展开") + '</button>' +
        '</div>' +
        '<div class="bet-card-note">' +
          '<span>' + (match.venue || "") + '</span>' +
          (match.jc && match.jc.had && match.jc.had.home ? '<span class="single-badge">官方固定奖金</span>' : '<span>模拟盘口</span>') +
        '</div>' +
      '</article>';
    }

    function draw() {
      var query = input.value.trim().toLowerCase();
      var filtered = matches.filter(function (match) {
        var dateOk = !selectedDate || match.date === selectedDate;
        var queryOk = !query || (match.home.name + match.away.name + match.home.code + match.away.code).toLowerCase().indexOf(query) !== -1;
        return dateOk && queryOk;
      });

      heading.textContent = selectedDate && days[0] && selectedDate === days[0].date
        ? "今日比赛"
        : (selectedDate ? selectedDate.slice(5).replace("-", "月") + "日比赛" : "全部比赛");

      list.innerHTML = filtered.map(renderBetCard).join("");
      empty.hidden = filtered.length > 0;
      syncPrimarySelections();
    }

    function openMore(match) {
      if (!match) return;
      activeMoreMatch = match;
      activeMoreTab = "crs";
      document.getElementById("moreMatchNum").textContent = match.matchNum || match.group;
      document.getElementById("moreMatchName").textContent = match.home.name + " vs " + match.away.name;
      marketTabs.querySelectorAll("button").forEach(function (button) {
        button.classList.toggle("active", button.dataset.tab === activeMoreTab);
      });
      renderMorePanel();
      moreModal.hidden = false;
    }

    function renderMorePanel() {
      if (!activeMoreMatch) return;
      var options = getMarketOptions(activeMoreMatch, activeMoreTab);
      var groups = activeMoreTab === "crs"
        ? [
            ["主胜比分", options.filter(function (item) { return item.label === "胜其他" || (/^\d+:\d+$/.test(item.label) && Number(item.label.split(":")[0]) > Number(item.label.split(":")[1])); })],
            ["平局比分", options.filter(function (item) { return item.label === "平其他" || (/^\d+:\d+$/.test(item.label) && Number(item.label.split(":")[0]) === Number(item.label.split(":")[1])); })],
            ["客胜比分", options.filter(function (item) { return item.label === "负其他" || (/^\d+:\d+$/.test(item.label) && Number(item.label.split(":")[0]) < Number(item.label.split(":")[1])); })]
          ]
        : [[marketNames[activeMoreTab], options]];

      marketPanels.innerHTML = groups.map(function (grp) {
        var title = grp[0];
        var items = grp[1];
        var content = items.length
          ? items.map(function (item) {
              var key = optionKey(activeMoreMatch.id, activeMoreTab, item.key);
              var selected = selections.has(key) ? "selected" : "";
              return '<button class="market-option ' + selected + '" data-extra-key="' + item.key + '" data-extra-label="' + item.label + '" data-extra-odd="' + item.odd + '">' +
                '<span>' + item.label + '</span><strong>' + fmt(item.odd) + '</strong>' +
              '</button>';
            }).join("")
          : '<span class="more-summary">该玩法暂未开售</span>';
        var gridClass = activeMoreTab === "ttg" ? "market-option-grid goals" : "market-option-grid";
        return '<section class="market-group"><h4>' + title + '</h4><div class="' + gridClass + '">' + content + '</div></section>';
      }).join("");

      var count = getSelectedByMatch(activeMoreMatch.id).filter(function (item) { return ["crs", "ttg", "hafu"].indexOf(item.market) !== -1; }).length;
      document.getElementById("moreSelectedCount").textContent = "本场已选 " + count + " 项";
    }

    list.addEventListener("click", function (event) {
      var more = event.target.closest("[data-more]");
      if (more) {
        openMore(matches.find(function (m) { return m.id === more.dataset.more; }));
        return;
      }

      var detail = event.target.closest("[data-detail]");
      if (detail && !event.target.closest(".play-option")) {
        location.href = "detail.html?id=" + detail.dataset.detail;
        return;
      }

      var button = event.target.closest(".play-option");
      if (!button || button.disabled) return;

      var key = optionKey(button.dataset.match, button.dataset.market, button.dataset.outcome);
      if (selections.has(key)) {
        selections.delete(key);
      } else {
        var m = matches.find(function (item) { return item.id === button.dataset.match; });
        selections.set(key, {
          matchId: m.id,
          matchName: m.home.name + " vs " + m.away.name,
          matchNum: m.matchNum || m.group,
          market: button.dataset.market,
          marketLabel: button.dataset.market === "hhad"
            ? "让球[" + (m.jc ? m.jc.hhad.line : m.handicap) + "]"
            : marketNames[button.dataset.market],
          outcome: button.dataset.label,
          odd: Number(button.dataset.odd)
        });
      }

      button.classList.toggle("selected", selections.has(key));
      calculate();
      draw();
    });

    marketTabs.addEventListener("click", function (event) {
      var button = event.target.closest("[data-tab]");
      if (!button) return;
      activeMoreTab = button.dataset.tab;
      marketTabs.querySelectorAll("button").forEach(function (tab) {
        tab.classList.toggle("active", tab === button);
      });
      renderMorePanel();
    });

    marketPanels.addEventListener("click", function (event) {
      var button = event.target.closest("[data-extra-key]");
      if (!button || !activeMoreMatch) return;

      var key = optionKey(activeMoreMatch.id, activeMoreTab, button.dataset.extraKey);
      if (selections.has(key)) {
        selections.delete(key);
      } else {
        selections.set(key, {
          matchId: activeMoreMatch.id,
          matchName: activeMoreMatch.home.name + " vs " + activeMoreMatch.away.name,
          matchNum: activeMoreMatch.matchNum || activeMoreMatch.group,
          market: activeMoreTab,
          marketLabel: marketNames[activeMoreTab],
          outcome: button.dataset.extraLabel,
          odd: Number(button.dataset.extraOdd)
        });
      }

      renderMorePanel();
      calculate();
    });

    moreModal.addEventListener("click", function (event) {
      if (event.target.closest("[data-close-more]")) {
        moreModal.hidden = true;
        draw();
      }
    });

    document.getElementById("confirmMore").addEventListener("click", function () {
      moreModal.hidden = true;
      draw();
      calculate();
    });

    strip.addEventListener("click", function (event) {
      var button = event.target.closest(".date-chip");
      if (!button) return;
      selectedDate = button.dataset.date;
      strip.querySelectorAll(".date-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip === button);
      });
      draw();
    });

    input.addEventListener("input", draw);
    document.getElementById("clearSearch").addEventListener("click", function () {
      input.value = "";
      input.focus();
      draw();
    });
    document.getElementById("searchToggle").addEventListener("click", function () {
      var panel = document.getElementById("searchPanel");
      panel.classList.toggle("open");
      if (panel.classList.contains("open")) input.focus();
    });

    function setMultiple(value) {
      multiple = Math.max(1, Math.min(999, Number(value) || 1));
      multipleInput.value = multiple;
      calculate();
    }

    multipleInput.addEventListener("change", function () { setMultiple(multipleInput.value); });
    minusMultiple.addEventListener("click", function () { setMultiple(multiple - 1); });
    plusMultiple.addEventListener("click", function () { setMultiple(multiple + 1); });
    clearBets.addEventListener("click", function () {
      selections.clear();
      draw();
      calculate();
    });

    viewPlan.addEventListener("click", function () {
      var plan = calculate();
      document.getElementById("planSelections").innerHTML = Array.from(plan.grouped.values()).map(function (items) {
        return '<article class="plan-selection">' +
          '<div><strong>' + items[0].matchNum + " " + items[0].matchName + '</strong><small>' + items.length + ' 项</small></div>' +
          '<div class="selection-tags">' + items.map(function (item) { return '<span>' + item.marketLabel + " " + item.outcome + " " + fmt(item.odd) + '</span>'; }).join("") + '</div>' +
        '</article>';
      }).join("");
      document.getElementById("planLines").textContent = String(plan.lineCount);
      document.getElementById("planMultiple").textContent = String(multiple);
      document.getElementById("planStake").textContent = plan.stake + " 元";
      planModal.hidden = false;
    });

    planModal.addEventListener("click", function (event) {
      if (event.target.closest("[data-close-modal]")) planModal.hidden = true;
    });

    draw();
    calculate();
  }

  // ─── DETAIL PAGE ──────────────────────────────────────────────
  function renderJcOdds(match) {
    function row(label, line, odds) {
      return '<div class="jc-row">' +
        '<div class="jc-label"><span>' + label + '</span><strong>' + (line || "[0]") + '</strong></div>' +
        '<div class="jc-odds">' +
          '<div class="jc-odd"><span>胜</span><strong>' + (odds.home ? fmt(odds.home) : "--") + '</strong></div>' +
          '<div class="jc-odd"><span>平</span><strong>' + (odds.draw ? fmt(odds.draw) : "--") + '</strong></div>' +
          '<div class="jc-odd"><span>负</span><strong>' + (odds.away ? fmt(odds.away) : "--") + '</strong></div>' +
        '</div>' +
      '</div>';
    }

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>中国竞彩</h3><small>' + (match.matchStatus === "Selling" ? "销售中" : match.matchStatus) + '</small></div>' +
      '<div class="jc-block">' +
        row("胜平负", "[0]", match.jc.had) +
        row("让球", "[" + (match.jc.hhad.line || "--") + "]", match.jc.hhad) +
      '</div>' +
      '<div class="source-note"><span>官方固定奖金</span><span>' + (match.officialUpdate || "更新时间未知") + '</span></div>' +
    '</section>';
  }

  // ─── NEW DETAIL MODULE 1: 模型驱动因子加权概率推演框架 ───
  function renderFactorModel(match) {
    var weights = { market: 35, strength: 25, form: 20, tactical: 20 };

    // --- Market factor (35%) ---
    var marketProbs;
    var marketEvidence = "";
    if (match.jc && match.jc.had && match.jc.had.home) {
      var raw = [1 / match.jc.had.home, 1 / match.jc.had.draw, 1 / match.jc.had.away];
      var total = raw[0] + raw[1] + raw[2];
      marketProbs = raw.map(function (v) { return Math.round(v / total * 100); });
      marketProbs[0] += 100 - marketProbs.reduce(function (s, v) { return s + v; }, 0);
      marketEvidence = '官方固定奖金 ' + fmt(match.jc.had.home) + '/' + fmt(match.jc.had.draw) + '/' + fmt(match.jc.had.away);
    } else if (match.odds && match.odds.home) {
      var raw2 = [1 / match.odds.home, 1 / match.odds.draw, 1 / match.odds.away];
      var total2 = raw2[0] + raw2[1] + raw2[2];
      marketProbs = raw2.map(function (v) { return Math.round(v / total2 * 100); });
      marketProbs[0] += 100 - marketProbs.reduce(function (s, v) { return s + v; }, 0);
      marketEvidence = '模拟赔率 ' + fmt(match.odds.home) + '/' + fmt(match.odds.draw) + '/' + fmt(match.odds.away);
    } else {
      marketProbs = [34, 33, 33];
      marketEvidence = '无可用赔率数据';
    }

    // --- Strength factor (25%) ---
    var homeRank = Number(match.home.rank) || 50;
    var awayRank = Number(match.away.rank) || 50;
    var rankDiff = awayRank - homeRank;
    var strengthEdge = Math.max(-25, Math.min(25, rankDiff * 0.35));
    var strengthProbs = [
      Math.max(8, 33 + Math.round(strengthEdge)),
      34 - Math.round(Math.abs(strengthEdge) * 0.25),
      Math.max(8, 33 - Math.round(strengthEdge))
    ];
    var strSum = strengthProbs[0] + strengthProbs[1] + strengthProbs[2];
    strengthProbs = strengthProbs.map(function (v) { return Math.round(v / strSum * 100); });
    strengthProbs[0] += 100 - strengthProbs.reduce(function (s, v) { return s + v; }, 0);
    var strengthEvidence = '世界排名 ' + match.home.code + '#' + homeRank + ' vs ' + match.away.code + '#' + awayRank;

    // --- Form factor (20%) ---
    function formPoints(formArr) {
      if (!formArr || !formArr.length) return 6;
      return formArr.slice(0, 5).reduce(function (s, r) {
        if (r === 'W') return s + 3;
        if (r === 'D') return s + 1;
        return s;
      }, 0);
    }
    var homeFP = formPoints(match.home.form);
    var awayFP = formPoints(match.away.form);
    var formDiff = homeFP - awayFP;
    var formEdge = Math.max(-22, Math.min(22, formDiff * 1.5));
    var formProbs = [
      Math.max(10, 33 + Math.round(formEdge)),
      34 - Math.round(Math.abs(formEdge) * 0.25),
      Math.max(10, 33 - Math.round(formEdge))
    ];
    var fSum = formProbs[0] + formProbs[1] + formProbs[2];
    formProbs = formProbs.map(function (v) { return Math.round(v / fSum * 100); });
    formProbs[0] += 100 - formProbs.reduce(function (s, v) { return s + v; }, 0);
    var homeFormStr = (match.home.form || []).slice(0, 5).join('');
    var awayFormStr = (match.away.form || []).slice(0, 5).join('');
    var formEvidence = match.home.code + ' ' + (homeFormStr || '无数据') + ' (' + homeFP + '分) vs ' + match.away.code + ' ' + (awayFormStr || '无数据') + ' (' + awayFP + '分)';

    // --- Tactical matchup factor (20%) ---
    var metricHomeSum = 0, metricAwaySum = 0, metricN = 0;
    if (match.metrics && match.metrics.length) {
      match.metrics.forEach(function (m) {
        metricHomeSum += m.home;
        metricAwaySum += m.away;
        metricN++;
      });
    }
    var homeMetricAvg = metricN ? Math.round(metricHomeSum / metricN) : 50;
    var awayMetricAvg = metricN ? Math.round(metricAwaySum / metricN) : 50;
    var metricDiff = homeMetricAvg - awayMetricAvg;
    var tacEdge = Math.max(-22, Math.min(22, metricDiff * 0.35));
    var tacProbs = [
      Math.max(10, 33 + Math.round(tacEdge)),
      34 - Math.round(Math.abs(tacEdge) * 0.25),
      Math.max(10, 33 - Math.round(tacEdge))
    ];
    var tSum = tacProbs[0] + tacProbs[1] + tacProbs[2];
    tacProbs = tacProbs.map(function (v) { return Math.round(v / tSum * 100); });
    tacProbs[0] += 100 - tacProbs.reduce(function (s, v) { return s + v; }, 0);
    var tacEvidence = '综合指标 ' + homeMetricAvg + ' vs ' + awayMetricAvg + (metricN ? ' (' + metricN + '维)' : '');

    function factorRow(name, weight, evidence) {
      return '<div class="factor-row">' +
        '<div class="factor-head"><strong>' + name + '</strong><span class="factor-weight">权重 ' + weight + '%</span></div>' +
        '<div class="factor-weight-track"><i style="width:' + weight + '%"></i></div>' +
        '<small class="factor-evidence">' + evidence + '</small>' +
      '</div>';
    }

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>预测依据及各因素权重</h3><small>模型方法论 · 非官方数据</small></div>' +
      '<div class="factor-model">' +
        factorRow('市场赔率', weights.market, marketEvidence + '；去水后胜平负 ' + marketProbs.join('% / ') + '%') +
        factorRow('实力排名', weights.strength, strengthEvidence) +
        factorRow('近期状态', weights.form, formEvidence) +
        factorRow('战术匹配', weights.tactical, tacEvidence) +
      '</div>' +
      '<div class="factor-result">' +
        '<p class="factor-note">四项权重合计 100%。本区解释页面顶部模型概率的形成依据，不另行生成第二套预测结果。</p>' +
      '</div>' +
    '</section>';
  }

  // ─── NEW DETAIL MODULE 2: 赔率市场定价偏差检测与反向价值识别? ───
  function renderOddsBias(match) {
    if (!match.jc || !match.jc.had || !match.jc.had.home) {
      return '<section class="detail-section">' +
        '<div class="section-title"><h3>官方赔率与模型概率对照</h3><small>官方赔率缺失</small></div>' +
        '<div class="empty-note">' +
          '<p>官方固定奖金数据暂不可用，无法计算赔率市场隐含概率与模型自有概率的偏差。请等待竞彩数据接入后刷新页面查看。</p>' +
        '</div>' +
      '</section>';
    }

    var had = match.jc.had;
    var raw = [1 / had.home, 1 / had.draw, 1 / had.away];
    var rawTotal = raw[0] + raw[1] + raw[2];
    var marketProbs = raw.map(function (v) { return Math.round(v / rawTotal * 100); });
    marketProbs[0] += 100 - marketProbs.reduce(function (s, v) { return s + v; }, 0);

    var modelProbs = match.probabilities;
    var diffs = [modelProbs[0] - marketProbs[0], modelProbs[1] - marketProbs[1], modelProbs[2] - marketProbs[2]];

    function diffStr(d) { return d > 0 ? '+' + d : String(d); }
    function diffCls(d) { return d > 0 ? 'diff-pos' : (d < 0 ? 'diff-neg' : 'diff-zero'); }

    var labels = ['主胜', '平局', '客胜'];
    var rows = labels.map(function (label, i) {
      return '<div class="bias-row">' +
        '<span class="bias-label">' + label + '</span>' +
        '<span class="bias-market">' + marketProbs[i] + '%</span>' +
        '<span class="bias-arrow">→</span>' +
        '<span class="bias-model">' + modelProbs[i] + '%</span>' +
        '<span class="bias-diff ' + diffCls(diffs[i]) + '">' + diffStr(diffs[i]) + 'pp</span>' +
      '</div>';
    }).join('');

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>官方赔率与模型概率对照</h3><small>去除返还率影响后对比</small></div>' +
      '<div class="bias-table">' +
        '<div class="bias-header">' +
          '<span></span><span>官方固定奖金隐含概率</span><span></span><span>模型概率</span><span>差值</span>' +
        '</div>' +
        rows +
      '</div>' +
      '<p class="bias-note">偏差 = 模型概率 − 市场隐含概率（已去庄家边际）。正值表示模型比市场更看好该结果，负值表示模型更保守。本比较仅供赛事研究参考。</p>' +
    '</section>';
  }

  // ─── NEW DETAIL MODULE 3: 市场赔率漂移监控与信号解读? ───
  function renderOddsDrift(match) {
    var hasOfficial = match.jc && match.jc.had && match.jc.had.home;
    var oddsDisplay = '';
    var updateTime = '';

    if (hasOfficial) {
      oddsDisplay = '<div class="drift-current">' +
        '<div class="drift-odds-row">' +
          '<span>主胜 <strong>' + fmt(match.jc.had.home) + '</strong></span>' +
          '<span>平 <strong>' + fmt(match.jc.had.draw) + '</strong></span>' +
          '<span>客胜 <strong>' + fmt(match.jc.had.away) + '</strong></span>' +
        '</div>' +
      '</div>';
      updateTime = match.officialUpdate || match.jc.had.update || '时间未知';
    } else if (match.odds && match.odds.home) {
      oddsDisplay = '<div class="drift-current">' +
        '<div class="drift-odds-row">' +
          '<span>主胜 <strong>' + fmt(match.odds.home) + '</strong></span>' +
          '<span>平 <strong>' + fmt(match.odds.draw) + '</strong></span>' +
          '<span>客胜 <strong>' + fmt(match.odds.away) + '</strong></span>' +
        '</div>' +
      '</div>';
      updateTime = match.odds.updated || '时间未知';
    } else {
      oddsDisplay = '<div class="empty-note"><p>当前无可用赔率数据。</p></div>';
      updateTime = '时间未知';
    }

    var modelUpdate = match.matchStatus === 'Selling' ? '销售中' : (match.matchStatus || '赛前');

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>赔率变化和预测更新时间</h3><small>当前固定奖金</small></div>' +
      oddsDisplay +
      '<div class="drift-meta">' +
        '<span>官方数据更新：' + updateTime + '</span>' +
        '<span>预测更新：随本次官方数据加载同步</span>' +
      '</div>' +
      '<div class="drift-note">' +
        '<p>暂无历史赔率快照，暂不能判断升降变化。当前仅展示最新固定奖金和真实更新时间，不绘制模拟走势。</p>' +
      '</div>' +
    '</section>';
  }

  // ─── NEW DETAIL MODULE 4: 博弈风险评估 ───
  function renderRiskAssessment(match) {
    var risks = [];

    // Risk 1: Uncertainty risk from confidence
    var conf = match.confidence || 50;
    if (conf >= 80) {
      risks.push({
        type: '不确定性风险',
        text: '模型信心指数 ' + conf + '%，处于高信心区间。模型判断相对稳定，但仍需注意足球比赛固有的随机性与不可预知因素，不可将模型输出等同于确定性结论。',
        cls: 'risk-low'
      });
    } else if (conf >= 65) {
      risks.push({
        type: '不确定性风险',
        text: '模型信心指数 ' + conf + '%，处于中等信心区间。比赛存在较多不可量化变量，建议结合实时信息综合判断，不要过度依赖单一模型输出。',
        cls: 'risk-medium'
      });
    } else {
      risks.push({
        type: '不确定性风险',
        text: '模型信心指数 ' + conf + '%，处于低信心区间。该类比赛模型判断的稳定性有限，需警惕模型在复杂或信息不足场景下的局限性。',
        cls: 'risk-high'
      });
    }

    // Risk 2: Game-state risk from handicap + total + insight profile
    var handicap = match.handicap || '';
    var totalStr = match.total || '';
    var total = parseFloat(totalStr);
    var hasTotal = Number.isFinite(total);
    var handicapNum = 0;
    var hMatch = handicap.match(/(-?\d+\.?\d*)/);
    if (hMatch) handicapNum = Math.abs(parseFloat(hMatch[1]));

    if (handicapNum >= 2) {
      risks.push({
        type: '比赛状态风险',
        text: '深盘比赛（' + handicap + '），实际比赛进程可能与盘口预设存在结构性偏差。深盘场景下领先方可能轮换或降速，垃圾时间因素会显著影响最终分差与进球数。',
        cls: 'risk-medium'
      });
    } else if (hasTotal && total >= 3) {
      risks.push({
        type: '比赛状态风险',
        text: '高进球预期（总进球线 ' + totalStr + '），开放节奏下比分波动性较大。单次攻防转换或定位球得分可能改变整个比赛走向与盘口结果。',
        cls: 'risk-medium'
      });
    } else if (hasTotal && total <= 2.25) {
      risks.push({
        type: '比赛状态风险',
        text: '低进球预期（总进球线 ' + totalStr + '），比赛可能陷入防守拉锯。单一进球或争议判罚对赛果的影响权重显著升高，胶着局面下平局概率不宜低估。',
        cls: 'risk-medium'
      });
    } else if (hasTotal) {
      risks.push({
        type: '比赛状态风险',
        text: '盘口均衡（' + (handicap || '平手') + '，总进球线 ' + totalStr + '），双方实力接近。此类比赛走势易受临场战术调整、替补出场和偶然事件左右，单一维度分析覆盖不足。',
        cls: 'risk-low'
      });
    } else {
      risks.push({
        type: '比赛状态风险',
        text: '当前没有可验证的总进球历史盘口，比赛状态风险主要参考让球信息与赛前观察。若临场节奏或领先方策略变化，比分分布可能明显偏离模型。',
        cls: 'risk-medium'
      });
    }

    // Risk 3: Data risk from source and model-vs-market divergence
    var hasLiveData = match.jc && match.jc.had && match.jc.had.home;
    var divergenceNote = '';
    var dataCls = 'risk-low';
    if (hasLiveData) {
      var raw = [1 / match.jc.had.home, 1 / match.jc.had.draw, 1 / match.jc.had.away];
      var rawTotal = raw[0] + raw[1] + raw[2];
      var mp = raw.map(function (v) { return Math.round(v / rawTotal * 100); });
      mp[0] += 100 - mp.reduce(function (s, v) { return s + v; }, 0);
      var maxDiff = Math.max(
        Math.abs(match.probabilities[0] - mp[0]),
        Math.abs(match.probabilities[1] - mp[1]),
        Math.abs(match.probabilities[2] - mp[2])
      );
      if (maxDiff >= 10) {
        divergenceNote = '模型与赔率市场隐含概率存在明显偏离（最大偏差 ' + maxDiff + 'pp），可能意味着模型捕捉到了市场未充分定价的信息，也可能说明模型在该场比赛上校准不足。';
        dataCls = 'risk-medium';
      } else {
        divergenceNote = '模型与赔率市场隐含概率基本吻合（最大偏差 ' + maxDiff + 'pp），数据层面无明显矛盾。';
      }
      divergenceNote += ' 当前数据来源：中国竞彩官方固定奖金。';
    } else {
      divergenceNote = '当前使用本地缓存数据，赔率时效性有限。缺少实时官方赔率时，模型与市场的偏差分析参考价值降低，建议以官方发布数据为准。';
      dataCls = 'risk-medium';
    }

    risks.push({ type: '数据风险', text: divergenceNote, cls: dataCls });

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>风险因素</h3><small>仅基于现有数据</small></div>' +
      '<div class="risk-list">' +
        risks.map(function (r, i) {
          return '<div class="risk-item ' + r.cls + '">' +
            '<div class="risk-head">' +
              '<span class="risk-num">0' + (i + 1) + '</span>' +
              '<strong>' + r.type + '</strong>' +
            '</div>' +
            '<p>' + r.text + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="risk-disclaimer">以上风险评估仅基于现有比赛数据（模型、赔率、指标）推导，不包含伤病、首发阵容、天气等未获取信息。实际投注决策请综合多方信息源。</p>' +
    '</section>';
  }

  function renderDetail() {
    var root = document.getElementById("detailRoot");
    if (!root) return;

    var id = new URLSearchParams(location.search).get("id");
    var match = matches.find(function (item) { return item.id === id; }) || matches[0];
    if (!match) return;

    document.title = match.home.name + " vs " + match.away.name + " - 赛研";
    var labels = ["主胜", "平局", "客胜"];

    root.innerHTML =
      '<section class="detail-hero">' +
        '<div class="detail-meta">' + (match.matchNum ? match.matchNum + " · " : "") + match.date + " · " + match.group + " · " + match.venue + '</div>' +
        '<div class="detail-matchup">' +
          '<div class="detail-team">' + flag(match.home) + '<h2>' + match.home.name + '</h2><p>世界排名 ' + match.home.rank + '</p></div>' +
          '<div class="detail-time"><strong>' + match.time + '</strong><i></i><span>北京时间</span></div>' +
          '<div class="detail-team">' + flag(match.away) + '<h2>' + match.away.name + '</h2><p>世界排名 ' + match.away.rank + '</p></div>' +
        '</div>' +
      '</section>' +
      '<section class="model-card">' +
        '<div class="model-head"><span>AI 比赛模型</span><strong>信心指数 ' + match.confidence + '%</strong></div>' +
        '<div class="prob-row">' + match.probabilities.map(function (value, index) { return '<div class="prob"><strong>' + value + '%</strong><span>' + labels[index] + '</span><div class="prob-bar"><i style="width:' + value + '%"></i></div></div>'; }).join("") + '</div>' +
      '</section>' +
      '<div class="detail-content">' +
        '<div class="betting-cta"><a href="betting.html?id=' + match.id + '">前往投注 ' + match.home.name + ' vs ' + match.away.name + ' →</a></div>' +
        '<section class="detail-section"><div class="section-title"><h3>比赛判断</h3><small>模型 + 市场综合</small></div><p class="analysis-copy">' + match.summary + '</p></section>' +
        '<section class="detail-section"><div class="section-title"><h3>参考方向</h3><small>按风险排序</small></div><div class="pick-list">' + match.picks.map(function (pick, index) { return '<div class="pick-item"><div class="pick-label"><span class="pick-icon">0' + (index + 1) + '</span><div><small>' + pick.label + '</small><strong>' + pick.value + '</strong></div></div><span>' + pick.note + '</span></div>'; }).join("") + '</div></section>' +
        (match.jc ? renderJcOdds(match) : "") +
        '<section class="detail-section"><div class="section-title"><h3>实力对比</h3><small>' + match.home.code + " / " + match.away.code + '</small></div><div class="metrics">' + match.metrics.map(function (metric) { return '<div class="metric-row"><strong>' + metric.home + '</strong><div class="metric-track home"><i style="width:' + metric.home + '%"></i></div><span>' + metric.label + '</span><div class="metric-track away"><i style="width:' + metric.away + '%"></i></div><strong>' + metric.away + '</strong></div>'; }).join("") + '</div></section>' +
        '<section class="detail-section"><div class="section-title"><h3>比分分布</h3><small>模型概率</small></div><div class="score-grid">' + match.scoreOdds.map(function (item) { return '<div class="score-card"><strong>' + item.score + '</strong><span>' + item.chance + '%</span></div>'; }).join("") + '</div></section>' +
        '<section class="detail-section"><div class="section-title"><h3>关键观察</h3><small>赛前要点</small></div><ol class="insight-list">' + match.insights.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ol></section>' +
        renderFactorModel(match) +
        renderOddsBias(match) +
        renderOddsDrift(match) +
        renderRiskAssessment(match) +
        '<p class="disclaimer">数据与模型结论仅供赛事研究和娱乐参考，不构成任何收益承诺。赔率会随市场变化，请以实时数据为准。</p>' +
      '</div>';
  }

  // ─── SHARED DATA LOADING ──────────────────────────────────────
  var feed = window.loadSportteryMatches
    ? await window.loadSportteryMatches(seedMatches)
    : { matches: seedMatches, dates: Array.from(new Set(seedMatches.map(function (item) { return item.date; }))), live: false, updated: "本地数据" };

  matches = feed.matches;
  days = feed.dates.map(function (date) {
    var parsed = new Date(date + "T12:00:00");
    return { date: date, week: weekNames[parsed.getDay()], day: date.slice(8, 10) };
  });

  var status = document.getElementById("dataStatus");
  var count = document.getElementById("matchCount");
  var update = document.getElementById("lastUpdate");
  if (status) status.innerHTML = '<i class="live-dot"></i> ' + (feed.live ? "中国竞彩实时" : "本地缓存");
  if (count) count.textContent = "共 " + matches.length + " 场";
  if (update) update.innerHTML = feed.live ? '更新 <strong>' + String(feed.updated).slice(11, 16) + '</strong>' : "接口暂不可用";

  // ─── PAGE DISPATCH ────────────────────────────────────────────
  if (document.getElementById("detailRoot")) {
    renderDetail();
  } else if (document.getElementById("betSlip")) {
    renderBetting();
  } else {
    renderAnalysis();
  }
})();
