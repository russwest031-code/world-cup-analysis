window.ANALYSIS_META = {
  "updatedAt": "2026-06-19T10:41:09.834Z",
  "runDate": "2026-06-19",
  "source": "openfootball-worldcup-json",
  "externalFetchedAt": "2026-06-19T10:41:09.834Z",
  "externalMatchCount": 104,
  "model": "rank-form-metrics-poisson-v1",
  "refreshCadence": "daily",
  "refreshTimeLocal": "15:00",
  "refreshTimeZone": "Asia/Shanghai"
};

window.MATCHES = [
  {
    "id": "mex-rsa-1",
    "date": "2026-06-12",
    "time": "03:00",
    "group": "A组",
    "round": "Matchday 1",
    "venue": "Mexico City",
    "status": "completed",
    "actualScore": "2-0",
    "externalSourceId": "2026-06-11-Mexico-South Africa",
    "home": {
      "name": "墨西哥",
      "code": "MEX",
      "color": "#006847",
      "rank": 18,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "南非",
      "code": "RSA",
      "color": "#007a4d",
      "rank": 90,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 66
      },
      {
        "label": "防守",
        "home": 75,
        "away": 67
      },
      {
        "label": "中场",
        "home": 76,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 68
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-11",
      "rawTime": "13:00 UTC-6"
    },
    "probabilities": [
      66,
      23,
      11
    ],
    "confidence": 85,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 18
      },
      {
        "score": "2-0",
        "chance": 16
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "墨西哥 进攻指数 76，南非 防守指数 67，这是判断主队进球上限的关键。",
      "南非 进攻指数 66，墨西哥 防守指数 75，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.69,
      "away": 0.53
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "kor-cze-2",
    "date": "2026-06-12",
    "time": "10:00",
    "group": "A组",
    "round": "Matchday 1",
    "venue": "Guadalajara (Zapopan)",
    "status": "completed",
    "actualScore": "2-1",
    "externalSourceId": "2026-06-11-South Korea-Czech Republic",
    "home": {
      "name": "韩国",
      "code": "KOR",
      "color": "#c8102e",
      "rank": 28,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "捷克",
      "code": "CZE",
      "color": "#11457e",
      "rank": 45,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 77,
        "away": 74
      },
      {
        "label": "防守",
        "home": 75,
        "away": 77
      },
      {
        "label": "中场",
        "home": 78,
        "away": 76
      },
      {
        "label": "近期状态",
        "home": 79,
        "away": 72
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-11",
      "rawTime": "20:00 UTC-6"
    },
    "probabilities": [
      48,
      27,
      25
    ],
    "confidence": 73,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "2-0",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "韩国 进攻指数 77，捷克 防守指数 77，这是判断主队进球上限的关键。",
      "捷克 进攻指数 74，韩国 防守指数 75，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.45,
      "away": 0.98
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "can-bih-7",
    "date": "2026-06-13",
    "time": "03:00",
    "group": "B组",
    "round": "Matchday 2",
    "venue": "Toronto",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-12-Canada-Bosnia & Herzegovina",
    "home": {
      "name": "加拿大",
      "code": "CAN",
      "color": "#d52b1e",
      "rank": 42,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "波黑",
      "code": "BIH",
      "color": "#001489",
      "rank": 58,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 74,
        "away": 72
      },
      {
        "label": "防守",
        "home": 70,
        "away": 68
      },
      {
        "label": "中场",
        "home": 73,
        "away": 74
      },
      {
        "label": "近期状态",
        "home": 76,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-12",
      "rawTime": "15:00 UTC-4"
    },
    "probabilities": [
      51,
      27,
      22
    ],
    "confidence": 74,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "加拿大 进攻指数 74，波黑 防守指数 68，这是判断主队进球上限的关键。",
      "波黑 进攻指数 72，加拿大 防守指数 70，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.47,
      "away": 0.85
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "usa-par-19",
    "date": "2026-06-13",
    "time": "09:00",
    "group": "D组",
    "round": "Matchday 2",
    "venue": "Los Angeles (Inglewood)",
    "status": "completed",
    "actualScore": "4-1",
    "externalSourceId": "2026-06-12-USA-Paraguay",
    "home": {
      "name": "美国",
      "code": "USA",
      "color": "#002868",
      "rank": 17,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "巴拉圭",
      "code": "PAR",
      "color": "#d52b1e",
      "rank": 39,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 78,
        "away": 71
      },
      {
        "label": "防守",
        "home": 76,
        "away": 78
      },
      {
        "label": "中场",
        "home": 79,
        "away": 72
      },
      {
        "label": "近期状态",
        "home": 80,
        "away": 71
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-12",
      "rawTime": "18:00 UTC-7"
    },
    "probabilities": [
      58,
      24,
      18
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 4-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "美国 进攻指数 78，巴拉圭 防守指数 78，这是判断主队进球上限的关键。",
      "巴拉圭 进攻指数 71，美国 防守指数 76，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.65,
      "away": 0.78
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "qat-sui-8",
    "date": "2026-06-14",
    "time": "03:00",
    "group": "B组",
    "round": "Matchday 3",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-13-Qatar-Switzerland",
    "home": {
      "name": "卡塔尔",
      "code": "QAT",
      "color": "#8a1538",
      "rank": 61,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "瑞士",
      "code": "SUI",
      "color": "#d52b1e",
      "rank": 16,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 69,
        "away": 74
      },
      {
        "label": "防守",
        "home": 66,
        "away": 81
      },
      {
        "label": "中场",
        "home": 68,
        "away": 77
      },
      {
        "label": "近期状态",
        "home": 69,
        "away": 74
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-13",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      17,
      24,
      59
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 15
      },
      {
        "score": "0-2",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "insights": [
      "卡塔尔 进攻指数 69，瑞士 防守指数 81，这是判断主队进球上限的关键。",
      "瑞士 进攻指数 74，卡塔尔 防守指数 66，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.75,
      "away": 1.67
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "bra-mar-13",
    "date": "2026-06-14",
    "time": "06:00",
    "group": "C组",
    "round": "Matchday 3",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-13-Brazil-Morocco",
    "home": {
      "name": "巴西",
      "code": "BRA",
      "color": "#f5cf36",
      "rank": 5,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "摩洛哥",
      "code": "MAR",
      "color": "#d91d3b",
      "rank": 8,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 88,
        "away": 76
      },
      {
        "label": "防守",
        "home": 81,
        "away": 87
      },
      {
        "label": "中场",
        "home": 86,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 79,
        "away": 91
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-13",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      38,
      27,
      35
    ],
    "confidence": 69,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "巴西 进攻指数 88，摩洛哥 防守指数 87，这是判断主队进球上限的关键。",
      "摩洛哥 进攻指数 76，巴西 防守指数 81，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.25,
      "away": 1.21
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "hai-sco-14",
    "date": "2026-06-14",
    "time": "09:00",
    "group": "C组",
    "round": "Matchday 3",
    "venue": "Boston (Foxborough)",
    "status": "completed",
    "actualScore": "0-1",
    "externalSourceId": "2026-06-13-Haiti-Scotland",
    "home": {
      "name": "海地",
      "code": "HAI",
      "color": "#174ea6",
      "rank": 84,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "苏格兰",
      "code": "SCO",
      "color": "#183c74",
      "rank": 38,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 61,
        "away": 76
      },
      {
        "label": "防守",
        "home": 55,
        "away": 79
      },
      {
        "label": "中场",
        "home": 58,
        "away": 81
      },
      {
        "label": "近期状态",
        "home": 62,
        "away": 73
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-13",
      "rawTime": "21:00 UTC-4"
    },
    "probabilities": [
      11,
      21,
      68
    ],
    "confidence": 83,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 0-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 16
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-3",
        "chance": 9
      }
    ],
    "insights": [
      "海地 进攻指数 61，苏格兰 防守指数 79，这是判断主队进球上限的关键。",
      "苏格兰 进攻指数 76，海地 防守指数 55，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.6,
      "away": 1.89
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "aus-tur-20",
    "date": "2026-06-14",
    "time": "12:00",
    "group": "D组",
    "round": "Matchday 3",
    "venue": "Vancouver",
    "status": "completed",
    "actualScore": "2-0",
    "externalSourceId": "2026-06-13-Australia-Turkey",
    "home": {
      "name": "澳大利亚",
      "code": "AUS",
      "color": "#f0b51d",
      "rank": 26,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "土耳其",
      "code": "TUR",
      "color": "#e32636",
      "rank": 27,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 72,
        "away": 82
      },
      {
        "label": "防守",
        "home": 78,
        "away": 71
      },
      {
        "label": "中场",
        "home": 69,
        "away": 84
      },
      {
        "label": "近期状态",
        "home": 75,
        "away": 80
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-13",
      "rawTime": "21:00 UTC-7"
    },
    "probabilities": [
      29,
      27,
      44
    ],
    "confidence": 75,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "insights": [
      "澳大利亚 进攻指数 72，土耳其 防守指数 71，这是判断主队进球上限的关键。",
      "土耳其 进攻指数 82，澳大利亚 防守指数 78，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.11,
      "away": 1.4
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ger-cuw-25",
    "date": "2026-06-15",
    "time": "01:00",
    "group": "E组",
    "round": "Matchday 4",
    "venue": "Houston",
    "status": "completed",
    "actualScore": "7-1",
    "externalSourceId": "2026-06-14-Germany-Curaçao",
    "home": {
      "name": "德国",
      "code": "GER",
      "color": "#e6e6e6",
      "rank": 9,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "库拉索",
      "code": "CUW",
      "color": "#1f62c4",
      "rank": 82,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 86,
        "away": 57
      },
      {
        "label": "防守",
        "home": 79,
        "away": 54
      },
      {
        "label": "中场",
        "home": 83,
        "away": 59
      },
      {
        "label": "近期状态",
        "home": 81,
        "away": 60
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-14",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      69,
      20,
      11
    ],
    "confidence": 86,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 7-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "insights": [
      "德国 进攻指数 86，库拉索 防守指数 54，这是判断主队进球上限的关键。",
      "库拉索 进攻指数 57，德国 防守指数 79，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.97,
      "away": 0.62
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ned-jpn-31",
    "date": "2026-06-15",
    "time": "04:00",
    "group": "F组",
    "round": "Matchday 4",
    "venue": "Dallas (Arlington)",
    "status": "completed",
    "actualScore": "2-2",
    "externalSourceId": "2026-06-14-Netherlands-Japan",
    "home": {
      "name": "荷兰",
      "code": "NED",
      "color": "#f36c21",
      "rank": 7,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "日本",
      "code": "JPN",
      "color": "#244a9b",
      "rank": 15,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 85,
        "away": 79
      },
      {
        "label": "防守",
        "home": 84,
        "away": 78
      },
      {
        "label": "中场",
        "home": 87,
        "away": 82
      },
      {
        "label": "近期状态",
        "home": 83,
        "away": 85
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-14",
      "rawTime": "15:00 UTC-5"
    },
    "probabilities": [
      43,
      27,
      30
    ],
    "confidence": 73,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-2。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "荷兰 进攻指数 85，日本 防守指数 78，这是判断主队进球上限的关键。",
      "日本 进攻指数 79，荷兰 防守指数 84，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.41,
      "away": 1.12
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "civ-ecu-26",
    "date": "2026-06-15",
    "time": "07:00",
    "group": "E组",
    "round": "Matchday 4",
    "venue": "Philadelphia",
    "status": "completed",
    "actualScore": "1-0",
    "externalSourceId": "2026-06-14-Ivory Coast-Ecuador",
    "home": {
      "name": "科特迪瓦",
      "code": "CIV",
      "color": "#ef7d22",
      "rank": 35,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "厄瓜多尔",
      "code": "ECU",
      "color": "#ffd32a",
      "rank": 24,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 78,
        "away": 77
      },
      {
        "label": "防守",
        "home": 72,
        "away": 84
      },
      {
        "label": "中场",
        "home": 74,
        "away": 80
      },
      {
        "label": "近期状态",
        "home": 79,
        "away": 83
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-14",
      "rawTime": "19:00 UTC-4"
    },
    "probabilities": [
      36,
      28,
      36
    ],
    "confidence": 68,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "科特迪瓦 进攻指数 78，厄瓜多尔 防守指数 84，这是判断主队进球上限的关键。",
      "厄瓜多尔 进攻指数 77，科特迪瓦 防守指数 72，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.21,
      "away": 1.19
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "swe-tun-32",
    "date": "2026-06-15",
    "time": "10:00",
    "group": "F组",
    "round": "Matchday 4",
    "venue": "Monterrey (Guadalupe)",
    "status": "completed",
    "actualScore": "5-1",
    "externalSourceId": "2026-06-14-Sweden-Tunisia",
    "home": {
      "name": "瑞典",
      "code": "SWE",
      "color": "#fecd00",
      "rank": 29,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "突尼斯",
      "code": "TUN",
      "color": "#e70013",
      "rank": 41,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 75,
        "away": 70
      },
      {
        "label": "防守",
        "home": 79,
        "away": 78
      },
      {
        "label": "中场",
        "home": 77,
        "away": 72
      },
      {
        "label": "近期状态",
        "home": 75,
        "away": 74
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-14",
      "rawTime": "20:00 UTC-6"
    },
    "probabilities": [
      44,
      29,
      27
    ],
    "confidence": 72,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 5-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 11
      }
    ],
    "insights": [
      "瑞典 进攻指数 75，突尼斯 防守指数 78，这是判断主队进球上限的关键。",
      "突尼斯 进攻指数 70，瑞典 防守指数 79，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.25,
      "away": 0.89
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "esp-cpv-43",
    "date": "2026-06-16",
    "time": "00:00",
    "group": "H组",
    "round": "Matchday 5",
    "venue": "Atlanta",
    "status": "completed",
    "actualScore": "0-0",
    "externalSourceId": "2026-06-15-Spain-Cape Verde",
    "home": {
      "name": "西班牙",
      "code": "ESP",
      "color": "#c60b1e",
      "rank": 3,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "佛得角",
      "code": "CPV",
      "color": "#003893",
      "rank": 71,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 91,
        "away": 68
      },
      {
        "label": "防守",
        "home": 86,
        "away": 72
      },
      {
        "label": "中场",
        "home": 93,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 90,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-15",
      "rawTime": "12:00 UTC-4"
    },
    "probabilities": [
      68,
      21,
      11
    ],
    "confidence": 86,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 0-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 16
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "insights": [
      "西班牙 进攻指数 91，佛得角 防守指数 72，这是判断主队进球上限的关键。",
      "佛得角 进攻指数 68，西班牙 防守指数 86，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.92,
      "away": 0.61
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "bel-egy-37",
    "date": "2026-06-16",
    "time": "03:00",
    "group": "G组",
    "round": "Matchday 5",
    "venue": "Seattle",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-15-Belgium-Egypt",
    "home": {
      "name": "比利时",
      "code": "BEL",
      "color": "#fdda24",
      "rank": 11,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "埃及",
      "code": "EGY",
      "color": "#ce1126",
      "rank": 31,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 83,
        "away": 79
      },
      {
        "label": "防守",
        "home": 79,
        "away": 76
      },
      {
        "label": "中场",
        "home": 82,
        "away": 75
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 78
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-15",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      52,
      27,
      21
    ],
    "confidence": 74,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "比利时 进攻指数 83，埃及 防守指数 76，这是判断主队进球上限的关键。",
      "埃及 进攻指数 79，比利时 防守指数 79，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.48,
      "away": 0.82
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ksa-uru-44",
    "date": "2026-06-16",
    "time": "06:00",
    "group": "H组",
    "round": "Matchday 5",
    "venue": "Miami (Miami Gardens)",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-15-Saudi Arabia-Uruguay",
    "home": {
      "name": "沙特阿拉伯",
      "code": "KSA",
      "color": "#006c35",
      "rank": 62,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "乌拉圭",
      "code": "URU",
      "color": "#55b8e8",
      "rank": 12,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 70,
        "away": 81
      },
      {
        "label": "防守",
        "home": 67,
        "away": 83
      },
      {
        "label": "中场",
        "home": 68,
        "away": 80
      },
      {
        "label": "近期状态",
        "home": 70,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-15",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      12,
      22,
      66
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 16
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "沙特阿拉伯 进攻指数 70，乌拉圭 防守指数 83，这是判断主队进球上限的关键。",
      "乌拉圭 进攻指数 81，沙特阿拉伯 防守指数 67，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.6,
      "away": 1.8
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "irn-nzl-38",
    "date": "2026-06-16",
    "time": "09:00",
    "group": "G组",
    "round": "Matchday 5",
    "venue": "Los Angeles (Inglewood)",
    "status": "completed",
    "actualScore": "2-2",
    "externalSourceId": "2026-06-15-Iran-New Zealand",
    "home": {
      "name": "伊朗",
      "code": "IRN",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "新西兰",
      "code": "NZL",
      "color": "#000000",
      "rank": 88,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 64
      },
      {
        "label": "防守",
        "home": 66,
        "away": 68
      },
      {
        "label": "中场",
        "home": 66,
        "away": 65
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-15",
      "rawTime": "18:00 UTC-7"
    },
    "probabilities": [
      41,
      27,
      32
    ],
    "confidence": 68,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-2。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "伊朗 进攻指数 66，新西兰 防守指数 68，这是判断主队进球上限的关键。",
      "新西兰 进攻指数 64，伊朗 防守指数 66，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.29,
      "away": 1.14
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "fra-sen-49",
    "date": "2026-06-17",
    "time": "03:00",
    "group": "I组",
    "round": "Matchday 6",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "completed",
    "actualScore": "3-1",
    "externalSourceId": "2026-06-16-France-Senegal",
    "home": {
      "name": "法国",
      "code": "FRA",
      "color": "#002395",
      "rank": 2,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "塞内加尔",
      "code": "SEN",
      "color": "#00853f",
      "rank": 19,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 94,
        "away": 78
      },
      {
        "label": "防守",
        "home": 87,
        "away": 80
      },
      {
        "label": "中场",
        "home": 89,
        "away": 77
      },
      {
        "label": "近期状态",
        "home": 88,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-16",
      "rawTime": "15:00 UTC-4"
    },
    "probabilities": [
      57,
      25,
      18
    ],
    "confidence": 79,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 3-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "法国 进攻指数 94，塞内加尔 防守指数 80，这是判断主队进球上限的关键。",
      "塞内加尔 进攻指数 78，法国 防守指数 87，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.57,
      "away": 0.76
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "irq-nor-50",
    "date": "2026-06-17",
    "time": "06:00",
    "group": "I组",
    "round": "Matchday 6",
    "venue": "Boston (Foxborough)",
    "status": "completed",
    "actualScore": "1-4",
    "externalSourceId": "2026-06-16-Iraq-Norway",
    "home": {
      "name": "伊拉克",
      "code": "IRQ",
      "color": "#ce1126",
      "rank": 85,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "挪威",
      "code": "NOR",
      "color": "#ba0c2f",
      "rank": 30,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 84
      },
      {
        "label": "防守",
        "home": 67,
        "away": 73
      },
      {
        "label": "中场",
        "home": 66,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 68,
        "away": 76
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-16",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      12,
      21,
      67
    ],
    "confidence": 85,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-4。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 16
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "insights": [
      "伊拉克 进攻指数 66，挪威 防守指数 73，这是判断主队进球上限的关键。",
      "挪威 进攻指数 84，伊拉克 防守指数 67，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.62,
      "away": 1.86
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "arg-alg-55",
    "date": "2026-06-17",
    "time": "09:00",
    "group": "J组",
    "round": "Matchday 6",
    "venue": "Kansas City",
    "status": "completed",
    "actualScore": "3-0",
    "externalSourceId": "2026-06-16-Argentina-Algeria",
    "home": {
      "name": "阿根廷",
      "code": "ARG",
      "color": "#75aadb",
      "rank": 1,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "阿尔及利亚",
      "code": "ALG",
      "color": "#006633",
      "rank": 43,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 92,
        "away": 76
      },
      {
        "label": "防守",
        "home": 88,
        "away": 73
      },
      {
        "label": "中场",
        "home": 91,
        "away": 75
      },
      {
        "label": "近期状态",
        "home": 89,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-16",
      "rawTime": "20:00 UTC-5"
    },
    "probabilities": [
      66,
      23,
      11
    ],
    "confidence": 84,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 3-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 18
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "阿根廷 进攻指数 92，阿尔及利亚 防守指数 73，这是判断主队进球上限的关键。",
      "阿尔及利亚 进攻指数 76，阿根廷 防守指数 88，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.74,
      "away": 0.55
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "aut-jor-56",
    "date": "2026-06-17",
    "time": "12:00",
    "group": "J组",
    "round": "Matchday 6",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "completed",
    "actualScore": "3-1",
    "externalSourceId": "2026-06-16-Austria-Jordan",
    "home": {
      "name": "奥地利",
      "code": "AUT",
      "color": "#ed2939",
      "rank": 44,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "约旦",
      "code": "JOR",
      "color": "#007a3d",
      "rank": 68,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 67
      },
      {
        "label": "防守",
        "home": 76,
        "away": 68
      },
      {
        "label": "中场",
        "home": 78,
        "away": 67
      },
      {
        "label": "近期状态",
        "home": 77,
        "away": 72
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-16",
      "rawTime": "21:00 UTC-7"
    },
    "probabilities": [
      59,
      24,
      17
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 3-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "奥地利 进攻指数 76，约旦 防守指数 68，这是判断主队进球上限的关键。",
      "约旦 进攻指数 67，奥地利 防守指数 76，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.66,
      "away": 0.78
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "por-cod-61",
    "date": "2026-06-18",
    "time": "01:00",
    "group": "K组",
    "round": "Matchday 7",
    "venue": "Houston",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-17-Portugal-DR Congo",
    "home": {
      "name": "葡萄牙",
      "code": "POR",
      "color": "#900020",
      "rank": 6,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "刚果（金）",
      "code": "COD",
      "color": "#007fff",
      "rank": 77,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 87,
        "away": 70
      },
      {
        "label": "防守",
        "home": 84,
        "away": 72
      },
      {
        "label": "中场",
        "home": 86,
        "away": 69
      },
      {
        "label": "近期状态",
        "home": 85,
        "away": 71
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-17",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      66,
      23,
      11
    ],
    "confidence": 85,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 19
      },
      {
        "score": "2-0",
        "chance": 16
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "葡萄牙 进攻指数 87，刚果（金） 防守指数 72，这是判断主队进球上限的关键。",
      "刚果（金） 进攻指数 70，葡萄牙 防守指数 84，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.67,
      "away": 0.53
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "eng-cro-67",
    "date": "2026-06-18",
    "time": "04:00",
    "group": "L组",
    "round": "Matchday 7",
    "venue": "Dallas (Arlington)",
    "status": "completed",
    "actualScore": "4-2",
    "externalSourceId": "2026-06-17-England-Croatia",
    "home": {
      "name": "英格兰",
      "code": "ENG",
      "color": "#ffffff",
      "rank": 4,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "克罗地亚",
      "code": "CRO",
      "color": "#ff0000",
      "rank": 14,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 90,
        "away": 78
      },
      {
        "label": "防守",
        "home": 85,
        "away": 82
      },
      {
        "label": "中场",
        "home": 88,
        "away": 85
      },
      {
        "label": "近期状态",
        "home": 87,
        "away": 76
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-17",
      "rawTime": "15:00 UTC-5"
    },
    "probabilities": [
      55,
      25,
      20
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 4-2。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "insights": [
      "英格兰 进攻指数 90，克罗地亚 防守指数 82，这是判断主队进球上限的关键。",
      "克罗地亚 进攻指数 78，英格兰 防守指数 85，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.62,
      "away": 0.87
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "gha-pan-68",
    "date": "2026-06-18",
    "time": "07:00",
    "group": "L组",
    "round": "Matchday 7",
    "venue": "Toronto",
    "status": "completed",
    "actualScore": "1-0",
    "externalSourceId": "2026-06-17-Ghana-Panama",
    "home": {
      "name": "加纳",
      "code": "GHA",
      "color": "#ce1126",
      "rank": 76,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "巴拿马",
      "code": "PAN",
      "color": "#005293",
      "rank": 74,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 73,
        "away": 67
      },
      {
        "label": "防守",
        "home": 69,
        "away": 70
      },
      {
        "label": "中场",
        "home": 71,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 67,
        "away": 69
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-17",
      "rawTime": "19:00 UTC-4"
    },
    "probabilities": [
      43,
      27,
      30
    ],
    "confidence": 72,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "加纳 进攻指数 73，巴拿马 防守指数 70，这是判断主队进球上限的关键。",
      "巴拿马 进攻指数 67，加纳 防守指数 69，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.33,
      "away": 1.05
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "uzb-col-62",
    "date": "2026-06-18",
    "time": "10:00",
    "group": "K组",
    "round": "Matchday 7",
    "venue": "Mexico City",
    "status": "completed",
    "actualScore": "1-3",
    "externalSourceId": "2026-06-17-Uzbekistan-Colombia",
    "home": {
      "name": "乌兹别克斯坦",
      "code": "UZB",
      "color": "#1eb53a",
      "rank": 65,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "哥伦比亚",
      "code": "COL",
      "color": "#ffcd00",
      "rank": 13,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 69,
        "away": 80
      },
      {
        "label": "防守",
        "home": 71,
        "away": 82
      },
      {
        "label": "中场",
        "home": 70,
        "away": 81
      },
      {
        "label": "近期状态",
        "home": 73,
        "away": 84
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-17",
      "rawTime": "20:00 UTC-6"
    },
    "probabilities": [
      14,
      24,
      62
    ],
    "confidence": 81,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-3。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 17
      },
      {
        "score": "0-2",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "乌兹别克斯坦 进攻指数 69，哥伦比亚 防守指数 82，这是判断主队进球上限的关键。",
      "哥伦比亚 进攻指数 80，乌兹别克斯坦 防守指数 71，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.65,
      "away": 1.67
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "cze-rsa-3",
    "date": "2026-06-19",
    "time": "00:00",
    "group": "A组",
    "round": "Matchday 8",
    "venue": "Atlanta",
    "status": "completed",
    "actualScore": "1-1",
    "externalSourceId": "2026-06-18-Czech Republic-South Africa",
    "home": {
      "name": "捷克",
      "code": "CZE",
      "color": "#11457e",
      "rank": 45,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "南非",
      "code": "RSA",
      "color": "#007a4d",
      "rank": 90,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 74,
        "away": 66
      },
      {
        "label": "防守",
        "home": 77,
        "away": 67
      },
      {
        "label": "中场",
        "home": 76,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 72,
        "away": 68
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-18",
      "rawTime": "12:00 UTC-4"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 83,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "捷克 进攻指数 74，南非 防守指数 67，这是判断主队进球上限的关键。",
      "南非 进攻指数 66，捷克 防守指数 77，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.8,
      "away": 0.57
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "sui-bih-9",
    "date": "2026-06-19",
    "time": "03:00",
    "group": "B组",
    "round": "Matchday 8",
    "venue": "Los Angeles (Inglewood)",
    "status": "completed",
    "actualScore": "4-1",
    "externalSourceId": "2026-06-18-Switzerland-Bosnia & Herzegovina",
    "home": {
      "name": "瑞士",
      "code": "SUI",
      "color": "#d52b1e",
      "rank": 16,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "波黑",
      "code": "BIH",
      "color": "#001489",
      "rank": 58,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 74,
        "away": 72
      },
      {
        "label": "防守",
        "home": 81,
        "away": 68
      },
      {
        "label": "中场",
        "home": 77,
        "away": 74
      },
      {
        "label": "近期状态",
        "home": 74,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-18",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      61,
      24,
      15
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 4-1。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 16
      },
      {
        "score": "2-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "瑞士 进攻指数 74，波黑 防守指数 68，这是判断主队进球上限的关键。",
      "波黑 进攻指数 72，瑞士 防守指数 81，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.66,
      "away": 0.69
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "can-qat-10",
    "date": "2026-06-19",
    "time": "06:00",
    "group": "B组",
    "round": "Matchday 8",
    "venue": "Vancouver",
    "status": "completed",
    "actualScore": "6-0",
    "externalSourceId": "2026-06-18-Canada-Qatar",
    "home": {
      "name": "加拿大",
      "code": "CAN",
      "color": "#d52b1e",
      "rank": 42,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "卡塔尔",
      "code": "QAT",
      "color": "#8a1538",
      "rank": 61,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 74,
        "away": 69
      },
      {
        "label": "防守",
        "home": 70,
        "away": 66
      },
      {
        "label": "中场",
        "home": 73,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 76,
        "away": 69
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-18",
      "rawTime": "15:00 UTC-7"
    },
    "probabilities": [
      57,
      25,
      18
    ],
    "confidence": 77,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 6-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "加拿大 进攻指数 74，卡塔尔 防守指数 66，这是判断主队进球上限的关键。",
      "卡塔尔 进攻指数 69，加拿大 防守指数 70，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.64,
      "away": 0.79
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "mex-kor-4",
    "date": "2026-06-19",
    "time": "09:00",
    "group": "A组",
    "round": "Matchday 8",
    "venue": "Guadalajara (Zapopan)",
    "status": "completed",
    "actualScore": "1-0",
    "externalSourceId": "2026-06-18-Mexico-South Korea",
    "home": {
      "name": "墨西哥",
      "code": "MEX",
      "color": "#006847",
      "rank": 18,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "韩国",
      "code": "KOR",
      "color": "#c8102e",
      "rank": 28,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 77
      },
      {
        "label": "防守",
        "home": 75,
        "away": 75
      },
      {
        "label": "中场",
        "home": 76,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-18",
      "rawTime": "19:00 UTC-6"
    },
    "probabilities": [
      40,
      27,
      33
    ],
    "confidence": 71,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-0。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "墨西哥 进攻指数 76，韩国 防守指数 75，这是判断主队进球上限的关键。",
      "韩国 进攻指数 77，墨西哥 防守指数 75，客队反击和转换质量需要重点观察。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.3,
      "away": 1.15
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "usa-aus-21",
    "date": "2026-06-20",
    "time": "03:00",
    "group": "D组",
    "round": "Matchday 9",
    "venue": "Seattle",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-19-USA-Australia",
    "home": {
      "name": "美国",
      "code": "USA",
      "color": "#002868",
      "rank": 17,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "澳大利亚",
      "code": "AUS",
      "color": "#f0b51d",
      "rank": 26,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 78,
        "away": 72
      },
      {
        "label": "防守",
        "home": 76,
        "away": 78
      },
      {
        "label": "中场",
        "home": 79,
        "away": 69
      },
      {
        "label": "近期状态",
        "home": 80,
        "away": 75
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-19",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      44,
      29,
      27
    ],
    "confidence": 75,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 美国 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      }
    ],
    "insights": [
      "美国 进攻指数 78，澳大利亚 防守指数 78，这是判断主队进球上限的关键。",
      "澳大利亚 进攻指数 72，美国 防守指数 76，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.25,
      "away": 0.92
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "sco-mar-15",
    "date": "2026-06-20",
    "time": "06:00",
    "group": "C组",
    "round": "Matchday 9",
    "venue": "Boston (Foxborough)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-19-Scotland-Morocco",
    "home": {
      "name": "苏格兰",
      "code": "SCO",
      "color": "#183c74",
      "rank": 38,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "摩洛哥",
      "code": "MAR",
      "color": "#d91d3b",
      "rank": 8,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 76
      },
      {
        "label": "防守",
        "home": 79,
        "away": 87
      },
      {
        "label": "中场",
        "home": 81,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 73,
        "away": 91
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-19",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      20,
      27,
      53
    ],
    "confidence": 77,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 摩洛哥 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 16
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-2",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "苏格兰 进攻指数 76，摩洛哥 防守指数 87，这是判断主队进球上限的关键。",
      "摩洛哥 进攻指数 76，苏格兰 防守指数 79，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.78,
      "away": 1.46
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "bra-hai-16",
    "date": "2026-06-20",
    "time": "08:30",
    "group": "C组",
    "round": "Matchday 9",
    "venue": "Philadelphia",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-19-Brazil-Haiti",
    "home": {
      "name": "巴西",
      "code": "BRA",
      "color": "#f5cf36",
      "rank": 5,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "海地",
      "code": "HAI",
      "color": "#174ea6",
      "rank": 84,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 88,
        "away": 61
      },
      {
        "label": "防守",
        "home": 81,
        "away": 55
      },
      {
        "label": "中场",
        "home": 86,
        "away": 58
      },
      {
        "label": "近期状态",
        "home": 79,
        "away": 62
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-19",
      "rawTime": "20:30 UTC-4"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 85,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 巴西 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "巴西 进攻指数 88，海地 防守指数 55，这是判断主队进球上限的关键。",
      "海地 进攻指数 61，巴西 防守指数 81，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.77,
      "away": 0.56
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "tur-par-22",
    "date": "2026-06-20",
    "time": "11:00",
    "group": "D组",
    "round": "Matchday 9",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-19-Turkey-Paraguay",
    "home": {
      "name": "土耳其",
      "code": "TUR",
      "color": "#e32636",
      "rank": 27,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "巴拉圭",
      "code": "PAR",
      "color": "#d52b1e",
      "rank": 39,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 82,
        "away": 71
      },
      {
        "label": "防守",
        "home": 71,
        "away": 78
      },
      {
        "label": "中场",
        "home": 84,
        "away": 72
      },
      {
        "label": "近期状态",
        "home": 80,
        "away": 71
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-19",
      "rawTime": "20:00 UTC-7"
    },
    "probabilities": [
      52,
      26,
      22
    ],
    "confidence": 78,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 土耳其 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "土耳其 进攻指数 82，巴拉圭 防守指数 78，这是判断主队进球上限的关键。",
      "巴拉圭 进攻指数 71，土耳其 防守指数 71，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.55,
      "away": 0.91
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ned-swe-33",
    "date": "2026-06-21",
    "time": "01:00",
    "group": "F组",
    "round": "Matchday 10",
    "venue": "Houston",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-20-Netherlands-Sweden",
    "home": {
      "name": "荷兰",
      "code": "NED",
      "color": "#f36c21",
      "rank": 7,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "瑞典",
      "code": "SWE",
      "color": "#fecd00",
      "rank": 29,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 85,
        "away": 75
      },
      {
        "label": "防守",
        "home": 84,
        "away": 79
      },
      {
        "label": "中场",
        "home": 87,
        "away": 77
      },
      {
        "label": "近期状态",
        "home": 83,
        "away": 75
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-20",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      52,
      26,
      22
    ],
    "confidence": 78,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 荷兰 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "荷兰 进攻指数 85，瑞典 防守指数 79，这是判断主队进球上限的关键。",
      "瑞典 进攻指数 75，荷兰 防守指数 84，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.55,
      "away": 0.89
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ger-civ-27",
    "date": "2026-06-21",
    "time": "04:00",
    "group": "E组",
    "round": "Matchday 10",
    "venue": "Toronto",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-20-Germany-Ivory Coast",
    "home": {
      "name": "德国",
      "code": "GER",
      "color": "#e6e6e6",
      "rank": 9,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "科特迪瓦",
      "code": "CIV",
      "color": "#ef7d22",
      "rank": 35,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 86,
        "away": 78
      },
      {
        "label": "防守",
        "home": 79,
        "away": 72
      },
      {
        "label": "中场",
        "home": 83,
        "away": 74
      },
      {
        "label": "近期状态",
        "home": 81,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-20",
      "rawTime": "16:00 UTC-4"
    },
    "probabilities": [
      57,
      24,
      19
    ],
    "confidence": 79,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 德国 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "insights": [
      "德国 进攻指数 86，科特迪瓦 防守指数 72，这是判断主队进球上限的关键。",
      "科特迪瓦 进攻指数 78，德国 防守指数 79，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.71,
      "away": 0.85
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ecu-cuw-28",
    "date": "2026-06-21",
    "time": "08:00",
    "group": "E组",
    "round": "Matchday 10",
    "venue": "Kansas City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-20-Ecuador-Curaçao",
    "home": {
      "name": "厄瓜多尔",
      "code": "ECU",
      "color": "#ffd32a",
      "rank": 24,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "库拉索",
      "code": "CUW",
      "color": "#1f62c4",
      "rank": 82,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 77,
        "away": 57
      },
      {
        "label": "防守",
        "home": 84,
        "away": 54
      },
      {
        "label": "中场",
        "home": 80,
        "away": 59
      },
      {
        "label": "近期状态",
        "home": 83,
        "away": 60
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-20",
      "rawTime": "19:00 UTC-5"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 厄瓜多尔 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 18
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "厄瓜多尔 进攻指数 77，库拉索 防守指数 54，这是判断主队进球上限的关键。",
      "库拉索 进攻指数 57，厄瓜多尔 防守指数 84，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.75,
      "away": 0.55
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "tun-jpn-34",
    "date": "2026-06-21",
    "time": "12:00",
    "group": "F组",
    "round": "Matchday 10",
    "venue": "Monterrey (Guadalupe)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-20-Tunisia-Japan",
    "home": {
      "name": "突尼斯",
      "code": "TUN",
      "color": "#e70013",
      "rank": 41,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "日本",
      "code": "JPN",
      "color": "#244a9b",
      "rank": 15,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 70,
        "away": 79
      },
      {
        "label": "防守",
        "home": 78,
        "away": 78
      },
      {
        "label": "中场",
        "home": 72,
        "away": 82
      },
      {
        "label": "近期状态",
        "home": 74,
        "away": 85
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-20",
      "rawTime": "22:00 UTC-6"
    },
    "probabilities": [
      19,
      26,
      55
    ],
    "confidence": 81,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 日本 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-2",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "突尼斯 进攻指数 70，日本 防守指数 78，这是判断主队进球上限的关键。",
      "日本 进攻指数 79，突尼斯 防守指数 78，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.8,
      "away": 1.55
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "esp-ksa-45",
    "date": "2026-06-22",
    "time": "00:00",
    "group": "H组",
    "round": "Matchday 11",
    "venue": "Atlanta",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-21-Spain-Saudi Arabia",
    "home": {
      "name": "西班牙",
      "code": "ESP",
      "color": "#c60b1e",
      "rank": 3,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "沙特阿拉伯",
      "code": "KSA",
      "color": "#006c35",
      "rank": 62,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 91,
        "away": 70
      },
      {
        "label": "防守",
        "home": 86,
        "away": 67
      },
      {
        "label": "中场",
        "home": 93,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 90,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-21",
      "rawTime": "12:00 UTC-4"
    },
    "probabilities": [
      69,
      20,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 西班牙 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "insights": [
      "西班牙 进攻指数 91，沙特阿拉伯 防守指数 67，这是判断主队进球上限的关键。",
      "沙特阿拉伯 进攻指数 70，西班牙 防守指数 86，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.95,
      "away": 0.62
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "bel-irn-39",
    "date": "2026-06-22",
    "time": "03:00",
    "group": "G组",
    "round": "Matchday 11",
    "venue": "Los Angeles (Inglewood)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-21-Belgium-Iran",
    "home": {
      "name": "比利时",
      "code": "BEL",
      "color": "#fdda24",
      "rank": 11,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "伊朗",
      "code": "IRN",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 83,
        "away": 66
      },
      {
        "label": "防守",
        "home": 79,
        "away": 66
      },
      {
        "label": "中场",
        "home": 82,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-21",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      66,
      23,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 比利时 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 18
      },
      {
        "score": "2-0",
        "chance": 16
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "比利时 进攻指数 83，伊朗 防守指数 66，这是判断主队进球上限的关键。",
      "伊朗 进攻指数 66，比利时 防守指数 79，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.73,
      "away": 0.55
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "uru-cpv-46",
    "date": "2026-06-22",
    "time": "06:00",
    "group": "H组",
    "round": "Matchday 11",
    "venue": "Miami (Miami Gardens)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-21-Uruguay-Cape Verde",
    "home": {
      "name": "乌拉圭",
      "code": "URU",
      "color": "#55b8e8",
      "rank": 12,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "佛得角",
      "code": "CPV",
      "color": "#003893",
      "rank": 71,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 81,
        "away": 68
      },
      {
        "label": "防守",
        "home": 83,
        "away": 72
      },
      {
        "label": "中场",
        "home": 80,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 77,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-21",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 80,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 乌拉圭 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "乌拉圭 进攻指数 81，佛得角 防守指数 72，这是判断主队进球上限的关键。",
      "佛得角 进攻指数 68，乌拉圭 防守指数 83，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.79,
      "away": 0.57
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "nzl-egy-40",
    "date": "2026-06-22",
    "time": "09:00",
    "group": "G组",
    "round": "Matchday 11",
    "venue": "Vancouver",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-21-New Zealand-Egypt",
    "home": {
      "name": "新西兰",
      "code": "NZL",
      "color": "#000000",
      "rank": 88,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "埃及",
      "code": "EGY",
      "color": "#ce1126",
      "rank": 31,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 64,
        "away": 79
      },
      {
        "label": "防守",
        "home": 68,
        "away": 76
      },
      {
        "label": "中场",
        "home": 65,
        "away": 75
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 78
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-21",
      "rawTime": "18:00 UTC-7"
    },
    "probabilities": [
      11,
      21,
      68
    ],
    "confidence": 84,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 埃及 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 16
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "0-3",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "insights": [
      "新西兰 进攻指数 64，埃及 防守指数 76，这是判断主队进球上限的关键。",
      "埃及 进攻指数 79，新西兰 防守指数 68，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.6,
      "away": 1.91
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "arg-aut-57",
    "date": "2026-06-23",
    "time": "01:00",
    "group": "J组",
    "round": "Matchday 12",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-22-Argentina-Austria",
    "home": {
      "name": "阿根廷",
      "code": "ARG",
      "color": "#75aadb",
      "rank": 1,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "奥地利",
      "code": "AUT",
      "color": "#ed2939",
      "rank": 44,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 92,
        "away": 76
      },
      {
        "label": "防守",
        "home": 88,
        "away": 76
      },
      {
        "label": "中场",
        "home": 91,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 89,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-22",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      68,
      21,
      11
    ],
    "confidence": 84,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 阿根廷 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 16
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 9
      },
      {
        "score": "3-0",
        "chance": 9
      }
    ],
    "insights": [
      "阿根廷 进攻指数 92，奥地利 防守指数 76，这是判断主队进球上限的关键。",
      "奥地利 进攻指数 76，阿根廷 防守指数 88，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.89,
      "away": 0.6
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "fra-irq-51",
    "date": "2026-06-23",
    "time": "05:00",
    "group": "I组",
    "round": "Matchday 12",
    "venue": "Philadelphia",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-22-France-Iraq",
    "home": {
      "name": "法国",
      "code": "FRA",
      "color": "#002395",
      "rank": 2,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "伊拉克",
      "code": "IRQ",
      "color": "#ce1126",
      "rank": 85,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 94,
        "away": 66
      },
      {
        "label": "防守",
        "home": 87,
        "away": 67
      },
      {
        "label": "中场",
        "home": 89,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 88,
        "away": 68
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-22",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 88,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 法国 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "法国 进攻指数 94，伊拉克 防守指数 67，这是判断主队进球上限的关键。",
      "伊拉克 进攻指数 66，法国 防守指数 87，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.78,
      "away": 0.56
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "nor-sen-52",
    "date": "2026-06-23",
    "time": "08:00",
    "group": "I组",
    "round": "Matchday 12",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-22-Norway-Senegal",
    "home": {
      "name": "挪威",
      "code": "NOR",
      "color": "#ba0c2f",
      "rank": 30,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "塞内加尔",
      "code": "SEN",
      "color": "#00853f",
      "rank": 19,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 84,
        "away": 78
      },
      {
        "label": "防守",
        "home": 73,
        "away": 80
      },
      {
        "label": "中场",
        "home": 78,
        "away": 77
      },
      {
        "label": "近期状态",
        "home": 76,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-22",
      "rawTime": "20:00 UTC-4"
    },
    "probabilities": [
      38,
      28,
      34
    ],
    "confidence": 68,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 挪威 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "挪威 进攻指数 84，塞内加尔 防守指数 80，这是判断主队进球上限的关键。",
      "塞内加尔 进攻指数 78，挪威 防守指数 73，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.2,
      "away": 1.11
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "jor-alg-58",
    "date": "2026-06-23",
    "time": "11:00",
    "group": "J组",
    "round": "Matchday 12",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-22-Jordan-Algeria",
    "home": {
      "name": "约旦",
      "code": "JOR",
      "color": "#007a3d",
      "rank": 68,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "阿尔及利亚",
      "code": "ALG",
      "color": "#006633",
      "rank": 43,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 67,
        "away": 76
      },
      {
        "label": "防守",
        "home": 68,
        "away": 73
      },
      {
        "label": "中场",
        "home": 67,
        "away": 75
      },
      {
        "label": "近期状态",
        "home": 72,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-22",
      "rawTime": "20:00 UTC-7"
    },
    "probabilities": [
      26,
      27,
      47
    ],
    "confidence": 75,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 阿尔及利亚 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "0-2",
        "chance": 9
      }
    ],
    "insights": [
      "约旦 进攻指数 67，阿尔及利亚 防守指数 73，这是判断主队进球上限的关键。",
      "阿尔及利亚 进攻指数 76，约旦 防守指数 68，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.02,
      "away": 1.45
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "por-uzb-63",
    "date": "2026-06-24",
    "time": "01:00",
    "group": "K组",
    "round": "Matchday 13",
    "venue": "Houston",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-23-Portugal-Uzbekistan",
    "home": {
      "name": "葡萄牙",
      "code": "POR",
      "color": "#900020",
      "rank": 6,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "乌兹别克斯坦",
      "code": "UZB",
      "color": "#1eb53a",
      "rank": 65,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 87,
        "away": 69
      },
      {
        "label": "防守",
        "home": 84,
        "away": 71
      },
      {
        "label": "中场",
        "home": 86,
        "away": 70
      },
      {
        "label": "近期状态",
        "home": 85,
        "away": 73
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-23",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 85,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 葡萄牙 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "3-0",
        "chance": 9
      }
    ],
    "insights": [
      "葡萄牙 进攻指数 87，乌兹别克斯坦 防守指数 71，这是判断主队进球上限的关键。",
      "乌兹别克斯坦 进攻指数 69，葡萄牙 防守指数 84，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.84,
      "away": 0.58
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "eng-gha-69",
    "date": "2026-06-24",
    "time": "04:00",
    "group": "L组",
    "round": "Matchday 13",
    "venue": "Boston (Foxborough)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-23-England-Ghana",
    "home": {
      "name": "英格兰",
      "code": "ENG",
      "color": "#ffffff",
      "rank": 4,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "加纳",
      "code": "GHA",
      "color": "#ce1126",
      "rank": 76,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 90,
        "away": 73
      },
      {
        "label": "防守",
        "home": 85,
        "away": 69
      },
      {
        "label": "中场",
        "home": 88,
        "away": 71
      },
      {
        "label": "近期状态",
        "home": 87,
        "away": 67
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-23",
      "rawTime": "16:00 UTC-4"
    },
    "probabilities": [
      69,
      20,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 英格兰 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "insights": [
      "英格兰 进攻指数 90，加纳 防守指数 69，这是判断主队进球上限的关键。",
      "加纳 进攻指数 73，英格兰 防守指数 85，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.99,
      "away": 0.63
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "pan-cro-70",
    "date": "2026-06-24",
    "time": "07:00",
    "group": "L组",
    "round": "Matchday 13",
    "venue": "Toronto",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-23-Panama-Croatia",
    "home": {
      "name": "巴拿马",
      "code": "PAN",
      "color": "#005293",
      "rank": 74,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "克罗地亚",
      "code": "CRO",
      "color": "#ff0000",
      "rank": 14,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 67,
        "away": 78
      },
      {
        "label": "防守",
        "home": 70,
        "away": 82
      },
      {
        "label": "中场",
        "home": 68,
        "away": 85
      },
      {
        "label": "近期状态",
        "home": 69,
        "away": 76
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-23",
      "rawTime": "19:00 UTC-4"
    },
    "probabilities": [
      12,
      23,
      65
    ],
    "confidence": 84,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 克罗地亚 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 18
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "巴拿马 进攻指数 67，克罗地亚 防守指数 82，这是判断主队进球上限的关键。",
      "克罗地亚 进攻指数 78，巴拿马 防守指数 70，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.55,
      "away": 1.7
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "col-cod-64",
    "date": "2026-06-24",
    "time": "10:00",
    "group": "K组",
    "round": "Matchday 13",
    "venue": "Guadalajara (Zapopan)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-23-Colombia-DR Congo",
    "home": {
      "name": "哥伦比亚",
      "code": "COL",
      "color": "#ffcd00",
      "rank": 13,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "刚果（金）",
      "code": "COD",
      "color": "#007fff",
      "rank": 77,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 80,
        "away": 70
      },
      {
        "label": "防守",
        "home": 82,
        "away": 72
      },
      {
        "label": "中场",
        "home": 81,
        "away": 69
      },
      {
        "label": "近期状态",
        "home": 84,
        "away": 71
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-23",
      "rawTime": "20:00 UTC-6"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 83,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 哥伦比亚 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "哥伦比亚 进攻指数 80，刚果（金） 防守指数 72，这是判断主队进球上限的关键。",
      "刚果（金） 进攻指数 70，哥伦比亚 防守指数 82，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.79,
      "away": 0.56
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "sui-can-11",
    "date": "2026-06-25",
    "time": "03:00",
    "group": "B组",
    "round": "Matchday 14",
    "venue": "Vancouver",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-24-Switzerland-Canada",
    "home": {
      "name": "瑞士",
      "code": "SUI",
      "color": "#d52b1e",
      "rank": 16,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "加拿大",
      "code": "CAN",
      "color": "#d52b1e",
      "rank": 42,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 74,
        "away": 74
      },
      {
        "label": "防守",
        "home": 81,
        "away": 70
      },
      {
        "label": "中场",
        "home": 77,
        "away": 73
      },
      {
        "label": "近期状态",
        "home": 74,
        "away": 76
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-24",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      45,
      28,
      27
    ],
    "confidence": 73,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 瑞士 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      }
    ],
    "insights": [
      "瑞士 进攻指数 74，加拿大 防守指数 70，这是判断主队进球上限的关键。",
      "加拿大 进攻指数 74，瑞士 防守指数 81，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.31,
      "away": 0.95
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "bih-qat-12",
    "date": "2026-06-25",
    "time": "03:00",
    "group": "B组",
    "round": "Matchday 14",
    "venue": "Seattle",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-24-Bosnia & Herzegovina-Qatar",
    "home": {
      "name": "波黑",
      "code": "BIH",
      "color": "#001489",
      "rank": 58,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "卡塔尔",
      "code": "QAT",
      "color": "#8a1538",
      "rank": 61,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 72,
        "away": 69
      },
      {
        "label": "防守",
        "home": 68,
        "away": 66
      },
      {
        "label": "中场",
        "home": 74,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 70,
        "away": 69
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-24",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      50,
      26,
      24
    ],
    "confidence": 73,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 波黑 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "波黑 进攻指数 72，卡塔尔 防守指数 66，这是判断主队进球上限的关键。",
      "卡塔尔 进攻指数 69，波黑 防守指数 68，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.55,
      "away": 0.97
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "sco-bra-17",
    "date": "2026-06-25",
    "time": "06:00",
    "group": "C组",
    "round": "Matchday 14",
    "venue": "Miami (Miami Gardens)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-24-Scotland-Brazil",
    "home": {
      "name": "苏格兰",
      "code": "SCO",
      "color": "#183c74",
      "rank": 38,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "巴西",
      "code": "BRA",
      "color": "#f5cf36",
      "rank": 5,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 88
      },
      {
        "label": "防守",
        "home": 79,
        "away": 81
      },
      {
        "label": "中场",
        "home": 81,
        "away": 86
      },
      {
        "label": "近期状态",
        "home": 73,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-24",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      21,
      27,
      52
    ],
    "confidence": 75,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 巴西 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-2",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "苏格兰 进攻指数 76，巴西 防守指数 81，这是判断主队进球上限的关键。",
      "巴西 进攻指数 88，苏格兰 防守指数 79，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.82,
      "away": 1.44
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "mar-hai-18",
    "date": "2026-06-25",
    "time": "06:00",
    "group": "C组",
    "round": "Matchday 14",
    "venue": "Atlanta",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-24-Morocco-Haiti",
    "home": {
      "name": "摩洛哥",
      "code": "MAR",
      "color": "#d91d3b",
      "rank": 8,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "海地",
      "code": "HAI",
      "color": "#174ea6",
      "rank": 84,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 61
      },
      {
        "label": "防守",
        "home": 87,
        "away": 55
      },
      {
        "label": "中场",
        "home": 78,
        "away": 58
      },
      {
        "label": "近期状态",
        "home": 91,
        "away": 62
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-24",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      65,
      24,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 摩洛哥 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 19
      },
      {
        "score": "2-0",
        "chance": 16
      },
      {
        "score": "0-0",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "摩洛哥 进攻指数 76，海地 防守指数 55，这是判断主队进球上限的关键。",
      "海地 进攻指数 61，摩洛哥 防守指数 87，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.62,
      "away": 0.51
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "cze-mex-5",
    "date": "2026-06-25",
    "time": "09:00",
    "group": "A组",
    "round": "Matchday 14",
    "venue": "Mexico City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-24-Czech Republic-Mexico",
    "home": {
      "name": "捷克",
      "code": "CZE",
      "color": "#11457e",
      "rank": 45,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "墨西哥",
      "code": "MEX",
      "color": "#006847",
      "rank": 18,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 74,
        "away": 76
      },
      {
        "label": "防守",
        "home": 77,
        "away": 75
      },
      {
        "label": "中场",
        "home": 76,
        "away": 76
      },
      {
        "label": "近期状态",
        "home": 72,
        "away": 78
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-24",
      "rawTime": "19:00 UTC-6"
    },
    "probabilities": [
      29,
      27,
      44
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 墨西哥 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "insights": [
      "捷克 进攻指数 74，墨西哥 防守指数 75，这是判断主队进球上限的关键。",
      "墨西哥 进攻指数 76，捷克 防守指数 77，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.06,
      "away": 1.37
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "rsa-kor-6",
    "date": "2026-06-25",
    "time": "09:00",
    "group": "A组",
    "round": "Matchday 14",
    "venue": "Monterrey (Guadalupe)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-24-South Africa-South Korea",
    "home": {
      "name": "南非",
      "code": "RSA",
      "color": "#007a4d",
      "rank": 90,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "韩国",
      "code": "KOR",
      "color": "#c8102e",
      "rank": 28,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 77
      },
      {
        "label": "防守",
        "home": 67,
        "away": 75
      },
      {
        "label": "中场",
        "home": 66,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 68,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-24",
      "rawTime": "19:00 UTC-6"
    },
    "probabilities": [
      11,
      23,
      66
    ],
    "confidence": 85,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 韩国 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 18
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "南非 进攻指数 66，韩国 防守指数 75，这是判断主队进球上限的关键。",
      "韩国 进攻指数 77，南非 防守指数 67，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.55,
      "away": 1.73
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "cuw-civ-29",
    "date": "2026-06-26",
    "time": "04:00",
    "group": "E组",
    "round": "Matchday 15",
    "venue": "Philadelphia",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-25-Curaçao-Ivory Coast",
    "home": {
      "name": "库拉索",
      "code": "CUW",
      "color": "#1f62c4",
      "rank": 82,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "科特迪瓦",
      "code": "CIV",
      "color": "#ef7d22",
      "rank": 35,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 57,
        "away": 78
      },
      {
        "label": "防守",
        "home": 54,
        "away": 72
      },
      {
        "label": "中场",
        "home": 59,
        "away": 74
      },
      {
        "label": "近期状态",
        "home": 60,
        "away": 79
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-25",
      "rawTime": "16:00 UTC-4"
    },
    "probabilities": [
      12,
      22,
      66
    ],
    "confidence": 87,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 科特迪瓦 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 18
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "库拉索 进攻指数 57，科特迪瓦 防守指数 72，这是判断主队进球上限的关键。",
      "科特迪瓦 进攻指数 78，库拉索 防守指数 54，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.56,
      "away": 1.76
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "ecu-ger-30",
    "date": "2026-06-26",
    "time": "04:00",
    "group": "E组",
    "round": "Matchday 15",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-25-Ecuador-Germany",
    "home": {
      "name": "厄瓜多尔",
      "code": "ECU",
      "color": "#ffd32a",
      "rank": 24,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "德国",
      "code": "GER",
      "color": "#e6e6e6",
      "rank": 9,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 77,
        "away": 86
      },
      {
        "label": "防守",
        "home": 84,
        "away": 79
      },
      {
        "label": "中场",
        "home": 80,
        "away": 83
      },
      {
        "label": "近期状态",
        "home": 83,
        "away": 81
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-25",
      "rawTime": "16:00 UTC-4"
    },
    "probabilities": [
      31,
      28,
      41
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 德国 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "厄瓜多尔 进攻指数 77，德国 防守指数 79，这是判断主队进球上限的关键。",
      "德国 进攻指数 86，厄瓜多尔 防守指数 84，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.1,
      "away": 1.28
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "jpn-swe-35",
    "date": "2026-06-26",
    "time": "07:00",
    "group": "F组",
    "round": "Matchday 15",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-25-Japan-Sweden",
    "home": {
      "name": "日本",
      "code": "JPN",
      "color": "#244a9b",
      "rank": 15,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "瑞典",
      "code": "SWE",
      "color": "#fecd00",
      "rank": 29,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 79,
        "away": 75
      },
      {
        "label": "防守",
        "home": 78,
        "away": 79
      },
      {
        "label": "中场",
        "home": 82,
        "away": 77
      },
      {
        "label": "近期状态",
        "home": 85,
        "away": 75
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-25",
      "rawTime": "18:00 UTC-5"
    },
    "probabilities": [
      53,
      27,
      20
    ],
    "confidence": 77,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 日本 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 16
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "日本 进攻指数 79，瑞典 防守指数 79，这是判断主队进球上限的关键。",
      "瑞典 进攻指数 75，日本 防守指数 78，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.43,
      "away": 0.78
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "tun-ned-36",
    "date": "2026-06-26",
    "time": "07:00",
    "group": "F组",
    "round": "Matchday 15",
    "venue": "Kansas City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-25-Tunisia-Netherlands",
    "home": {
      "name": "突尼斯",
      "code": "TUN",
      "color": "#e70013",
      "rank": 41,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "荷兰",
      "code": "NED",
      "color": "#f36c21",
      "rank": 7,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 70,
        "away": 85
      },
      {
        "label": "防守",
        "home": 78,
        "away": 84
      },
      {
        "label": "中场",
        "home": 72,
        "away": 87
      },
      {
        "label": "近期状态",
        "home": 74,
        "away": 83
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-25",
      "rawTime": "18:00 UTC-5"
    },
    "probabilities": [
      21,
      25,
      54
    ],
    "confidence": 79,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 荷兰 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-2",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "insights": [
      "突尼斯 进攻指数 70，荷兰 防守指数 84，这是判断主队进球上限的关键。",
      "荷兰 进攻指数 85，突尼斯 防守指数 78，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.86,
      "away": 1.58
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "tur-usa-23",
    "date": "2026-06-26",
    "time": "10:00",
    "group": "D组",
    "round": "Matchday 15",
    "venue": "Los Angeles (Inglewood)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-25-Turkey-USA",
    "home": {
      "name": "土耳其",
      "code": "TUR",
      "color": "#e32636",
      "rank": 27,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "美国",
      "code": "USA",
      "color": "#002868",
      "rank": 17,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 82,
        "away": 78
      },
      {
        "label": "防守",
        "home": 71,
        "away": 76
      },
      {
        "label": "中场",
        "home": 84,
        "away": 79
      },
      {
        "label": "近期状态",
        "home": 80,
        "away": 80
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-25",
      "rawTime": "19:00 UTC-7"
    },
    "probabilities": [
      32,
      28,
      40
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 美国 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "土耳其 进攻指数 82，美国 防守指数 76，这是判断主队进球上限的关键。",
      "美国 进攻指数 78，土耳其 防守指数 71，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.13,
      "away": 1.29
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "par-aus-24",
    "date": "2026-06-26",
    "time": "10:00",
    "group": "D组",
    "round": "Matchday 15",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-25-Paraguay-Australia",
    "home": {
      "name": "巴拉圭",
      "code": "PAR",
      "color": "#d52b1e",
      "rank": 39,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "澳大利亚",
      "code": "AUS",
      "color": "#f0b51d",
      "rank": 26,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 71,
        "away": 72
      },
      {
        "label": "防守",
        "home": 78,
        "away": 78
      },
      {
        "label": "中场",
        "home": 72,
        "away": 69
      },
      {
        "label": "近期状态",
        "home": 71,
        "away": 75
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-25",
      "rawTime": "19:00 UTC-7"
    },
    "probabilities": [
      38,
      28,
      34
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 巴拉圭 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "巴拉圭 进攻指数 71，澳大利亚 防守指数 78，这是判断主队进球上限的关键。",
      "澳大利亚 进攻指数 72，巴拉圭 防守指数 78，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.24,
      "away": 1.14
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "nor-fra-53",
    "date": "2026-06-27",
    "time": "03:00",
    "group": "I组",
    "round": "Matchday 16",
    "venue": "Boston (Foxborough)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-26-Norway-France",
    "home": {
      "name": "挪威",
      "code": "NOR",
      "color": "#ba0c2f",
      "rank": 30,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "法国",
      "code": "FRA",
      "color": "#002395",
      "rank": 2,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 84,
        "away": 94
      },
      {
        "label": "防守",
        "home": 73,
        "away": 87
      },
      {
        "label": "中场",
        "home": 78,
        "away": 89
      },
      {
        "label": "近期状态",
        "home": 76,
        "away": 88
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-26",
      "rawTime": "15:00 UTC-4"
    },
    "probabilities": [
      22,
      26,
      52
    ],
    "confidence": 80,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 法国 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-2",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "挪威 进攻指数 84，法国 防守指数 87，这是判断主队进球上限的关键。",
      "法国 进攻指数 94，挪威 防守指数 73，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.88,
      "away": 1.5
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "sen-irq-54",
    "date": "2026-06-27",
    "time": "03:00",
    "group": "I组",
    "round": "Matchday 16",
    "venue": "Toronto",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-26-Senegal-Iraq",
    "home": {
      "name": "塞内加尔",
      "code": "SEN",
      "color": "#00853f",
      "rank": 19,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "伊拉克",
      "code": "IRQ",
      "color": "#ce1126",
      "rank": 85,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 78,
        "away": 66
      },
      {
        "label": "防守",
        "home": 80,
        "away": 67
      },
      {
        "label": "中场",
        "home": 77,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 79,
        "away": 68
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-26",
      "rawTime": "15:00 UTC-4"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 82,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 塞内加尔 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 18
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "塞内加尔 进攻指数 78，伊拉克 防守指数 67，这是判断主队进球上限的关键。",
      "伊拉克 进攻指数 66，塞内加尔 防守指数 80，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.76,
      "away": 0.56
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "cpv-ksa-47",
    "date": "2026-06-27",
    "time": "08:00",
    "group": "H组",
    "round": "Matchday 16",
    "venue": "Houston",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-26-Cape Verde-Saudi Arabia",
    "home": {
      "name": "佛得角",
      "code": "CPV",
      "color": "#003893",
      "rank": 71,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "沙特阿拉伯",
      "code": "KSA",
      "color": "#006c35",
      "rank": 62,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 68,
        "away": 70
      },
      {
        "label": "防守",
        "home": 72,
        "away": 67
      },
      {
        "label": "中场",
        "home": 68,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 70,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-26",
      "rawTime": "19:00 UTC-5"
    },
    "probabilities": [
      37,
      28,
      35
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 佛得角 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "佛得角 进攻指数 68，沙特阿拉伯 防守指数 67，这是判断主队进球上限的关键。",
      "沙特阿拉伯 进攻指数 70，佛得角 防守指数 72，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.21,
      "away": 1.16
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "uru-esp-48",
    "date": "2026-06-27",
    "time": "08:00",
    "group": "H组",
    "round": "Matchday 16",
    "venue": "Guadalajara (Zapopan)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-26-Uruguay-Spain",
    "home": {
      "name": "乌拉圭",
      "code": "URU",
      "color": "#55b8e8",
      "rank": 12,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "西班牙",
      "code": "ESP",
      "color": "#c60b1e",
      "rank": 3,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 81,
        "away": 91
      },
      {
        "label": "防守",
        "home": 83,
        "away": 86
      },
      {
        "label": "中场",
        "home": 80,
        "away": 93
      },
      {
        "label": "近期状态",
        "home": 77,
        "away": 90
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-26",
      "rawTime": "18:00 UTC-6"
    },
    "probabilities": [
      26,
      27,
      47
    ],
    "confidence": 77,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 西班牙 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-2",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "insights": [
      "乌拉圭 进攻指数 81，西班牙 防守指数 86，这是判断主队进球上限的关键。",
      "西班牙 进攻指数 91，乌拉圭 防守指数 83，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.99,
      "away": 1.44
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "egy-irn-41",
    "date": "2026-06-27",
    "time": "11:00",
    "group": "G组",
    "round": "Matchday 16",
    "venue": "Seattle",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-26-Egypt-Iran",
    "home": {
      "name": "埃及",
      "code": "EGY",
      "color": "#ce1126",
      "rank": 31,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "伊朗",
      "code": "IRN",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 79,
        "away": 66
      },
      {
        "label": "防守",
        "home": 76,
        "away": 66
      },
      {
        "label": "中场",
        "home": 75,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-26",
      "rawTime": "20:00 UTC-7"
    },
    "probabilities": [
      68,
      21,
      11
    ],
    "confidence": 83,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 埃及 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 16
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "3-0",
        "chance": 9
      }
    ],
    "insights": [
      "埃及 进攻指数 79，伊朗 防守指数 66，这是判断主队进球上限的关键。",
      "伊朗 进攻指数 66，埃及 防守指数 76，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.86,
      "away": 0.59
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "nzl-bel-42",
    "date": "2026-06-27",
    "time": "11:00",
    "group": "G组",
    "round": "Matchday 16",
    "venue": "Vancouver",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-26-New Zealand-Belgium",
    "home": {
      "name": "新西兰",
      "code": "NZL",
      "color": "#000000",
      "rank": 88,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "比利时",
      "code": "BEL",
      "color": "#fdda24",
      "rank": 11,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 64,
        "away": 83
      },
      {
        "label": "防守",
        "home": 68,
        "away": 79
      },
      {
        "label": "中场",
        "home": 65,
        "away": 82
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 78
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-26",
      "rawTime": "20:00 UTC-7"
    },
    "probabilities": [
      11,
      22,
      67
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 比利时 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 17
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-3",
        "chance": 9
      }
    ],
    "insights": [
      "新西兰 进攻指数 64，比利时 防守指数 79，这是判断主队进球上限的关键。",
      "比利时 进攻指数 83，新西兰 防守指数 68，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.58,
      "away": 1.82
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "pan-eng-71",
    "date": "2026-06-28",
    "time": "05:00",
    "group": "L组",
    "round": "Matchday 17",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-27-Panama-England",
    "home": {
      "name": "巴拿马",
      "code": "PAN",
      "color": "#005293",
      "rank": 74,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "英格兰",
      "code": "ENG",
      "color": "#ffffff",
      "rank": 4,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 67,
        "away": 90
      },
      {
        "label": "防守",
        "home": 70,
        "away": 85
      },
      {
        "label": "中场",
        "home": 68,
        "away": 88
      },
      {
        "label": "近期状态",
        "home": 69,
        "away": 87
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-27",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      11,
      23,
      66
    ],
    "confidence": 88,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 英格兰 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 18
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "insights": [
      "巴拿马 进攻指数 67，英格兰 防守指数 85，这是判断主队进球上限的关键。",
      "英格兰 进攻指数 90，巴拿马 防守指数 70，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.55,
      "away": 1.75
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "cro-gha-72",
    "date": "2026-06-28",
    "time": "05:00",
    "group": "L组",
    "round": "Matchday 17",
    "venue": "Philadelphia",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-27-Croatia-Ghana",
    "home": {
      "name": "克罗地亚",
      "code": "CRO",
      "color": "#ff0000",
      "rank": 14,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "加纳",
      "code": "GHA",
      "color": "#ce1126",
      "rank": 76,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 78,
        "away": 73
      },
      {
        "label": "防守",
        "home": 82,
        "away": 69
      },
      {
        "label": "中场",
        "home": 85,
        "away": 71
      },
      {
        "label": "近期状态",
        "home": 76,
        "away": 67
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-27",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      67,
      22,
      11
    ],
    "confidence": 84,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 克罗地亚 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "克罗地亚 进攻指数 78，加纳 防守指数 69，这是判断主队进球上限的关键。",
      "加纳 进攻指数 73，克罗地亚 防守指数 82，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.8,
      "away": 0.57
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "col-por-65",
    "date": "2026-06-28",
    "time": "07:30",
    "group": "K组",
    "round": "Matchday 17",
    "venue": "Miami (Miami Gardens)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-27-Colombia-Portugal",
    "home": {
      "name": "哥伦比亚",
      "code": "COL",
      "color": "#ffcd00",
      "rank": 13,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "away": {
      "name": "葡萄牙",
      "code": "POR",
      "color": "#900020",
      "rank": 6,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 80,
        "away": 87
      },
      {
        "label": "防守",
        "home": 82,
        "away": 84
      },
      {
        "label": "中场",
        "home": 81,
        "away": 86
      },
      {
        "label": "近期状态",
        "home": 84,
        "away": 85
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-27",
      "rawTime": "19:30 UTC-4"
    },
    "probabilities": [
      32,
      29,
      39
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 葡萄牙 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "哥伦比亚 进攻指数 80，葡萄牙 防守指数 84，这是判断主队进球上限的关键。",
      "葡萄牙 进攻指数 87，哥伦比亚 防守指数 82，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.07,
      "away": 1.19
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "cod-uzb-66",
    "date": "2026-06-28",
    "time": "07:30",
    "group": "K组",
    "round": "Matchday 17",
    "venue": "Atlanta",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-27-DR Congo-Uzbekistan",
    "home": {
      "name": "刚果（金）",
      "code": "COD",
      "color": "#007fff",
      "rank": 77,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "乌兹别克斯坦",
      "code": "UZB",
      "color": "#1eb53a",
      "rank": 65,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 70,
        "away": 69
      },
      {
        "label": "防守",
        "home": 72,
        "away": 71
      },
      {
        "label": "中场",
        "home": 69,
        "away": 70
      },
      {
        "label": "近期状态",
        "home": 71,
        "away": 73
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-27",
      "rawTime": "19:30 UTC-4"
    },
    "probabilities": [
      37,
      28,
      35
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 刚果（金） 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "刚果（金） 进攻指数 70，乌兹别克斯坦 防守指数 71，这是判断主队进球上限的关键。",
      "乌兹别克斯坦 进攻指数 69，刚果（金） 防守指数 72，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.23,
      "away": 1.18
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "alg-aut-59",
    "date": "2026-06-28",
    "time": "10:00",
    "group": "J组",
    "round": "Matchday 17",
    "venue": "Kansas City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-27-Algeria-Austria",
    "home": {
      "name": "阿尔及利亚",
      "code": "ALG",
      "color": "#006633",
      "rank": 43,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "奥地利",
      "code": "AUT",
      "color": "#ed2939",
      "rank": 44,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 76,
        "away": 76
      },
      {
        "label": "防守",
        "home": 73,
        "away": 76
      },
      {
        "label": "中场",
        "home": 75,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 77,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-27",
      "rawTime": "21:00 UTC-5"
    },
    "probabilities": [
      36,
      27,
      37
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 奥地利 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "insights": [
      "阿尔及利亚 进攻指数 76，奥地利 防守指数 76，这是判断主队进球上限的关键。",
      "奥地利 进攻指数 76，阿尔及利亚 防守指数 73，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.26,
      "away": 1.27
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "jor-arg-60",
    "date": "2026-06-28",
    "time": "10:00",
    "group": "J组",
    "round": "Matchday 17",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-27-Jordan-Argentina",
    "home": {
      "name": "约旦",
      "code": "JOR",
      "color": "#007a3d",
      "rank": 68,
      "form": [
        "D",
        "W",
        "L",
        "W",
        "D"
      ]
    },
    "away": {
      "name": "阿根廷",
      "code": "ARG",
      "color": "#75aadb",
      "rank": 1,
      "form": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 67,
        "away": 92
      },
      {
        "label": "防守",
        "home": 68,
        "away": 88
      },
      {
        "label": "中场",
        "home": 67,
        "away": 91
      },
      {
        "label": "近期状态",
        "home": 72,
        "away": 89
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-27",
      "rawTime": "21:00 UTC-5"
    },
    "probabilities": [
      11,
      21,
      68
    ],
    "confidence": 87,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 阿根廷 方向，最可能比分为 0-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 16
      },
      {
        "score": "0-2",
        "chance": 15
      },
      {
        "score": "0-3",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "insights": [
      "约旦 进攻指数 67，阿根廷 防守指数 88，这是判断主队进球上限的关键。",
      "阿根廷 进攻指数 92，约旦 防守指数 68，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.61,
      "away": 1.92
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "2a-2b-73",
    "date": "2026-06-29",
    "time": "03:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Los Angeles (Inglewood)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-28-2A-2B",
    "home": {
      "name": "2A",
      "code": "2A",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2B",
      "code": "2B",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-28",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      35,
      28,
      37
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2B 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "2A 进攻指数 66，2B 防守指数 66，这是判断主队进球上限的关键。",
      "2B 进攻指数 66，2A 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.14,
      "away": 1.18
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1c-2f-76",
    "date": "2026-06-30",
    "time": "01:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Houston",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-29-1C-2F",
    "home": {
      "name": "1C",
      "code": "1C",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2F",
      "code": "2F",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-29",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      40,
      28,
      32
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1C 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "1C 进攻指数 66，2F 防守指数 66，这是判断主队进球上限的关键。",
      "2F 进攻指数 66，1C 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.26,
      "away": 1.09
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1e-3a-74",
    "date": "2026-06-30",
    "time": "04:30",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Boston (Foxborough)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-29-1E-3A/B/C/D/F",
    "home": {
      "name": "1E",
      "code": "1E",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3A/B/C/D/F",
      "code": "3A/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-29",
      "rawTime": "16:30 UTC-4"
    },
    "probabilities": [
      40,
      29,
      31
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1E 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "1E 进攻指数 66，3A/B/C/D/F 防守指数 66，这是判断主队进球上限的关键。",
      "3A/B/C/D/F 进攻指数 66，1E 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.22,
      "away": 1.04
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1f-2c-75",
    "date": "2026-06-30",
    "time": "09:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Monterrey (Guadalupe)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-29-1F-2C",
    "home": {
      "name": "1F",
      "code": "1F",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2C",
      "code": "2C",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-29",
      "rawTime": "19:00 UTC-6"
    },
    "probabilities": [
      38,
      27,
      35
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1F 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 8
      }
    ],
    "insights": [
      "1F 进攻指数 66，2C 防守指数 66，这是判断主队进球上限的关键。",
      "2C 进攻指数 66，1F 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.3,
      "away": 1.22
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "2e-2i-78",
    "date": "2026-07-01",
    "time": "01:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-30-2E-2I",
    "home": {
      "name": "2E",
      "code": "2E",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2I",
      "code": "2I",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-30",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      41,
      28,
      31
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2E 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "2E 进攻指数 66，2I 防守指数 66，这是判断主队进球上限的关键。",
      "2I 进攻指数 66，2E 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.24,
      "away": 1.04
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1i-3c-77",
    "date": "2026-07-01",
    "time": "05:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-30-1I-3C/D/F/G/H",
    "home": {
      "name": "1I",
      "code": "1I",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3C/D/F/G/H",
      "code": "3C/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-30",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      38,
      28,
      34
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1I 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "1I 进攻指数 66，3C/D/F/G/H 防守指数 66，这是判断主队进球上限的关键。",
      "3C/D/F/G/H 进攻指数 66，1I 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.26,
      "away": 1.16
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1a-3c-79",
    "date": "2026-07-01",
    "time": "09:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Mexico City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-06-30-1A-3C/E/F/H/I",
    "home": {
      "name": "1A",
      "code": "1A",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3C/E/F/H/I",
      "code": "3C/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-06-30",
      "rawTime": "19:00 UTC-6"
    },
    "probabilities": [
      43,
      28,
      29
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1A 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "0-1",
        "chance": 10
      }
    ],
    "insights": [
      "1A 进攻指数 66，3C/E/F/H/I 防守指数 66，这是判断主队进球上限的关键。",
      "3C/E/F/H/I 进攻指数 66，1A 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.28,
      "away": 1
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1l-3e-80",
    "date": "2026-07-02",
    "time": "00:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Atlanta",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-01-1L-3E/H/I/J/K",
    "home": {
      "name": "1L",
      "code": "1L",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3E/H/I/J/K",
      "code": "3E/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-01",
      "rawTime": "12:00 UTC-4"
    },
    "probabilities": [
      35,
      28,
      37
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 3E/H/I/J/K 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "1L 进攻指数 66，3E/H/I/J/K 防守指数 66，这是判断主队进球上限的关键。",
      "3E/H/I/J/K 进攻指数 66，1L 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.14,
      "away": 1.18
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1g-3a-82",
    "date": "2026-07-02",
    "time": "04:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Seattle",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-01-1G-3A/E/H/I/J",
    "home": {
      "name": "1G",
      "code": "1G",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3A/E/H/I/J",
      "code": "3A/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-01",
      "rawTime": "13:00 UTC-7"
    },
    "probabilities": [
      42,
      28,
      30
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1G 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "1G 进攻指数 66，3A/E/H/I/J 防守指数 66，这是判断主队进球上限的关键。",
      "3A/E/H/I/J 进攻指数 66，1G 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.32,
      "away": 1.05
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1d-3b-81",
    "date": "2026-07-02",
    "time": "08:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-01-1D-3B/E/F/I/J",
    "home": {
      "name": "1D",
      "code": "1D",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3B/E/F/I/J",
      "code": "3B/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-01",
      "rawTime": "17:00 UTC-7"
    },
    "probabilities": [
      39,
      28,
      33
    ],
    "confidence": 67,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 1D 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "1D 进攻指数 66，3B/E/F/I/J 防守指数 66，这是判断主队进球上限的关键。",
      "3B/E/F/I/J 进攻指数 66，1D 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.25,
      "away": 1.13
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1h-2j-84",
    "date": "2026-07-03",
    "time": "03:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Los Angeles (Inglewood)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-02-1H-2J",
    "home": {
      "name": "1H",
      "code": "1H",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2J",
      "code": "2J",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-02",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      39,
      28,
      33
    ],
    "confidence": 67,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 1H 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "1H 进攻指数 66，2J 防守指数 66，这是判断主队进球上限的关键。",
      "2J 进攻指数 66，1H 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.27,
      "away": 1.14
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "2k-2l-83",
    "date": "2026-07-03",
    "time": "07:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Toronto",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-02-2K-2L",
    "home": {
      "name": "2K",
      "code": "2K",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2L",
      "code": "2L",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-02",
      "rawTime": "19:00 UTC-4"
    },
    "probabilities": [
      43,
      27,
      30
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2K 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "insights": [
      "2K 进攻指数 66，2L 防守指数 66，这是判断主队进球上限的关键。",
      "2L 进攻指数 66，2K 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.36,
      "away": 1.11
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1b-3e-85",
    "date": "2026-07-03",
    "time": "11:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Vancouver",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-02-1B-3E/F/G/I/J",
    "home": {
      "name": "1B",
      "code": "1B",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3E/F/G/I/J",
      "code": "3E/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-02",
      "rawTime": "20:00 UTC-7"
    },
    "probabilities": [
      36,
      29,
      35
    ],
    "confidence": 67,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 1B 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "1B 进攻指数 66，3E/F/G/I/J 防守指数 66，这是判断主队进球上限的关键。",
      "3E/F/G/I/J 进攻指数 66，1B 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.1,
      "away": 1.08
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "2d-2g-88",
    "date": "2026-07-04",
    "time": "02:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-03-2D-2G",
    "home": {
      "name": "2D",
      "code": "2D",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2G",
      "code": "2G",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-03",
      "rawTime": "13:00 UTC-5"
    },
    "probabilities": [
      42,
      29,
      29
    ],
    "confidence": 69,
    "tag": "观察",
    "summary": "外部赛程数据已更新。本场模型倾向 2D 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      }
    ],
    "insights": [
      "2D 进攻指数 66，2G 防守指数 66，这是判断主队进球上限的关键。",
      "2G 进攻指数 66，2D 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.24,
      "away": 0.99
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1j-2h-86",
    "date": "2026-07-04",
    "time": "06:00",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Miami (Miami Gardens)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-03-1J-2H",
    "home": {
      "name": "1J",
      "code": "1J",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "2H",
      "code": "2H",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-03",
      "rawTime": "18:00 UTC-4"
    },
    "probabilities": [
      40,
      29,
      31
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1J 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "1J 进攻指数 66，2H 防守指数 66，这是判断主队进球上限的关键。",
      "2H 进攻指数 66，1J 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.21,
      "away": 1.03
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1k-3d-87",
    "date": "2026-07-04",
    "time": "09:30",
    "group": "Round of 32",
    "round": "Round of 32",
    "venue": "Kansas City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-03-1K-3D/E/I/J/L",
    "home": {
      "name": "1K",
      "code": "1K",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "3D/E/I/J/L",
      "code": "3D/",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-03",
      "rawTime": "20:30 UTC-5"
    },
    "probabilities": [
      40,
      28,
      32
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1K 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "1K 进攻指数 66，3D/E/I/J/L 防守指数 66，这是判断主队进球上限的关键。",
      "3D/E/I/J/L 进攻指数 66，1K 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.27,
      "away": 1.1
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w73-w75-90",
    "date": "2026-07-05",
    "time": "01:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Houston",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-04-W73-W75",
    "home": {
      "name": "W73",
      "code": "W73",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W75",
      "code": "W75",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-04",
      "rawTime": "12:00 UTC-5"
    },
    "probabilities": [
      38,
      28,
      34
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W73 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "W73 进攻指数 66，W75 防守指数 66，这是判断主队进球上限的关键。",
      "W75 进攻指数 66，W73 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.2,
      "away": 1.13
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w74-w77-89",
    "date": "2026-07-05",
    "time": "05:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Philadelphia",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-04-W74-W77",
    "home": {
      "name": "W74",
      "code": "W74",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W77",
      "code": "W77",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-04",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      38,
      29,
      33
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W74 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "W74 进攻指数 66，W77 防守指数 66，这是判断主队进球上限的关键。",
      "W77 进攻指数 66，W74 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.15,
      "away": 1.06
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w76-w78-91",
    "date": "2026-07-06",
    "time": "04:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-05-W76-W78",
    "home": {
      "name": "W76",
      "code": "W76",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W78",
      "code": "W78",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-05",
      "rawTime": "16:00 UTC-4"
    },
    "probabilities": [
      36,
      28,
      36
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W76 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "W76 进攻指数 66，W78 防守指数 66，这是判断主队进球上限的关键。",
      "W78 进攻指数 66，W76 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.22,
      "away": 1.21
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w79-w80-92",
    "date": "2026-07-06",
    "time": "08:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Mexico City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-05-W79-W80",
    "home": {
      "name": "W79",
      "code": "W79",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W80",
      "code": "W80",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-05",
      "rawTime": "18:00 UTC-6"
    },
    "probabilities": [
      41,
      28,
      31
    ],
    "confidence": 69,
    "tag": "观察",
    "summary": "外部赛程数据已更新。本场模型倾向 W79 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "W79 进攻指数 66，W80 防守指数 66，这是判断主队进球上限的关键。",
      "W80 进攻指数 66，W79 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.27,
      "away": 1.06
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w83-w84-93",
    "date": "2026-07-07",
    "time": "03:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-06-W83-W84",
    "home": {
      "name": "W83",
      "code": "W83",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W84",
      "code": "W84",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-06",
      "rawTime": "14:00 UTC-5"
    },
    "probabilities": [
      40,
      27,
      33
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W83 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 9
      }
    ],
    "insights": [
      "W83 进攻指数 66，W84 防守指数 66，这是判断主队进球上限的关键。",
      "W84 进攻指数 66，W83 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.29,
      "away": 1.14
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w81-w82-94",
    "date": "2026-07-07",
    "time": "08:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Seattle",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-06-W81-W82",
    "home": {
      "name": "W81",
      "code": "W81",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W82",
      "code": "W82",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-06",
      "rawTime": "17:00 UTC-7"
    },
    "probabilities": [
      39,
      28,
      33
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W81 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "W81 进攻指数 66，W82 防守指数 66，这是判断主队进球上限的关键。",
      "W82 进攻指数 66，W81 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.2,
      "away": 1.1
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w86-w88-95",
    "date": "2026-07-08",
    "time": "00:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Atlanta",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-07-W86-W88",
    "home": {
      "name": "W86",
      "code": "W86",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W88",
      "code": "W88",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-07",
      "rawTime": "12:00 UTC-4"
    },
    "probabilities": [
      35,
      29,
      36
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W88 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "insights": [
      "W86 进攻指数 66，W88 防守指数 66，这是判断主队进球上限的关键。",
      "W88 进攻指数 66，W86 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.09,
      "away": 1.1
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w85-w87-96",
    "date": "2026-07-08",
    "time": "04:00",
    "group": "Round of 16",
    "round": "Round of 16",
    "venue": "Vancouver",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-07-W85-W87",
    "home": {
      "name": "W85",
      "code": "W85",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W87",
      "code": "W87",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-07",
      "rawTime": "13:00 UTC-7"
    },
    "probabilities": [
      43,
      28,
      29
    ],
    "confidence": 69,
    "tag": "观察",
    "summary": "外部赛程数据已更新。本场模型倾向 W85 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "0-1",
        "chance": 10
      }
    ],
    "insights": [
      "W85 进攻指数 66，W87 防守指数 66，这是判断主队进球上限的关键。",
      "W87 进攻指数 66，W85 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.29,
      "away": 1
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w89-w90-97",
    "date": "2026-07-10",
    "time": "04:00",
    "group": "Quarter-final",
    "round": "Quarter-final",
    "venue": "Boston (Foxborough)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-09-W89-W90",
    "home": {
      "name": "W89",
      "code": "W89",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W90",
      "code": "W90",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-09",
      "rawTime": "16:00 UTC-4"
    },
    "probabilities": [
      36,
      27,
      37
    ],
    "confidence": 67,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W90 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 8
      }
    ],
    "insights": [
      "W89 进攻指数 66，W90 防守指数 66，这是判断主队进球上限的关键。",
      "W90 进攻指数 66，W89 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.21,
      "away": 1.26
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w93-w94-98",
    "date": "2026-07-11",
    "time": "03:00",
    "group": "Quarter-final",
    "round": "Quarter-final",
    "venue": "Los Angeles (Inglewood)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-10-W93-W94",
    "home": {
      "name": "W93",
      "code": "W93",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W94",
      "code": "W94",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-10",
      "rawTime": "12:00 UTC-7"
    },
    "probabilities": [
      43,
      28,
      29
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W93 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "W93 进攻指数 66，W94 防守指数 66，这是判断主队进球上限的关键。",
      "W94 进攻指数 66，W93 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.32,
      "away": 1.02
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w91-w92-99",
    "date": "2026-07-12",
    "time": "05:00",
    "group": "Quarter-final",
    "round": "Quarter-final",
    "venue": "Miami (Miami Gardens)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-11-W91-W92",
    "home": {
      "name": "W91",
      "code": "W91",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W92",
      "code": "W92",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-11",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      36,
      27,
      37
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W92 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 8
      }
    ],
    "insights": [
      "W91 进攻指数 66，W92 防守指数 66，这是判断主队进球上限的关键。",
      "W92 进攻指数 66，W91 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.25,
      "away": 1.26
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w95-w96-100",
    "date": "2026-07-12",
    "time": "09:00",
    "group": "Quarter-final",
    "round": "Quarter-final",
    "venue": "Kansas City",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-11-W95-W96",
    "home": {
      "name": "W95",
      "code": "W95",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W96",
      "code": "W96",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-11",
      "rawTime": "20:00 UTC-5"
    },
    "probabilities": [
      36,
      28,
      36
    ],
    "confidence": 67,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W95 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "W95 进攻指数 66，W96 防守指数 66，这是判断主队进球上限的关键。",
      "W96 进攻指数 66，W95 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.15,
      "away": 1.16
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w97-w98-101",
    "date": "2026-07-15",
    "time": "03:00",
    "group": "Semi-final",
    "round": "Semi-final",
    "venue": "Dallas (Arlington)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-14-W97-W98",
    "home": {
      "name": "W97",
      "code": "W97",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W98",
      "code": "W98",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-14",
      "rawTime": "14:00 UTC-5"
    },
    "probabilities": [
      42,
      29,
      29
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W97 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      }
    ],
    "insights": [
      "W97 进攻指数 66，W98 防守指数 66，这是判断主队进球上限的关键。",
      "W98 进攻指数 66，W97 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.24,
      "away": 0.98
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w99-w10-102",
    "date": "2026-07-16",
    "time": "03:00",
    "group": "Semi-final",
    "round": "Semi-final",
    "venue": "Atlanta",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-15-W99-W100",
    "home": {
      "name": "W99",
      "code": "W99",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W100",
      "code": "W10",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-15",
      "rawTime": "15:00 UTC-4"
    },
    "probabilities": [
      38,
      28,
      34
    ],
    "confidence": 68,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W99 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 10
      }
    ],
    "insights": [
      "W99 进攻指数 66，W100 防守指数 66，这是判断主队进球上限的关键。",
      "W100 进攻指数 66，W99 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.19,
      "away": 1.1
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "l10-l10-103",
    "date": "2026-07-19",
    "time": "05:00",
    "group": "Match for third place",
    "round": "Match for third place",
    "venue": "Miami (Miami Gardens)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-18-L101-L102",
    "home": {
      "name": "L101",
      "code": "L10",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "L102",
      "code": "L10",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-18",
      "rawTime": "17:00 UTC-4"
    },
    "probabilities": [
      42,
      29,
      29
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 L101 方向，最可能比分为 1-0。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 11
      }
    ],
    "insights": [
      "L101 进攻指数 66，L102 防守指数 66，这是判断主队进球上限的关键。",
      "L102 进攻指数 66，L101 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.23,
      "away": 0.96
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w10-w10-104",
    "date": "2026-07-20",
    "time": "03:00",
    "group": "Final",
    "round": "Final",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "scheduled",
    "actualScore": "",
    "externalSourceId": "2026-07-19-W101-W102",
    "home": {
      "name": "W101",
      "code": "W10",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "away": {
      "name": "W102",
      "code": "W10",
      "color": "#64748b",
      "rank": 78,
      "form": [
        "L",
        "D",
        "W",
        "L",
        "D"
      ]
    },
    "metrics": [
      {
        "label": "进攻",
        "home": 66,
        "away": 66
      },
      {
        "label": "防守",
        "home": 66,
        "away": 66
      },
      {
        "label": "中场",
        "home": 66,
        "away": 66
      },
      {
        "label": "近期状态",
        "home": 66,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T10:41:09.834Z",
      "rawDate": "2026-07-19",
      "rawTime": "15:00 UTC-4"
    },
    "probabilities": [
      38,
      27,
      35
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W101 方向，最可能比分为 1-1。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "0-0",
        "chance": 8
      }
    ],
    "insights": [
      "W101 进攻指数 66，W102 防守指数 66，这是判断主队进球上限的关键。",
      "W102 进攻指数 66，W101 防守指数 66，客队反击和转换质量需要重点观察。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.28,
      "away": 1.21
    },
    "analysisUpdated": "2026-06-19"
  }
];
