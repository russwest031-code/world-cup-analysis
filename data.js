window.ANALYSIS_META = {
  "updatedAt": "2026-06-19T11:17:25.251Z",
  "runDate": "2026-06-19",
  "source": "openfootball-worldcup-json",
  "externalFetchedAt": "2026-06-19T11:17:25.251Z",
  "externalMatchCount": 104,
  "model": "rank-form-metrics-poisson-v1",
  "rulesModel": "wc2026-group-qualification-v1",
  "marketSignals": "missing-key",
  "expertSignals": "connected",
  "refreshCadence": "daily",
  "refreshTimeLocal": "15:00",
  "refreshTimeZone": "Asia/Shanghai",
  "oddsProvider": "The Odds API",
  "oddsSportKey": "soccer_fifa_world_cup",
  "oddsEventCount": 0,
  "expertProvider": "public-rss",
  "expertArticleCount": 36
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-11",
      "rawTime": "13:00 UTC-6",
      "homeName": "Mexico",
      "awayName": "South Africa"
    },
    "probabilities": [
      66,
      23,
      11
    ],
    "confidence": 85,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.5,
        "avgGoalsAgainst": 0,
        "bigWinRate": 50,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0.5,
        "avgGoalsAgainst": 1.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Mexico rejoice after second World Cup win in 2026....",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113986/mexico-south-korea-world-cup-reaction-analysis",
          "pubDate": "Fri, 19 Jun 2026 04:42:08 EST"
        },
        {
          "title": "World Cup's best viral moments: Mexico, Scotland d...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114224/world-cup-best-viral-moments-social-media-us-mexico-canada",
          "pubDate": "Fri, 19 Jun 2026 05:34:44 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "墨西哥属于均衡型，场均进球参考值 1.5，大胜倾向 50%。南非属于均衡型，场均进球参考值 0.5，大胜倾向 0%。",
      "墨西哥 进攻指数 76，南非 防守指数 67；南非 进攻指数 66，墨西哥 防守指数 75。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.74,
      "away": 0.55
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-11",
      "rawTime": "20:00 UTC-6",
      "homeName": "South Korea",
      "awayName": "Czech Republic"
    },
    "probabilities": [
      48,
      27,
      25
    ],
    "confidence": 73,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
        "score": "0-0",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "韩国属于均衡型，场均进球参考值 1，大胜倾向 0%。捷克属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "韩国 进攻指数 77，捷克 防守指数 77；捷克 进攻指数 74，韩国 防守指数 75。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.43,
      "away": 0.96
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-12",
      "rawTime": "15:00 UTC-4",
      "homeName": "Canada",
      "awayName": "Bosnia & Herzegovina"
    },
    "probabilities": [
      55,
      23,
      22
    ],
    "confidence": 75,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "2-0",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 3.5,
        "avgGoalsAgainst": 0.5,
        "bigWinRate": 50,
        "cleanSheetRate": 50,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 2.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        },
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "加拿大属于均衡型，场均进球参考值 3.5，大胜倾向 50%。波黑属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "加拿大 进攻指数 74，波黑 防守指数 68；波黑 进攻指数 72，加拿大 防守指数 70。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.8,
      "away": 1.04
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-12",
      "rawTime": "18:00 UTC-7",
      "homeName": "USA",
      "awayName": "Paraguay"
    },
    "probabilities": [
      63,
      20,
      17
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 4-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "2-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "1-0",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "美国属于均衡型，场均进球参考值 4，大胜倾向 100%。巴拉圭属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "美国 进攻指数 78，巴拉圭 防守指数 78；巴拉圭 进攻指数 71，美国 防守指数 76。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 2.13,
      "away": 1
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-13",
      "rawTime": "12:00 UTC-7",
      "homeName": "Qatar",
      "awayName": "Switzerland"
    },
    "probabilities": [
      16,
      23,
      61
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 13
      },
      {
        "score": "0-2",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0.5,
        "avgGoalsAgainst": 3.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2.5,
        "avgGoalsAgainst": 1,
        "bigWinRate": 50,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        },
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "卡塔尔属于均衡型，场均进球参考值 0.5，大胜倾向 0%。瑞士属于均衡型，场均进球参考值 2.5，大胜倾向 50%。",
      "卡塔尔 进攻指数 69，瑞士 防守指数 81；瑞士 进攻指数 74，卡塔尔 防守指数 66。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.82,
      "away": 1.84
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-13",
      "rawTime": "18:00 UTC-4",
      "homeName": "Brazil",
      "awayName": "Morocco"
    },
    "probabilities": [
      37,
      28,
      35
    ],
    "confidence": 69,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "防守控制型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        },
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "巴西属于主动压迫型，场均进球参考值 1，大胜倾向 0%。摩洛哥属于防守控制型，场均进球参考值 1，大胜倾向 0%。",
      "巴西 进攻指数 88，摩洛哥 防守指数 87；摩洛哥 进攻指数 76，巴西 防守指数 81。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.23,
      "away": 1.19
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-13",
      "rawTime": "21:00 UTC-4",
      "homeName": "Haiti",
      "awayName": "Scotland"
    },
    "probabilities": [
      11,
      23,
      66
    ],
    "confidence": 83,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 0-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 18
      },
      {
        "score": "0-2",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        },
        {
          "title": "Full hearts, empty kegs, can't lose: Scotland's Tartan Army takes over World Cup",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49096885/scotland-tartan-army-world-cup-boston-haiti-red-sox-fenway-park",
          "pubDate": "Thu, 18 Jun 2026 11:35:41 EST"
        },
        {
          "title": "World Cup's best viral moments: Mexico, Scotland d...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114224/world-cup-best-viral-moments-social-media-us-mexico-canada",
          "pubDate": "Fri, 19 Jun 2026 05:34:44 EST"
        },
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "海地属于均衡型，场均进球参考值 0，大胜倾向 0%。苏格兰属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "海地 进攻指数 61，苏格兰 防守指数 79；苏格兰 进攻指数 76，海地 防守指数 55。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.54,
      "away": 1.72
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-13",
      "rawTime": "21:00 UTC-7",
      "homeName": "Australia",
      "awayName": "Turkey"
    },
    "probabilities": [
      30,
      26,
      44
    ],
    "confidence": 75,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 0,
        "bigWinRate": 100,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "开放进攻型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Opposition scouting: How the USMNT can counter Aus...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49110484/opposition-scouting-how-usmnt-counter-australia-threat-world-cup-group-d-second-match",
          "pubDate": "Fri, 19 Jun 2026 04:49:38 EST"
        },
        {
          "title": "Opposition scouting: How the USMNT can counter Aus...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49110484/opposition-scouting-how-usmnt-counter-australia-threat-world-cup-group-d-second-match",
          "pubDate": "Fri, 19 Jun 2026 04:49:38 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "澳大利亚属于均衡型，场均进球参考值 2，大胜倾向 100%。土耳其属于开放进攻型，场均进球参考值 0，大胜倾向 0%。",
      "澳大利亚 进攻指数 72，土耳其 防守指数 71；土耳其 进攻指数 82，澳大利亚 防守指数 78。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.18,
      "away": 1.49
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-14",
      "rawTime": "12:00 UTC-5",
      "homeName": "Germany",
      "awayName": "Curaçao"
    },
    "probabilities": [
      76,
      14,
      10
    ],
    "confidence": 89,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 7-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 10
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "3-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 7,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 7,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "德国属于主动压迫型，场均进球参考值 7，大胜倾向 100%。库拉索属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "德国 进攻指数 86，库拉索 防守指数 54；库拉索 进攻指数 57，德国 防守指数 79。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 2.92,
      "away": 0.92
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-14",
      "rawTime": "15:00 UTC-5",
      "homeName": "Netherlands",
      "awayName": "Japan"
    },
    "probabilities": [
      45,
      25,
      30
    ],
    "confidence": 74,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-2。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "2-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "荷兰属于主动压迫型，场均进球参考值 2，大胜倾向 0%。日本属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "荷兰 进攻指数 85，日本 防守指数 78；日本 进攻指数 79，荷兰 防守指数 84。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.59,
      "away": 1.26
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-14",
      "rawTime": "19:00 UTC-4",
      "homeName": "Ivory Coast",
      "awayName": "Ecuador"
    },
    "probabilities": [
      36,
      29,
      35
    ],
    "confidence": 68,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "科特迪瓦属于均衡型，场均进球参考值 1，大胜倾向 0%。厄瓜多尔属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "科特迪瓦 进攻指数 78，厄瓜多尔 防守指数 84；厄瓜多尔 进攻指数 77，科特迪瓦 防守指数 72。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.1,
      "away": 1.08
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-14",
      "rawTime": "20:00 UTC-6",
      "homeName": "Sweden",
      "awayName": "Tunisia"
    },
    "probabilities": [
      48,
      24,
      28
    ],
    "confidence": 74,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 5-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "2-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 5,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "瑞典属于均衡型，场均进球参考值 5，大胜倾向 100%。突尼斯属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "瑞典 进攻指数 75，突尼斯 防守指数 78；突尼斯 进攻指数 70，瑞典 防守指数 79。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.76,
      "away": 1.26
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-15",
      "rawTime": "12:00 UTC-4",
      "homeName": "Spain",
      "awayName": "Cape Verde"
    },
    "probabilities": [
      65,
      24,
      11
    ],
    "confidence": 85,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 0-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "西班牙属于主动压迫型，场均进球参考值 0，大胜倾向 0%。佛得角属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "西班牙 进攻指数 91，佛得角 防守指数 72；佛得角 进攻指数 68，西班牙 防守指数 86。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.62,
      "away": 0.51
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-15",
      "rawTime": "12:00 UTC-7",
      "homeName": "Belgium",
      "awayName": "Egypt"
    },
    "probabilities": [
      52,
      27,
      21
    ],
    "confidence": 74,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "比利时属于主动压迫型，场均进球参考值 1，大胜倾向 0%。埃及属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "比利时 进攻指数 83，埃及 防守指数 76；埃及 进攻指数 79，比利时 防守指数 79。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.45,
      "away": 0.81
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
      "rank": 52,
      "form": [
        "L",
        "D",
        "W",
        "L",
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
        "home": 68,
        "away": 81
      },
      {
        "label": "防守",
        "home": 68,
        "away": 83
      },
      {
        "label": "中场",
        "home": 69,
        "away": 80
      },
      {
        "label": "近期状态",
        "home": 67,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-15",
      "rawTime": "18:00 UTC-4",
      "homeName": "Saudi Arabia",
      "awayName": "Uruguay"
    },
    "probabilities": [
      11,
      22,
      67
    ],
    "confidence": 82,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
        "score": "0-0",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "沙特阿拉伯属于均衡型，场均进球参考值 1，大胜倾向 0%。乌拉圭属于主动压迫型，场均进球参考值 1，大胜倾向 0%。",
      "沙特阿拉伯 进攻指数 68，乌拉圭 防守指数 83；乌拉圭 进攻指数 81，沙特阿拉伯 防守指数 68。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.56,
      "away": 1.78
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
      "color": "#239f40",
      "rank": 20,
      "form": [
        "W",
        "D",
        "W",
        "W",
        "L"
      ]
    },
    "away": {
      "name": "新西兰",
      "code": "NZL",
      "color": "#000000",
      "rank": 68,
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
        "home": 75,
        "away": 64
      },
      {
        "label": "防守",
        "home": 79,
        "away": 68
      },
      {
        "label": "中场",
        "home": 76,
        "away": 65
      },
      {
        "label": "近期状态",
        "home": 77,
        "away": 66
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-15",
      "rawTime": "18:00 UTC-7",
      "homeName": "Iran",
      "awayName": "New Zealand"
    },
    "probabilities": [
      70,
      19,
      11
    ],
    "confidence": 83,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 2-2。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 14
      },
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "伊朗属于均衡型，场均进球参考值 2，大胜倾向 0%。新西兰属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "伊朗 进攻指数 75，新西兰 防守指数 68；新西兰 进攻指数 64，伊朗 防守指数 79。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 2.06,
      "away": 0.65
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-16",
      "rawTime": "15:00 UTC-4",
      "homeName": "France",
      "awayName": "Senegal"
    },
    "probabilities": [
      60,
      22,
      18
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 3-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "法国属于主动压迫型，场均进球参考值 3，大胜倾向 100%。塞内加尔属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "法国 进攻指数 94，塞内加尔 防守指数 80；塞内加尔 进攻指数 78，法国 防守指数 87。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.92,
      "away": 0.93
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
      "rank": 57,
      "form": [
        "D",
        "W",
        "L",
        "W",
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
        "home": 68,
        "away": 84
      },
      {
        "label": "防守",
        "home": 68,
        "away": 73
      },
      {
        "label": "中场",
        "home": 68,
        "away": 78
      },
      {
        "label": "近期状态",
        "home": 70,
        "away": 76
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-16",
      "rawTime": "18:00 UTC-4",
      "homeName": "Iraq",
      "awayName": "Norway"
    },
    "probabilities": [
      25,
      22,
      53
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-4。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 10
      },
      {
        "score": "0-1",
        "chance": 8
      },
      {
        "score": "0-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "开放进攻型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "伊拉克属于均衡型，场均进球参考值 1，大胜倾向 0%。挪威属于开放进攻型，场均进球参考值 4，大胜倾向 100%。",
      "伊拉克 进攻指数 68，挪威 防守指数 73；挪威 进攻指数 84，伊拉克 防守指数 68。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.24,
      "away": 1.96
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-16",
      "rawTime": "20:00 UTC-5",
      "homeName": "Argentina",
      "awayName": "Algeria"
    },
    "probabilities": [
      69,
      20,
      11
    ],
    "confidence": 85,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 3-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 15
      },
      {
        "score": "1-0",
        "chance": 15
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 0,
        "bigWinRate": 100,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "阿根廷属于主动压迫型，场均进球参考值 3，大胜倾向 100%。阿尔及利亚属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "阿根廷 进攻指数 92，阿尔及利亚 防守指数 73；阿尔及利亚 进攻指数 76，阿根廷 防守指数 88。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 2,
      "away": 0.63
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
      "rank": 66,
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-16",
      "rawTime": "21:00 UTC-7",
      "homeName": "Austria",
      "awayName": "Jordan"
    },
    "probabilities": [
      61,
      21,
      18
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 3-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "奥地利属于均衡型，场均进球参考值 3，大胜倾向 100%。约旦属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "奥地利 进攻指数 76，约旦 防守指数 68；约旦 进攻指数 67，奥地利 防守指数 76。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.99,
      "away": 0.96
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-17",
      "rawTime": "12:00 UTC-5",
      "homeName": "Portugal",
      "awayName": "DR Congo"
    },
    "probabilities": [
      65,
      24,
      11
    ],
    "confidence": 84,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Portugal have a Ronaldo problem (again)",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49098603/portugal-cristiano-ronaldo-problem-congo-dr-roberto-martinez-fifa-world-cup-analysis",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Portugal have a Ronaldo problem (again)",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49098603/portugal-cristiano-ronaldo-problem-congo-dr-roberto-martinez-fifa-world-cup-analysis",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "葡萄牙属于主动压迫型，场均进球参考值 1，大胜倾向 0%。刚果（金）属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "葡萄牙 进攻指数 87，刚果（金） 防守指数 72；刚果（金） 进攻指数 70，葡萄牙 防守指数 84。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.64,
      "away": 0.52
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-17",
      "rawTime": "15:00 UTC-5",
      "homeName": "England",
      "awayName": "Croatia"
    },
    "probabilities": [
      59,
      21,
      20
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 4-2。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      },
      {
        "score": "2-0",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 2,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Every team's odds to win the World Cup: England's ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/espn/betting/story/_/id/48386952/espn-soccer-futbol-world-cup-betting-odds-championship-groups",
          "pubDate": "Thu, 18 Jun 2026 15:12:39 EST"
        },
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Every team's odds to win the World Cup: England's ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/espn/betting/story/_/id/48386952/espn-soccer-futbol-world-cup-betting-odds-championship-groups",
          "pubDate": "Thu, 18 Jun 2026 15:12:39 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "英格兰属于主动压迫型，场均进球参考值 4，大胜倾向 100%。克罗地亚属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "英格兰 进攻指数 90，克罗地亚 防守指数 82；克罗地亚 进攻指数 78，英格兰 防守指数 85。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 2.19,
      "away": 1.18
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
      "rank": 50,
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
      "rank": 64,
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
        "away": 62
      },
      {
        "label": "防守",
        "home": 69,
        "away": 64
      },
      {
        "label": "中场",
        "home": 72,
        "away": 63
      },
      {
        "label": "近期状态",
        "home": 68,
        "away": 62
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-17",
      "rawTime": "19:00 UTC-4",
      "homeName": "Ghana",
      "awayName": "Panama"
    },
    "probabilities": [
      51,
      28,
      21
    ],
    "confidence": 76,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
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
        "score": "0-0",
        "chance": 11
      },
      {
        "score": "2-0",
        "chance": 11
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "加纳属于均衡型，场均进球参考值 1，大胜倾向 0%。巴拿马属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "加纳 进攻指数 72，巴拿马 防守指数 64；巴拿马 进攻指数 62，加纳 防守指数 69。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.38,
      "away": 0.79
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-17",
      "rawTime": "20:00 UTC-6",
      "homeName": "Uzbekistan",
      "awayName": "Colombia"
    },
    "probabilities": [
      14,
      20,
      66
    ],
    "confidence": 82,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-3。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "0-2",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-2",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "乌兹别克斯坦属于均衡型，场均进球参考值 1，大胜倾向 0%。哥伦比亚属于主动压迫型，场均进球参考值 3，大胜倾向 100%。",
      "乌兹别克斯坦 进攻指数 69，哥伦比亚 防守指数 82；哥伦比亚 进攻指数 80，乌兹别克斯坦 防守指数 71。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 0.79,
      "away": 2.04
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-18",
      "rawTime": "12:00 UTC-4",
      "homeName": "Czech Republic",
      "awayName": "South Africa"
    },
    "probabilities": [
      60,
      25,
      15
    ],
    "confidence": 80,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 17
      },
      {
        "score": "2-0",
        "chance": 14
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "0-0",
        "chance": 11
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0.5,
        "avgGoalsAgainst": 1.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "捷克属于均衡型，场均进球参考值 1，大胜倾向 0%。南非属于均衡型，场均进球参考值 0.5，大胜倾向 0%。",
      "捷克 进攻指数 74，南非 防守指数 67；南非 进攻指数 66，捷克 防守指数 77。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.6,
      "away": 0.64
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-18",
      "rawTime": "12:00 UTC-7",
      "homeName": "Switzerland",
      "awayName": "Bosnia & Herzegovina"
    },
    "probabilities": [
      63,
      22,
      15
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 4-1。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "2-0",
        "chance": 12
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2.5,
        "avgGoalsAgainst": 1,
        "bigWinRate": 50,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 2.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "瑞士属于均衡型，场均进球参考值 2.5，大胜倾向 50%。波黑属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "瑞士 进攻指数 74，波黑 防守指数 68；波黑 进攻指数 72，瑞士 防守指数 81。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.9,
      "away": 0.78
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-18",
      "rawTime": "15:00 UTC-7",
      "homeName": "Canada",
      "awayName": "Qatar"
    },
    "probabilities": [
      60,
      22,
      18
    ],
    "confidence": 78,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 6-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 3.5,
        "avgGoalsAgainst": 0.5,
        "bigWinRate": 50,
        "cleanSheetRate": 50,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0.5,
        "avgGoalsAgainst": 3.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        },
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "加拿大属于均衡型，场均进球参考值 3.5，大胜倾向 50%。卡塔尔属于均衡型，场均进球参考值 0.5，大胜倾向 0%。",
      "加拿大 进攻指数 74，卡塔尔 防守指数 66；卡塔尔 进攻指数 69，加拿大 防守指数 70。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.92,
      "away": 0.93
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-18",
      "rawTime": "19:00 UTC-6",
      "homeName": "Mexico",
      "awayName": "South Korea"
    },
    "probabilities": [
      41,
      26,
      33
    ],
    "confidence": 72,
    "tag": "已完场",
    "summary": "外部数据源显示本场已完场，最终比分 1-0。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 10
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
    "motivation": {
      "phase": "group",
      "label": "赛后复盘",
      "intensity": 0,
      "drawValue": 0,
      "goalNeed": 0,
      "note": "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.5,
        "avgGoalsAgainst": 0,
        "bigWinRate": 50,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Mexico rejoice after second World Cup win in 2026....",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113986/mexico-south-korea-world-cup-reaction-analysis",
          "pubDate": "Fri, 19 Jun 2026 04:42:08 EST"
        },
        {
          "title": "World Cup's best viral moments: Mexico, Scotland d...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114224/world-cup-best-viral-moments-social-media-us-mexico-canada",
          "pubDate": "Fri, 19 Jun 2026 05:34:44 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。",
      "墨西哥属于均衡型，场均进球参考值 1.5，大胜倾向 50%。韩国属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "墨西哥 进攻指数 76，韩国 防守指数 75；韩国 进攻指数 77，墨西哥 防守指数 75。",
      "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。"
    ],
    "expectedGoals": {
      "home": 1.39,
      "away": 1.23
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-19",
      "rawTime": "12:00 UTC-7",
      "homeName": "USA",
      "awayName": "Australia"
    },
    "probabilities": [
      51,
      20,
      29
    ],
    "confidence": 77,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 美国 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 7
      },
      {
        "score": "2-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.68,
      "drawValue": 0.52,
      "goalNeed": 0.38,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。美国当前3分、净胜球3；澳大利亚当前3分、净胜球2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 0,
        "bigWinRate": 100,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Opposition scouting: How the USMNT can counter Aus...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49110484/opposition-scouting-how-usmnt-counter-australia-threat-world-cup-group-d-second-match",
          "pubDate": "Fri, 19 Jun 2026 04:49:38 EST"
        },
        {
          "title": "Opposition scouting: How the USMNT can counter Aus...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49110484/opposition-scouting-how-usmnt-counter-australia-threat-world-cup-group-d-second-match",
          "pubDate": "Fri, 19 Jun 2026 04:49:38 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。美国当前3分、净胜球3；澳大利亚当前3分、净胜球2。",
      "美国属于均衡型，场均进球参考值 4，大胜倾向 100%。澳大利亚属于均衡型，场均进球参考值 2，大胜倾向 100%。",
      "美国 进攻指数 78，澳大利亚 防守指数 78；澳大利亚 进攻指数 72，美国 防守指数 76。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.96,
      "away": 1.45
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-19",
      "rawTime": "18:00 UTC-4",
      "homeName": "Scotland",
      "awayName": "Morocco"
    },
    "probabilities": [
      20,
      23,
      57
    ],
    "confidence": 78,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 摩洛哥 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.52,
      "goalNeed": 0.45,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。苏格兰当前3分、净胜球1；摩洛哥当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "防守控制型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        },
        {
          "title": "Full hearts, empty kegs, can't lose: Scotland's Tartan Army takes over World Cup",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49096885/scotland-tartan-army-world-cup-boston-haiti-red-sox-fenway-park",
          "pubDate": "Thu, 18 Jun 2026 11:35:41 EST"
        },
        {
          "title": "World Cup's best viral moments: Mexico, Scotland d...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114224/world-cup-best-viral-moments-social-media-us-mexico-canada",
          "pubDate": "Fri, 19 Jun 2026 05:34:44 EST"
        },
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。苏格兰当前3分、净胜球1；摩洛哥当前1分、净胜球0。",
      "苏格兰属于均衡型，场均进球参考值 1，大胜倾向 0%。摩洛哥属于防守控制型，场均进球参考值 1，大胜倾向 0%。",
      "苏格兰 进攻指数 76，摩洛哥 防守指数 87；摩洛哥 进攻指数 76，苏格兰 防守指数 79。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.83,
      "away": 1.57
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-19",
      "rawTime": "20:30 UTC-4",
      "homeName": "Brazil",
      "awayName": "Haiti"
    },
    "probabilities": [
      69,
      19,
      12
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 巴西 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.5,
      "goalNeed": 0.65,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴西当前1分、净胜球0；海地当前0分、净胜球-1。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        },
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴西当前1分、净胜球0；海地当前0分、净胜球-1。",
      "巴西属于主动压迫型，场均进球参考值 1，大胜倾向 0%。海地属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "巴西 进攻指数 88，海地 防守指数 55；海地 进攻指数 61，巴西 防守指数 81。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.83,
      "away": 0.58
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-19",
      "rawTime": "20:00 UTC-7",
      "homeName": "Turkey",
      "awayName": "Paraguay"
    },
    "probabilities": [
      55,
      21,
      24
    ],
    "confidence": 79,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 土耳其 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 12
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
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.28,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。土耳其当前0分、净胜球-2；巴拉圭当前0分、净胜球-3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "开放进攻型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。土耳其当前0分、净胜球-2；巴拉圭当前0分、净胜球-3。",
      "土耳其属于开放进攻型，场均进球参考值 0，大胜倾向 0%。巴拉圭属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "土耳其 进攻指数 82，巴拉圭 防守指数 78；巴拉圭 进攻指数 71，土耳其 防守指数 71。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.63,
      "away": 0.96
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-20",
      "rawTime": "12:00 UTC-5",
      "homeName": "Netherlands",
      "awayName": "Sweden"
    },
    "probabilities": [
      60,
      18,
      22
    ],
    "confidence": 81,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 荷兰 方向，最可能比分为 2-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 8
      },
      {
        "score": "3-1",
        "chance": 8
      },
      {
        "score": "2-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.52,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。荷兰当前1分、净胜球0；瑞典当前3分、净胜球4。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 5,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。荷兰当前1分、净胜球0；瑞典当前3分、净胜球4。",
      "荷兰属于主动压迫型，场均进球参考值 2，大胜倾向 0%。瑞典属于均衡型，场均进球参考值 5，大胜倾向 100%。",
      "荷兰 进攻指数 85，瑞典 防守指数 79；瑞典 进攻指数 75，荷兰 防守指数 84。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.36,
      "away": 1.35
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-20",
      "rawTime": "16:00 UTC-4",
      "homeName": "Germany",
      "awayName": "Ivory Coast"
    },
    "probabilities": [
      66,
      16,
      18
    ],
    "confidence": 82,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 德国 方向，最可能比分为 2-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "3-1",
        "chance": 8
      },
      {
        "score": "2-0",
        "chance": 7
      },
      {
        "score": "1-1",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.68,
      "drawValue": 0.52,
      "goalNeed": 0.38,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。德国当前3分、净胜球6；科特迪瓦当前3分、净胜球1。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 7,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。德国当前3分、净胜球6；科特迪瓦当前3分、净胜球1。",
      "德国属于主动压迫型，场均进球参考值 7，大胜倾向 100%。科特迪瓦属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "德国 进攻指数 86，科特迪瓦 防守指数 72；科特迪瓦 进攻指数 78，德国 防守指数 79。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.65,
      "away": 1.32
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-20",
      "rawTime": "19:00 UTC-5",
      "homeName": "Ecuador",
      "awayName": "Curaçao"
    },
    "probabilities": [
      70,
      18,
      12
    ],
    "confidence": 87,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 厄瓜多尔 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.28,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。厄瓜多尔当前0分、净胜球-1；库拉索当前0分、净胜球-6。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 7,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。厄瓜多尔当前0分、净胜球-1；库拉索当前0分、净胜球-6。",
      "厄瓜多尔属于均衡型，场均进球参考值 0，大胜倾向 0%。库拉索属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "厄瓜多尔 进攻指数 77，库拉索 防守指数 54；库拉索 进攻指数 57，厄瓜多尔 防守指数 84。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.85,
      "away": 0.58
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-20",
      "rawTime": "22:00 UTC-6",
      "homeName": "Tunisia",
      "awayName": "Japan"
    },
    "probabilities": [
      21,
      20,
      59
    ],
    "confidence": 82,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 日本 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "0-2",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.5,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。突尼斯当前0分、净胜球-4；日本当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。突尼斯当前0分、净胜球-4；日本当前1分、净胜球0。",
      "突尼斯属于均衡型，场均进球参考值 1，大胜倾向 0%。日本属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "突尼斯 进攻指数 70，日本 防守指数 78；日本 进攻指数 79，突尼斯 防守指数 78。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.97,
      "away": 1.82
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
      "rank": 52,
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
        "home": 91,
        "away": 68
      },
      {
        "label": "防守",
        "home": 86,
        "away": 68
      },
      {
        "label": "中场",
        "home": 93,
        "away": 69
      },
      {
        "label": "近期状态",
        "home": 90,
        "away": 67
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-21",
      "rawTime": "12:00 UTC-4",
      "homeName": "Spain",
      "awayName": "Saudi Arabia"
    },
    "probabilities": [
      71,
      18,
      11
    ],
    "confidence": 89,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 西班牙 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。西班牙当前1分、净胜球0；沙特阿拉伯当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。西班牙当前1分、净胜球0；沙特阿拉伯当前1分、净胜球0。",
      "西班牙属于主动压迫型，场均进球参考值 0，大胜倾向 0%。沙特阿拉伯属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "西班牙 进攻指数 91，沙特阿拉伯 防守指数 68；沙特阿拉伯 进攻指数 68，西班牙 防守指数 86。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.92,
      "away": 0.61
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
      "color": "#239f40",
      "rank": 20,
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
        "away": 75
      },
      {
        "label": "防守",
        "home": 79,
        "away": 79
      },
      {
        "label": "中场",
        "home": 82,
        "away": 76
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-21",
      "rawTime": "12:00 UTC-7",
      "homeName": "Belgium",
      "awayName": "Iran"
    },
    "probabilities": [
      45,
      24,
      31
    ],
    "confidence": 74,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 比利时 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "0-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。比利时当前1分、净胜球0；伊朗当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。比利时当前1分、净胜球0；伊朗当前1分、净胜球0。",
      "比利时属于主动压迫型，场均进球参考值 1，大胜倾向 0%。伊朗属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "比利时 进攻指数 83，伊朗 防守指数 79；伊朗 进攻指数 75，比利时 防守指数 79。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.43,
      "away": 1.14
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-21",
      "rawTime": "18:00 UTC-4",
      "homeName": "Uruguay",
      "awayName": "Cape Verde"
    },
    "probabilities": [
      68,
      20,
      12
    ],
    "confidence": 81,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 乌拉圭 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。乌拉圭当前1分、净胜球0；佛得角当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。乌拉圭当前1分、净胜球0；佛得角当前1分、净胜球0。",
      "乌拉圭属于主动压迫型，场均进球参考值 1，大胜倾向 0%。佛得角属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "乌拉圭 进攻指数 81，佛得角 防守指数 72；佛得角 进攻指数 68，乌拉圭 防守指数 83。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.78,
      "away": 0.56
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
      "rank": 68,
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-21",
      "rawTime": "18:00 UTC-7",
      "homeName": "New Zealand",
      "awayName": "Egypt"
    },
    "probabilities": [
      13,
      17,
      70
    ],
    "confidence": 85,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 埃及 方向，最可能比分为 0-2。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-2",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 12
      },
      {
        "score": "1-2",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。新西兰当前1分、净胜球0；埃及当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。新西兰当前1分、净胜球0；埃及当前1分、净胜球0。",
      "新西兰属于均衡型，场均进球参考值 2，大胜倾向 0%。埃及属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "新西兰 进攻指数 64，埃及 防守指数 76；埃及 进攻指数 79，新西兰 防守指数 68。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.75,
      "away": 2.11
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-22",
      "rawTime": "12:00 UTC-5",
      "homeName": "Argentina",
      "awayName": "Austria"
    },
    "probabilities": [
      77,
      13,
      10
    ],
    "confidence": 87,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 阿根廷 方向，最可能比分为 2-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 10
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "3-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.68,
      "drawValue": 0.52,
      "goalNeed": 0.38,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。阿根廷当前3分、净胜球3；奥地利当前3分、净胜球2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 0,
        "bigWinRate": 100,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。阿根廷当前3分、净胜球3；奥地利当前3分、净胜球2。",
      "阿根廷属于主动压迫型，场均进球参考值 3，大胜倾向 100%。奥地利属于均衡型，场均进球参考值 3，大胜倾向 100%。",
      "阿根廷 进攻指数 92，奥地利 防守指数 76；奥地利 进攻指数 76，阿根廷 防守指数 88。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.84,
      "away": 0.9
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
      "rank": 57,
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
        "home": 94,
        "away": 68
      },
      {
        "label": "防守",
        "home": 87,
        "away": 68
      },
      {
        "label": "中场",
        "home": 89,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 88,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-22",
      "rawTime": "17:00 UTC-4",
      "homeName": "France",
      "awayName": "Iraq"
    },
    "probabilities": [
      74,
      15,
      11
    ],
    "confidence": 89,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 法国 方向，最可能比分为 2-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。法国当前3分、净胜球2；伊拉克当前0分、净胜球-3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。法国当前3分、净胜球2；伊拉克当前0分、净胜球-3。",
      "法国属于主动压迫型，场均进球参考值 3，大胜倾向 100%。伊拉克属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "法国 进攻指数 94，伊拉克 防守指数 68；伊拉克 进攻指数 68，法国 防守指数 87。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.41,
      "away": 0.76
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-22",
      "rawTime": "20:00 UTC-4",
      "homeName": "Norway",
      "awayName": "Senegal"
    },
    "probabilities": [
      41,
      20,
      39
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 挪威 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "2-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。挪威当前3分、净胜球3；塞内加尔当前0分、净胜球-2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "开放进攻型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。挪威当前3分、净胜球3；塞内加尔当前0分、净胜球-2。",
      "挪威属于开放进攻型，场均进球参考值 4，大胜倾向 100%。塞内加尔属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "挪威 进攻指数 84，塞内加尔 防守指数 80；塞内加尔 进攻指数 78，挪威 防守指数 73。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.69,
      "away": 1.63
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
      "rank": 66,
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-22",
      "rawTime": "20:00 UTC-7",
      "homeName": "Jordan",
      "awayName": "Algeria"
    },
    "probabilities": [
      29,
      22,
      49
    ],
    "confidence": 75,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 阿尔及利亚 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "0-1",
        "chance": 11
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.28,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。约旦当前0分、净胜球-2；阿尔及利亚当前0分、净胜球-3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。约旦当前0分、净胜球-2；阿尔及利亚当前0分、净胜球-3。",
      "约旦属于均衡型，场均进球参考值 1，大胜倾向 0%。阿尔及利亚属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "约旦 进攻指数 67，阿尔及利亚 防守指数 73；阿尔及利亚 进攻指数 76，约旦 防守指数 68。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.09,
      "away": 1.51
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-23",
      "rawTime": "12:00 UTC-5",
      "homeName": "Portugal",
      "awayName": "Uzbekistan"
    },
    "probabilities": [
      72,
      17,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 葡萄牙 方向，最可能比分为 2-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 14
      },
      {
        "score": "1-0",
        "chance": 14
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.5,
      "goalNeed": 0.65,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。葡萄牙当前1分、净胜球0；乌兹别克斯坦当前0分、净胜球-2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Portugal have a Ronaldo problem (again)",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49098603/portugal-cristiano-ronaldo-problem-congo-dr-roberto-martinez-fifa-world-cup-analysis",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Portugal have a Ronaldo problem (again)",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49098603/portugal-cristiano-ronaldo-problem-congo-dr-roberto-martinez-fifa-world-cup-analysis",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。葡萄牙当前1分、净胜球0；乌兹别克斯坦当前0分、净胜球-2。",
      "葡萄牙属于主动压迫型，场均进球参考值 1，大胜倾向 0%。乌兹别克斯坦属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "葡萄牙 进攻指数 87，乌兹别克斯坦 防守指数 71；乌兹别克斯坦 进攻指数 69，葡萄牙 防守指数 84。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.04,
      "away": 0.64
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
      "rank": 50,
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
        "away": 72
      },
      {
        "label": "防守",
        "home": 85,
        "away": 69
      },
      {
        "label": "中场",
        "home": 88,
        "away": 72
      },
      {
        "label": "近期状态",
        "home": 87,
        "away": 68
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-23",
      "rawTime": "16:00 UTC-4",
      "homeName": "England",
      "awayName": "Ghana"
    },
    "probabilities": [
      76,
      14,
      10
    ],
    "confidence": 88,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 英格兰 方向，最可能比分为 2-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 11
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "1-0",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.68,
      "drawValue": 0.52,
      "goalNeed": 0.38,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。英格兰当前3分、净胜球2；加纳当前3分、净胜球1。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 2,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Every team's odds to win the World Cup: England's ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/espn/betting/story/_/id/48386952/espn-soccer-futbol-world-cup-betting-odds-championship-groups",
          "pubDate": "Thu, 18 Jun 2026 15:12:39 EST"
        },
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Every team's odds to win the World Cup: England's ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/espn/betting/story/_/id/48386952/espn-soccer-futbol-world-cup-betting-odds-championship-groups",
          "pubDate": "Thu, 18 Jun 2026 15:12:39 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。英格兰当前3分、净胜球2；加纳当前3分、净胜球1。",
      "英格兰属于主动压迫型，场均进球参考值 4，大胜倾向 100%。加纳属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "英格兰 进攻指数 90，加纳 防守指数 69；加纳 进攻指数 72，英格兰 防守指数 85。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.64,
      "away": 0.83
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
      "rank": 64,
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
        "home": 62,
        "away": 78
      },
      {
        "label": "防守",
        "home": 64,
        "away": 82
      },
      {
        "label": "中场",
        "home": 63,
        "away": 85
      },
      {
        "label": "近期状态",
        "home": 62,
        "away": 76
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-23",
      "rawTime": "19:00 UTC-4",
      "homeName": "Panama",
      "awayName": "Croatia"
    },
    "probabilities": [
      12,
      17,
      71
    ],
    "confidence": 87,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 克罗地亚 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 15
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.28,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴拿马当前0分、净胜球-1；克罗地亚当前0分、净胜球-2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴拿马当前0分、净胜球-1；克罗地亚当前0分、净胜球-2。",
      "巴拿马属于均衡型，场均进球参考值 0，大胜倾向 0%。克罗地亚属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "巴拿马 进攻指数 62，克罗地亚 防守指数 82；克罗地亚 进攻指数 78，巴拿马 防守指数 64。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.63,
      "away": 1.93
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-23",
      "rawTime": "20:00 UTC-6",
      "homeName": "Colombia",
      "awayName": "DR Congo"
    },
    "probabilities": [
      73,
      16,
      11
    ],
    "confidence": 85,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 哥伦比亚 方向，最可能比分为 2-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 13
      },
      {
        "score": "1-0",
        "chance": 11
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.52,
      "goalNeed": 0.45,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。哥伦比亚当前3分、净胜球2；刚果（金）当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。哥伦比亚当前3分、净胜球2；刚果（金）当前1分、净胜球0。",
      "哥伦比亚属于主动压迫型，场均进球参考值 3，大胜倾向 100%。刚果（金）属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "哥伦比亚 进攻指数 80，刚果（金） 防守指数 72；刚果（金） 进攻指数 70，哥伦比亚 防守指数 82。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.33,
      "away": 0.74
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-24",
      "rawTime": "12:00 UTC-7",
      "homeName": "Switzerland",
      "awayName": "Canada"
    },
    "probabilities": [
      50,
      22,
      28
    ],
    "confidence": 75,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 瑞士 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "2-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "平局有价值",
      "intensity": 0.58,
      "drawValue": 0.72,
      "goalNeed": 0.25,
      "home": {
        "label": "平局够用",
        "intensity": 0.58,
        "drawValue": 0.72,
        "goalNeed": 0.25,
        "text": "平局通常能维持出线主动，赢球则争取更好签位。"
      },
      "away": {
        "label": "平局够用",
        "intensity": 0.58,
        "drawValue": 0.72,
        "goalNeed": 0.25,
        "text": "平局通常能维持出线主动，赢球则争取更好签位。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。瑞士当前4分、净胜球3；加拿大当前4分、净胜球6。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2.5,
        "avgGoalsAgainst": 1,
        "bigWinRate": 50,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 3.5,
        "avgGoalsAgainst": 0.5,
        "bigWinRate": 50,
        "cleanSheetRate": 50,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        },
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。瑞士当前4分、净胜球3；加拿大当前4分、净胜球6。",
      "瑞士属于均衡型，场均进球参考值 2.5，大胜倾向 50%。加拿大属于均衡型，场均进球参考值 3.5，大胜倾向 50%。",
      "瑞士 进攻指数 74，加拿大 防守指数 70；加拿大 进攻指数 74，瑞士 防守指数 81。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.85,
      "away": 1.34
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-24",
      "rawTime": "12:00 UTC-7",
      "homeName": "Bosnia & Herzegovina",
      "awayName": "Qatar"
    },
    "probabilities": [
      56,
      18,
      26
    ],
    "confidence": 75,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 波黑 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "2-0",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "强求胜",
      "intensity": 0.96,
      "drawValue": 0.12,
      "goalNeed": 0.9,
      "home": {
        "label": "必须争胜",
        "intensity": 0.96,
        "drawValue": 0.12,
        "goalNeed": 0.9,
        "text": "积分压力很大，需要赢球并尽量改善净胜球。"
      },
      "away": {
        "label": "必须争胜",
        "intensity": 0.96,
        "drawValue": 0.12,
        "goalNeed": 0.9,
        "text": "积分压力很大，需要赢球并尽量改善净胜球。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。波黑当前1分、净胜球-3；卡塔尔当前1分、净胜球-6。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 2.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0.5,
        "avgGoalsAgainst": 3.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        },
        {
          "title": "Co-hosts' historic win over Qatar could be a water...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113824/canada-historic-world-cup-win-qatar-turning-point-sport",
          "pubDate": "Fri, 19 Jun 2026 04:49:24 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。波黑当前1分、净胜球-3；卡塔尔当前1分、净胜球-6。",
      "波黑属于均衡型，场均进球参考值 1，大胜倾向 0%。卡塔尔属于均衡型，场均进球参考值 0.5，大胜倾向 0%。",
      "波黑 进攻指数 72，卡塔尔 防守指数 66；卡塔尔 进攻指数 69，波黑 防守指数 68。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.77,
      "away": 1.11
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-24",
      "rawTime": "18:00 UTC-4",
      "homeName": "Scotland",
      "awayName": "Brazil"
    },
    "probabilities": [
      22,
      23,
      55
    ],
    "confidence": 76,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 巴西 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.52,
      "goalNeed": 0.45,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。苏格兰当前3分、净胜球1；巴西当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        },
        {
          "title": "Full hearts, empty kegs, can't lose: Scotland's Tartan Army takes over World Cup",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49096885/scotland-tartan-army-world-cup-boston-haiti-red-sox-fenway-park",
          "pubDate": "Thu, 18 Jun 2026 11:35:41 EST"
        },
        {
          "title": "World Cup's best viral moments: Mexico, Scotland d...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114224/world-cup-best-viral-moments-social-media-us-mexico-canada",
          "pubDate": "Fri, 19 Jun 2026 05:34:44 EST"
        },
        {
          "title": "World Cup Daily: Meet Scotland superfan Donny the ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113556/fifa-world-cup-daily-brazil-usmnt-action-day-9",
          "pubDate": "Fri, 19 Jun 2026 06:06:44 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。苏格兰当前3分、净胜球1；巴西当前1分、净胜球0。",
      "苏格兰属于均衡型，场均进球参考值 1，大胜倾向 0%。巴西属于主动压迫型，场均进球参考值 1，大胜倾向 0%。",
      "苏格兰 进攻指数 76，巴西 防守指数 81；巴西 进攻指数 88，苏格兰 防守指数 79。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.87,
      "away": 1.55
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-24",
      "rawTime": "18:00 UTC-4",
      "homeName": "Morocco",
      "awayName": "Haiti"
    },
    "probabilities": [
      68,
      20,
      12
    ],
    "confidence": 87,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 摩洛哥 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.5,
      "goalNeed": 0.65,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。摩洛哥当前1分、净胜球0；海地当前0分、净胜球-1。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "防守控制型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。摩洛哥当前1分、净胜球0；海地当前0分、净胜球-1。",
      "摩洛哥属于防守控制型，场均进球参考值 1，大胜倾向 0%。海地属于均衡型，场均进球参考值 0，大胜倾向 0%。",
      "摩洛哥 进攻指数 76，海地 防守指数 55；海地 进攻指数 61，摩洛哥 防守指数 87。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.68,
      "away": 0.53
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-24",
      "rawTime": "19:00 UTC-6",
      "homeName": "Czech Republic",
      "awayName": "Mexico"
    },
    "probabilities": [
      36,
      22,
      42
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 墨西哥 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "0-1",
        "chance": 8
      },
      {
        "score": "2-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "强求胜",
      "intensity": 0.96,
      "drawValue": 0.78,
      "goalNeed": 0.9,
      "home": {
        "label": "必须争胜",
        "intensity": 0.96,
        "drawValue": 0.12,
        "goalNeed": 0.9,
        "text": "积分压力很大，需要赢球并尽量改善净胜球。"
      },
      "away": {
        "label": "争头名/控风险",
        "intensity": 0.48,
        "drawValue": 0.78,
        "goalNeed": 0.15,
        "text": "已掌握出线主动，平局价值较高，更多关注小组排名和体能管理。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。捷克当前1分、净胜球-1；墨西哥当前6分、净胜球3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.5,
        "avgGoalsAgainst": 0,
        "bigWinRate": 50,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Mexico rejoice after second World Cup win in 2026....",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113986/mexico-south-korea-world-cup-reaction-analysis",
          "pubDate": "Fri, 19 Jun 2026 04:42:08 EST"
        },
        {
          "title": "World Cup's best viral moments: Mexico, Scotland d...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114224/world-cup-best-viral-moments-social-media-us-mexico-canada",
          "pubDate": "Fri, 19 Jun 2026 05:34:44 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。捷克当前1分、净胜球-1；墨西哥当前6分、净胜球3。",
      "捷克属于均衡型，场均进球参考值 1，大胜倾向 0%。墨西哥属于均衡型，场均进球参考值 1.5，大胜倾向 50%。",
      "捷克 进攻指数 74，墨西哥 防守指数 75；墨西哥 进攻指数 76，捷克 防守指数 77。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.37,
      "away": 1.58
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-24",
      "rawTime": "19:00 UTC-6",
      "homeName": "South Africa",
      "awayName": "South Korea"
    },
    "probabilities": [
      13,
      17,
      70
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 韩国 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 15
      },
      {
        "score": "0-2",
        "chance": 14
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
    "motivation": {
      "phase": "group",
      "label": "强求胜",
      "intensity": 0.96,
      "drawValue": 0.38,
      "goalNeed": 0.9,
      "home": {
        "label": "必须争胜",
        "intensity": 0.96,
        "drawValue": 0.12,
        "goalNeed": 0.9,
        "text": "积分压力很大，需要赢球并尽量改善净胜球。"
      },
      "away": {
        "label": "赢球稳线",
        "intensity": 0.82,
        "drawValue": 0.38,
        "goalNeed": 0.72,
        "text": "需要主动争胜，平局可能要比较小组第三成绩和净胜球。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。南非当前1分、净胜球-2；韩国当前3分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0.5,
        "avgGoalsAgainst": 1.5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 50
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Korea GK gaffe helps Mexico clinch 1st in Group A",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49113839/mexico-beats-south-korea-clinch-first-place-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Aguirre relishes Azteca return after Group A win",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49114368/aguirre-relishes-azteca-knockout-matches-mexico-win-group-a",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。南非当前1分、净胜球-2；韩国当前3分、净胜球0。",
      "南非属于均衡型，场均进球参考值 0.5，大胜倾向 0%。韩国属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "南非 进攻指数 66，韩国 防守指数 75；韩国 进攻指数 77，南非 防守指数 67。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.67,
      "away": 1.92
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-25",
      "rawTime": "16:00 UTC-4",
      "homeName": "Curaçao",
      "awayName": "Ivory Coast"
    },
    "probabilities": [
      11,
      18,
      71
    ],
    "confidence": 89,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 科特迪瓦 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-1",
        "chance": 15
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。库拉索当前0分、净胜球-6；科特迪瓦当前3分、净胜球1。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 7,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。库拉索当前0分、净胜球-6；科特迪瓦当前3分、净胜球1。",
      "库拉索属于均衡型，场均进球参考值 1，大胜倾向 0%。科特迪瓦属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "库拉索 进攻指数 57，科特迪瓦 防守指数 72；科特迪瓦 进攻指数 78，库拉索 防守指数 54。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.62,
      "away": 1.96
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-25",
      "rawTime": "16:00 UTC-4",
      "homeName": "Ecuador",
      "awayName": "Germany"
    },
    "probabilities": [
      37,
      19,
      44
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 德国 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "2-1",
        "chance": 7
      },
      {
        "score": "2-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。厄瓜多尔当前0分、净胜球-1；德国当前3分、净胜球6。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 7,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。厄瓜多尔当前0分、净胜球-1；德国当前3分、净胜球6。",
      "厄瓜多尔属于均衡型，场均进球参考值 0，大胜倾向 0%。德国属于主动压迫型，场均进球参考值 7，大胜倾向 100%。",
      "厄瓜多尔 进攻指数 77，德国 防守指数 79；德国 进攻指数 86，厄瓜多尔 防守指数 84。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.76,
      "away": 1.97
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-25",
      "rawTime": "18:00 UTC-5",
      "homeName": "Japan",
      "awayName": "Sweden"
    },
    "probabilities": [
      62,
      18,
      20
    ],
    "confidence": 80,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 日本 方向，最可能比分为 2-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-1",
        "chance": 10
      },
      {
        "score": "1-1",
        "chance": 9
      },
      {
        "score": "2-0",
        "chance": 8
      },
      {
        "score": "3-1",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.52,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。日本当前1分、净胜球0；瑞典当前3分、净胜球4。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 5,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。日本当前1分、净胜球0；瑞典当前3分、净胜球4。",
      "日本属于均衡型，场均进球参考值 2，大胜倾向 0%。瑞典属于均衡型，场均进球参考值 5，大胜倾向 100%。",
      "日本 进攻指数 79，瑞典 防守指数 79；瑞典 进攻指数 75，日本 防守指数 78。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.25,
      "away": 1.21
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-25",
      "rawTime": "18:00 UTC-5",
      "homeName": "Tunisia",
      "awayName": "Netherlands"
    },
    "probabilities": [
      22,
      20,
      58
    ],
    "confidence": 81,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 荷兰 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "0-1",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 10
      },
      {
        "score": "0-2",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.5,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。突尼斯当前0分、净胜球-4；荷兰当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 5,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。突尼斯当前0分、净胜球-4；荷兰当前1分、净胜球0。",
      "突尼斯属于均衡型，场均进球参考值 1，大胜倾向 0%。荷兰属于主动压迫型，场均进球参考值 2，大胜倾向 0%。",
      "突尼斯 进攻指数 70，荷兰 防守指数 84；荷兰 进攻指数 85，突尼斯 防守指数 78。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.04,
      "away": 1.85
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-25",
      "rawTime": "19:00 UTC-7",
      "homeName": "Turkey",
      "awayName": "USA"
    },
    "probabilities": [
      37,
      21,
      42
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 美国 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "2-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。土耳其当前0分、净胜球-2；美国当前3分、净胜球3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "开放进攻型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。土耳其当前0分、净胜球-2；美国当前3分、净胜球3。",
      "土耳其属于开放进攻型，场均进球参考值 0，大胜倾向 0%。美国属于均衡型，场均进球参考值 4，大胜倾向 100%。",
      "土耳其 进攻指数 82，美国 防守指数 76；美国 进攻指数 78，土耳其 防守指数 71。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.54,
      "away": 1.7
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-25",
      "rawTime": "19:00 UTC-7",
      "homeName": "Paraguay",
      "awayName": "Australia"
    },
    "probabilities": [
      44,
      21,
      35
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 巴拉圭 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴拉圭当前0分、净胜球-3；澳大利亚当前3分、净胜球2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 0,
        "bigWinRate": 100,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Opposition scouting: How the USMNT can counter Aus...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49110484/opposition-scouting-how-usmnt-counter-australia-threat-world-cup-group-d-second-match",
          "pubDate": "Fri, 19 Jun 2026 04:49:38 EST"
        },
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Opposition scouting: How the USMNT can counter Aus...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49110484/opposition-scouting-how-usmnt-counter-australia-threat-world-cup-group-d-second-match",
          "pubDate": "Fri, 19 Jun 2026 04:49:38 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴拉圭当前0分、净胜球-3；澳大利亚当前3分、净胜球2。",
      "巴拉圭属于均衡型，场均进球参考值 1，大胜倾向 0%。澳大利亚属于均衡型，场均进球参考值 2，大胜倾向 100%。",
      "巴拉圭 进攻指数 71，澳大利亚 防守指数 78；澳大利亚 进攻指数 72，巴拉圭 防守指数 78。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.6,
      "away": 1.42
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-26",
      "rawTime": "15:00 UTC-4",
      "homeName": "Norway",
      "awayName": "France"
    },
    "probabilities": [
      22,
      18,
      60
    ],
    "confidence": 82,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 法国 方向，最可能比分为 1-2。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "1-1",
        "chance": 8
      },
      {
        "score": "1-3",
        "chance": 7
      },
      {
        "score": "0-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.68,
      "drawValue": 0.52,
      "goalNeed": 0.38,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。挪威当前3分、净胜球3；法国当前3分、净胜球2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "开放进攻型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。挪威当前3分、净胜球3；法国当前3分、净胜球2。",
      "挪威属于开放进攻型，场均进球参考值 4，大胜倾向 100%。法国属于主动压迫型，场均进球参考值 3，大胜倾向 100%。",
      "挪威 进攻指数 84，法国 防守指数 87；法国 进攻指数 94，挪威 防守指数 73。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.4,
      "away": 2.4
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
      "rank": 57,
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
        "away": 68
      },
      {
        "label": "防守",
        "home": 80,
        "away": 68
      },
      {
        "label": "中场",
        "home": 77,
        "away": 68
      },
      {
        "label": "近期状态",
        "home": 79,
        "away": 70
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-26",
      "rawTime": "15:00 UTC-4",
      "homeName": "Senegal",
      "awayName": "Iraq"
    },
    "probabilities": [
      65,
      19,
      16
    ],
    "confidence": 80,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 塞内加尔 方向，最可能比分为 1-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-0",
        "chance": 13
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
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.28,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。塞内加尔当前0分、净胜球-2；伊拉克当前0分、净胜球-3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。塞内加尔当前0分、净胜球-2；伊拉克当前0分、净胜球-3。",
      "塞内加尔属于均衡型，场均进球参考值 1，大胜倾向 0%。伊拉克属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "塞内加尔 进攻指数 78，伊拉克 防守指数 68；伊拉克 进攻指数 68，塞内加尔 防守指数 80。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.85,
      "away": 0.78
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
      "rank": 52,
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
        "home": 68,
        "away": 68
      },
      {
        "label": "防守",
        "home": 72,
        "away": 68
      },
      {
        "label": "中场",
        "home": 68,
        "away": 69
      },
      {
        "label": "近期状态",
        "home": 70,
        "away": 67
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-26",
      "rawTime": "19:00 UTC-5",
      "homeName": "Cape Verde",
      "awayName": "Saudi Arabia"
    },
    "probabilities": [
      41,
      25,
      34
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 佛得角 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。佛得角当前1分、净胜球0；沙特阿拉伯当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。佛得角当前1分、净胜球0；沙特阿拉伯当前1分、净胜球0。",
      "佛得角属于均衡型，场均进球参考值 0，大胜倾向 0%。沙特阿拉伯属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "佛得角 进攻指数 68，沙特阿拉伯 防守指数 68；沙特阿拉伯 进攻指数 68，佛得角 防守指数 72。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.22,
      "away": 1.1
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-26",
      "rawTime": "18:00 UTC-6",
      "homeName": "Uruguay",
      "awayName": "Spain"
    },
    "probabilities": [
      27,
      24,
      49
    ],
    "confidence": 78,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 西班牙 方向，最可能比分为 0-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
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
        "score": "0-0",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。乌拉圭当前1分、净胜球0；西班牙当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 100
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。乌拉圭当前1分、净胜球0；西班牙当前1分、净胜球0。",
      "乌拉圭属于主动压迫型，场均进球参考值 1，大胜倾向 0%。西班牙属于主动压迫型，场均进球参考值 0，大胜倾向 0%。",
      "乌拉圭 进攻指数 81，西班牙 防守指数 86；西班牙 进攻指数 91，乌拉圭 防守指数 83。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.98,
      "away": 1.43
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
      "color": "#239f40",
      "rank": 20,
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
        "home": 79,
        "away": 75
      },
      {
        "label": "防守",
        "home": 76,
        "away": 79
      },
      {
        "label": "中场",
        "home": 75,
        "away": 76
      },
      {
        "label": "近期状态",
        "home": 78,
        "away": 77
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-26",
      "rawTime": "20:00 UTC-7",
      "homeName": "Egypt",
      "awayName": "Iran"
    },
    "probabilities": [
      41,
      23,
      36
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 埃及 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "0-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。埃及当前1分、净胜球0；伊朗当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。埃及当前1分、净胜球0；伊朗当前1分、净胜球0。",
      "埃及属于均衡型，场均进球参考值 1，大胜倾向 0%。伊朗属于均衡型，场均进球参考值 2，大胜倾向 0%。",
      "埃及 进攻指数 79，伊朗 防守指数 79；伊朗 进攻指数 75，埃及 防守指数 76。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.43,
      "away": 1.32
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
      "rank": 68,
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-26",
      "rawTime": "20:00 UTC-7",
      "homeName": "New Zealand",
      "awayName": "Belgium"
    },
    "probabilities": [
      11,
      17,
      72
    ],
    "confidence": 88,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 比利时 方向，最可能比分为 0-2。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-2",
        "chance": 14
      },
      {
        "score": "0-1",
        "chance": 14
      },
      {
        "score": "0-3",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.5,
      "goalNeed": 0.45,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。新西兰当前1分、净胜球0；比利时当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 2,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        },
        {
          "title": "Social sensation Payne signs deal with Olimpia",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49112651/new-zealand-social-sensation-payne-signs-deal-olimpia",
          "pubDate": "Fri, 19 Jun 2026 06:56:32 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。新西兰当前1分、净胜球0；比利时当前1分、净胜球0。",
      "新西兰属于均衡型，场均进球参考值 2，大胜倾向 0%。比利时属于主动压迫型，场均进球参考值 1，大胜倾向 0%。",
      "新西兰 进攻指数 64，比利时 防守指数 79；比利时 进攻指数 83，新西兰 防守指数 68。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.66,
      "away": 2.08
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
      "rank": 64,
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
        "home": 62,
        "away": 90
      },
      {
        "label": "防守",
        "home": 64,
        "away": 85
      },
      {
        "label": "中场",
        "home": 63,
        "away": 88
      },
      {
        "label": "近期状态",
        "home": 62,
        "away": 87
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-27",
      "rawTime": "17:00 UTC-4",
      "homeName": "Panama",
      "awayName": "England"
    },
    "probabilities": [
      11,
      15,
      74
    ],
    "confidence": 92,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 英格兰 方向，最可能比分为 0-2。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-2",
        "chance": 13
      },
      {
        "score": "0-1",
        "chance": 11
      },
      {
        "score": "0-3",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 10
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴拿马当前0分、净胜球-1；英格兰当前3分、净胜球2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 4,
        "avgGoalsAgainst": 2,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 4,
      "articles": [
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Every team's odds to win the World Cup: England's ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/espn/betting/story/_/id/48386952/espn-soccer-futbol-world-cup-betting-odds-championship-groups",
          "pubDate": "Thu, 18 Jun 2026 15:12:39 EST"
        },
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Every team's odds to win the World Cup: England's ...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/espn/betting/story/_/id/48386952/espn-soccer-futbol-world-cup-betting-odds-championship-groups",
          "pubDate": "Thu, 18 Jun 2026 15:12:39 EST"
        }
      ],
      "note": "已匹配 4 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。巴拿马当前0分、净胜球-1；英格兰当前3分、净胜球2。",
      "巴拿马属于均衡型，场均进球参考值 0，大胜倾向 0%。英格兰属于主动压迫型，场均进球参考值 4，大胜倾向 100%。",
      "巴拿马 进攻指数 62，英格兰 防守指数 85；英格兰 进攻指数 90，巴拿马 防守指数 64。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.75,
      "away": 2.38
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
      "rank": 50,
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
        "away": 72
      },
      {
        "label": "防守",
        "home": 82,
        "away": 69
      },
      {
        "label": "中场",
        "home": 85,
        "away": 72
      },
      {
        "label": "近期状态",
        "home": 76,
        "away": 68
      }
    ],
    "sourceInfo": {
      "provider": "openfootball/worldcup.json",
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-27",
      "rawTime": "17:00 UTC-4",
      "homeName": "Croatia",
      "awayName": "Ghana"
    },
    "probabilities": [
      73,
      16,
      11
    ],
    "confidence": 86,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 克罗地亚 方向，最可能比分为 2-0。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "2-0",
        "chance": 14
      },
      {
        "score": "1-0",
        "chance": 13
      },
      {
        "score": "3-0",
        "chance": 10
      },
      {
        "score": "2-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。克罗地亚当前0分、净胜球-2；加纳当前3分、净胜球1。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 2,
        "avgGoalsAgainst": 4,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 0,
        "bigWinRate": 0,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Kane and Bellingham put on a show in England's thr...",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49100772/kane-bellingham-put-show-england-thrilling-win-croatia",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。克罗地亚当前0分、净胜球-2；加纳当前3分、净胜球1。",
      "克罗地亚属于均衡型，场均进球参考值 2，大胜倾向 0%。加纳属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "克罗地亚 进攻指数 78，加纳 防守指数 69；加纳 进攻指数 72，克罗地亚 防守指数 82。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 2.12,
      "away": 0.67
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-27",
      "rawTime": "19:30 UTC-4",
      "homeName": "Colombia",
      "awayName": "Portugal"
    },
    "probabilities": [
      35,
      22,
      43
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 葡萄牙 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "0-1",
        "chance": 8
      },
      {
        "score": "2-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.72,
      "drawValue": 0.52,
      "goalNeed": 0.45,
      "home": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "away": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。哥伦比亚当前3分、净胜球2；葡萄牙当前1分、净胜球0。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "connected",
      "provider": "public-rss",
      "weight": 0.08,
      "articleCount": 2,
      "articles": [
        {
          "title": "Portugal have a Ronaldo problem (again)",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49098603/portugal-cristiano-ronaldo-problem-congo-dr-roberto-martinez-fifa-world-cup-analysis",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        },
        {
          "title": "Portugal have a Ronaldo problem (again)",
          "source": "www.espn.com",
          "link": "https://www.espn.com/soccer/story/_/id/49098603/portugal-cristiano-ronaldo-problem-congo-dr-roberto-martinez-fifa-world-cup-analysis",
          "pubDate": "Thu, 18 Jun 2026 21:12:03 EST"
        }
      ],
      "note": "已匹配 2 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。哥伦比亚当前3分、净胜球2；葡萄牙当前1分、净胜球0。",
      "哥伦比亚属于主动压迫型，场均进球参考值 3，大胜倾向 100%。葡萄牙属于主动压迫型，场均进球参考值 1，大胜倾向 0%。",
      "哥伦比亚 进攻指数 80，葡萄牙 防守指数 84；葡萄牙 进攻指数 87，哥伦比亚 防守指数 82。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.4,
      "away": 1.58
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-27",
      "rawTime": "19:30 UTC-4",
      "homeName": "DR Congo",
      "awayName": "Uzbekistan"
    },
    "probabilities": [
      39,
      23,
      38
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 刚果（金） 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "0-1",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.5,
      "goalNeed": 0.65,
      "home": {
        "label": "至少不败",
        "intensity": 0.72,
        "drawValue": 0.5,
        "goalNeed": 0.45,
        "text": "需要避免落败，若能赢球会显著改善出线形势。"
      },
      "away": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。刚果（金）当前1分、净胜球0；乌兹别克斯坦当前0分、净胜球-2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 1,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。刚果（金）当前1分、净胜球0；乌兹别克斯坦当前0分、净胜球-2。",
      "刚果（金）属于均衡型，场均进球参考值 1，大胜倾向 0%。乌兹别克斯坦属于均衡型，场均进球参考值 1，大胜倾向 0%。",
      "刚果（金） 进攻指数 70，乌兹别克斯坦 防守指数 71；乌兹别克斯坦 进攻指数 69，刚果（金） 防守指数 72。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.35,
      "away": 1.32
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-27",
      "rawTime": "21:00 UTC-5",
      "homeName": "Algeria",
      "awayName": "Austria"
    },
    "probabilities": [
      41,
      21,
      38
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 阿尔及利亚 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。阿尔及利亚当前0分、净胜球-3；奥地利当前3分、净胜球2。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 0,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 100
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 1,
        "bigWinRate": 100,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。阿尔及利亚当前0分、净胜球-3；奥地利当前3分、净胜球2。",
      "阿尔及利亚属于均衡型，场均进球参考值 0，大胜倾向 0%。奥地利属于均衡型，场均进球参考值 3，大胜倾向 100%。",
      "阿尔及利亚 进攻指数 76，奥地利 防守指数 76；奥地利 进攻指数 76，阿尔及利亚 防守指数 73。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.6,
      "away": 1.56
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
      "rank": 66,
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-27",
      "rawTime": "21:00 UTC-5",
      "homeName": "Jordan",
      "awayName": "Argentina"
    },
    "probabilities": [
      11,
      14,
      75
    ],
    "confidence": 90,
    "tag": "高信心",
    "summary": "外部赛程数据已更新。本场模型倾向 阿根廷 方向，最可能比分为 0-2。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "0-2",
        "chance": 12
      },
      {
        "score": "0-3",
        "chance": 10
      },
      {
        "score": "1-2",
        "chance": 10
      },
      {
        "score": "0-1",
        "chance": 9
      }
    ],
    "motivation": {
      "phase": "group",
      "label": "争主动",
      "intensity": 0.84,
      "drawValue": 0.52,
      "goalNeed": 0.65,
      "home": {
        "label": "止损抢分",
        "intensity": 0.84,
        "drawValue": 0.28,
        "goalNeed": 0.65,
        "text": "开局不利，需要尽快拿分，进球和净胜球同样重要。"
      },
      "away": {
        "label": "抢占主动",
        "intensity": 0.68,
        "drawValue": 0.52,
        "goalNeed": 0.38,
        "text": "已有积分基础，赢球可大幅提高出线主动权。"
      },
      "note": "小组前二直接晋级，另外8个成绩最好的小组第三晋级。约旦当前0分、净胜球-2；阿根廷当前3分、净胜球3。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1,
        "avgGoalsAgainst": 3,
        "bigWinRate": 0,
        "cleanSheetRate": 0,
        "failedToScoreRate": 0
      },
      "away": {
        "tempo": "主动压迫型",
        "avgGoalsFor": 3,
        "avgGoalsAgainst": 0,
        "bigWinRate": 100,
        "cleanSheetRate": 100,
        "failedToScoreRate": 0
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "小组前二直接晋级，另外8个成绩最好的小组第三晋级。约旦当前0分、净胜球-2；阿根廷当前3分、净胜球3。",
      "约旦属于均衡型，场均进球参考值 1，大胜倾向 0%。阿根廷属于主动压迫型，场均进球参考值 3，大胜倾向 100%。",
      "约旦 进攻指数 67，阿根廷 防守指数 88；阿根廷 进攻指数 92，约旦 防守指数 68。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 0.8,
      "away": 2.54
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-28",
      "rawTime": "12:00 UTC-7",
      "homeName": "2A",
      "awayName": "2B"
    },
    "probabilities": [
      38,
      21,
      41
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2B 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "0-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "2A属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2B属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "2A 进攻指数 66，2B 防守指数 66；2B 进攻指数 66，2A 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.45,
      "away": 1.51
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-29",
      "rawTime": "12:00 UTC-5",
      "homeName": "1C",
      "awayName": "2F"
    },
    "probabilities": [
      44,
      21,
      35
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1C 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1C属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2F属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1C 进攻指数 66，2F 防守指数 66；2F 进攻指数 66，1C 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.6,
      "away": 1.39
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1e-3abcdf-74",
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
      "code": "3ABCDF",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-29",
      "rawTime": "16:30 UTC-4",
      "homeName": "1E",
      "awayName": "3A/B/C/D/F"
    },
    "probabilities": [
      48,
      20,
      32
    ],
    "confidence": 73,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1E 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1E属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3A/B/C/D/F属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1E 进攻指数 66，3A/B/C/D/F 防守指数 66；3A/B/C/D/F 进攻指数 66，1E 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.68,
      "away": 1.31
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-29",
      "rawTime": "19:00 UTC-6",
      "homeName": "1F",
      "awayName": "2C"
    },
    "probabilities": [
      42,
      20,
      38
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1F 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1F属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2C属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1F 进攻指数 66，2C 防守指数 66；2C 进攻指数 66，1F 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.63,
      "away": 1.53
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-30",
      "rawTime": "12:00 UTC-5",
      "homeName": "2E",
      "awayName": "2I"
    },
    "probabilities": [
      45,
      21,
      34
    ],
    "confidence": 73,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2E 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "2E属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2I属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "2E 进攻指数 66，2I 防守指数 66；2I 进攻指数 66，2E 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.6,
      "away": 1.33
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1i-3cdfgh-77",
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
      "code": "3CDFGH",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-30",
      "rawTime": "17:00 UTC-4",
      "homeName": "1I",
      "awayName": "3C/D/F/G/H"
    },
    "probabilities": [
      42,
      20,
      38
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1I 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1I属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3C/D/F/G/H属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1I 进攻指数 66，3C/D/F/G/H 防守指数 66；3C/D/F/G/H 进攻指数 66，1I 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.56,
      "away": 1.49
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1a-3cefhi-79",
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
      "code": "3CEFHI",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-06-30",
      "rawTime": "19:00 UTC-6",
      "homeName": "1A",
      "awayName": "3C/E/F/H/I"
    },
    "probabilities": [
      48,
      20,
      32
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1A 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "1-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1A属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3C/E/F/H/I属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1A 进攻指数 66，3C/E/F/H/I 防守指数 66；3C/E/F/H/I 进攻指数 66，1A 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.74,
      "away": 1.36
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1l-3ehijk-80",
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
      "code": "3EHIJK",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-01",
      "rawTime": "12:00 UTC-4",
      "homeName": "1L",
      "awayName": "3E/H/I/J/K"
    },
    "probabilities": [
      40,
      20,
      40
    ],
    "confidence": 68,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 1L 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "0-1",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1L属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3E/H/I/J/K属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1L 进攻指数 66，3E/H/I/J/K 防守指数 66；3E/H/I/J/K 进攻指数 66，1L 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.57,
      "away": 1.59
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1g-3aehij-82",
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
      "code": "3AEHIJ",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-01",
      "rawTime": "13:00 UTC-7",
      "homeName": "1G",
      "awayName": "3A/E/H/I/J"
    },
    "probabilities": [
      43,
      20,
      37
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1G 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1G属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3A/E/H/I/J属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1G 进攻指数 66，3A/E/H/I/J 防守指数 66；3A/E/H/I/J 进攻指数 66，1G 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.59,
      "away": 1.47
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1d-3befij-81",
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
      "code": "3BEFIJ",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-01",
      "rawTime": "17:00 UTC-7",
      "homeName": "1D",
      "awayName": "3B/E/F/I/J"
    },
    "probabilities": [
      41,
      21,
      38
    ],
    "confidence": 68,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 1D 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1D属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3B/E/F/I/J属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1D 进攻指数 66，3B/E/F/I/J 防守指数 66；3B/E/F/I/J 进攻指数 66，1D 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.49,
      "away": 1.44
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-02",
      "rawTime": "12:00 UTC-7",
      "homeName": "1H",
      "awayName": "2J"
    },
    "probabilities": [
      44,
      20,
      36
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 1H 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1H属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2J属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1H 进攻指数 66，2J 防守指数 66；2J 进攻指数 66，1H 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.61,
      "away": 1.45
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-02",
      "rawTime": "19:00 UTC-4",
      "homeName": "2K",
      "awayName": "2L"
    },
    "probabilities": [
      47,
      20,
      33
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2K 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "2K属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2L属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "2K 进攻指数 66，2L 防守指数 66；2L 进攻指数 66，2K 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.72,
      "away": 1.4
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1b-3efgij-85",
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
      "code": "3EFGIJ",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-02",
      "rawTime": "20:00 UTC-7",
      "homeName": "1B",
      "awayName": "3E/F/G/I/J"
    },
    "probabilities": [
      44,
      21,
      35
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1B 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1B属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3E/F/G/I/J属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1B 进攻指数 66，3E/F/G/I/J 防守指数 66；3E/F/G/I/J 进攻指数 66，1B 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.54,
      "away": 1.35
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-03",
      "rawTime": "13:00 UTC-5",
      "homeName": "2D",
      "awayName": "2G"
    },
    "probabilities": [
      47,
      21,
      32
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 2D 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "2D属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2G属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "2D 进攻指数 66，2G 防守指数 66；2G 进攻指数 66，2D 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.6,
      "away": 1.28
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-03",
      "rawTime": "18:00 UTC-4",
      "homeName": "1J",
      "awayName": "2H"
    },
    "probabilities": [
      45,
      21,
      34
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1J 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1J属于均衡型，场均进球参考值 1.2，大胜倾向 12%。2H属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1J 进攻指数 66，2H 防守指数 66；2H 进攻指数 66，1J 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.56,
      "away": 1.33
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "1k-3deijl-87",
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
      "code": "3DEIJL",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-03",
      "rawTime": "20:30 UTC-5",
      "homeName": "1K",
      "awayName": "3D/E/I/J/L"
    },
    "probabilities": [
      45,
      20,
      35
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 1K 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "1K属于均衡型，场均进球参考值 1.2，大胜倾向 12%。3D/E/I/J/L属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "1K 进攻指数 66，3D/E/I/J/L 防守指数 66；3D/E/I/J/L 进攻指数 66，1K 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.62,
      "away": 1.42
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-04",
      "rawTime": "12:00 UTC-5",
      "homeName": "W73",
      "awayName": "W75"
    },
    "probabilities": [
      41,
      21,
      38
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W73 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W73属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W75属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W73 进攻指数 66，W75 防守指数 66；W75 进攻指数 66，W73 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.53,
      "away": 1.45
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-04",
      "rawTime": "17:00 UTC-4",
      "homeName": "W74",
      "awayName": "W77"
    },
    "probabilities": [
      42,
      21,
      37
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W74 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W74属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W77属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W74 进攻指数 66，W77 防守指数 66；W77 进攻指数 66，W74 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.48,
      "away": 1.37
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-05",
      "rawTime": "16:00 UTC-4",
      "homeName": "W76",
      "awayName": "W78"
    },
    "probabilities": [
      41,
      20,
      39
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W76 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W76属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W78属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W76 进攻指数 66，W78 防守指数 66；W78 进攻指数 66，W76 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.55,
      "away": 1.53
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-05",
      "rawTime": "18:00 UTC-6",
      "homeName": "W79",
      "awayName": "W80"
    },
    "probabilities": [
      45,
      21,
      34
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W79 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W79属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W80属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W79 进攻指数 66，W80 防守指数 66；W80 进攻指数 66，W79 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.62,
      "away": 1.36
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-06",
      "rawTime": "14:00 UTC-5",
      "homeName": "W83",
      "awayName": "W84"
    },
    "probabilities": [
      44,
      20,
      36
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W83 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W83属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W84属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W83 进攻指数 66，W84 防守指数 66；W84 进攻指数 66，W83 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.63,
      "away": 1.44
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-06",
      "rawTime": "17:00 UTC-7",
      "homeName": "W81",
      "awayName": "W82"
    },
    "probabilities": [
      42,
      21,
      37
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W81 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W81属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W82属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W81 进攻指数 66，W82 防守指数 66；W82 进攻指数 66，W81 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.53,
      "away": 1.41
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-07",
      "rawTime": "12:00 UTC-4",
      "homeName": "W86",
      "awayName": "W88"
    },
    "probabilities": [
      39,
      21,
      40
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W88 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "0-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W86属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W88属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W86 进攻指数 66，W88 防守指数 66；W88 进攻指数 66，W86 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.42,
      "away": 1.42
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-07",
      "rawTime": "13:00 UTC-7",
      "homeName": "W85",
      "awayName": "W87"
    },
    "probabilities": [
      48,
      21,
      31
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W85 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "2-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W85属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W87属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W85 进攻指数 66，W87 防守指数 66；W87 进攻指数 66，W85 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.65,
      "away": 1.28
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-09",
      "rawTime": "16:00 UTC-4",
      "homeName": "W89",
      "awayName": "W90"
    },
    "probabilities": [
      39,
      20,
      41
    ],
    "confidence": 68,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W90 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "0-1",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W89属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W90属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W89 进攻指数 66，W90 防守指数 66；W90 进攻指数 66，W89 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.53,
      "away": 1.59
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-10",
      "rawTime": "12:00 UTC-7",
      "homeName": "W93",
      "awayName": "W94"
    },
    "probabilities": [
      49,
      20,
      31
    ],
    "confidence": 73,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W93 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W93属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W94属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W93 进攻指数 66，W94 防守指数 66；W94 进攻指数 66，W93 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.68,
      "away": 1.3
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-11",
      "rawTime": "17:00 UTC-4",
      "homeName": "W91",
      "awayName": "W92"
    },
    "probabilities": [
      40,
      20,
      40
    ],
    "confidence": 70,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W91 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "0-1",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W91属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W92属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W91 进攻指数 66，W92 防守指数 66；W92 进攻指数 66，W91 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.58,
      "away": 1.58
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-11",
      "rawTime": "20:00 UTC-5",
      "homeName": "W95",
      "awayName": "W96"
    },
    "probabilities": [
      39,
      21,
      40
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W96 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "1-2",
        "chance": 9
      },
      {
        "score": "2-1",
        "chance": 8
      },
      {
        "score": "0-1",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W95属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W96属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W95 进攻指数 66，W96 防守指数 66；W96 进攻指数 66，W95 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.47,
      "away": 1.49
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-14",
      "rawTime": "14:00 UTC-5",
      "homeName": "W97",
      "awayName": "W98"
    },
    "probabilities": [
      47,
      21,
      32
    ],
    "confidence": 74,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W97 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "2-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W97属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W98属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W97 进攻指数 66，W98 防守指数 66；W98 进攻指数 66，W97 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.61,
      "away": 1.26
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w99-w100-102",
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
      "code": "W100",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-15",
      "rawTime": "15:00 UTC-4",
      "homeName": "W99",
      "awayName": "W100"
    },
    "probabilities": [
      42,
      20,
      38
    ],
    "confidence": 69,
    "tag": "均衡",
    "summary": "外部赛程数据已更新。本场模型倾向 W99 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      },
      {
        "score": "1-0",
        "chance": 7
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W99属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W100属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W99 进攻指数 66，W100 防守指数 66；W100 进攻指数 66，W99 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.59,
      "away": 1.49
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "l101-l102-103",
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
      "code": "L101",
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
      "code": "L102",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-18",
      "rawTime": "17:00 UTC-4",
      "homeName": "L101",
      "awayName": "L102"
    },
    "probabilities": [
      46,
      21,
      33
    ],
    "confidence": 71,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 L101 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 12
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 9
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "L101属于均衡型，场均进球参考值 1.2，大胜倾向 12%。L102属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "L101 进攻指数 66，L102 防守指数 66；L102 进攻指数 66，L101 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.59,
      "away": 1.32
    },
    "analysisUpdated": "2026-06-19"
  },
  {
    "id": "w101-w102-104",
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
      "code": "W101",
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
      "code": "W102",
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
      "fetchedAt": "2026-06-19T11:17:25.251Z",
      "rawDate": "2026-07-19",
      "rawTime": "15:00 UTC-4",
      "homeName": "W101",
      "awayName": "W102"
    },
    "probabilities": [
      44,
      21,
      35
    ],
    "confidence": 72,
    "tag": "稳健",
    "summary": "外部赛程数据已更新。本场模型倾向 W101 方向，最可能比分为 1-1。判断综合了排名实力、攻防风格、近期状态、小组出线压力和净胜球需求。",
    "scoreOdds": [
      {
        "score": "1-1",
        "chance": 11
      },
      {
        "score": "2-1",
        "chance": 9
      },
      {
        "score": "1-0",
        "chance": 8
      },
      {
        "score": "1-2",
        "chance": 8
      }
    ],
    "motivation": {
      "phase": "knockout",
      "label": "淘汰赛必须分胜负",
      "intensity": 1,
      "drawValue": 0,
      "goalNeed": 1,
      "note": "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    },
    "tacticalProfile": {
      "home": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      },
      "away": {
        "tempo": "均衡型",
        "avgGoalsFor": 1.2,
        "avgGoalsAgainst": 0.76,
        "bigWinRate": 12,
        "cleanSheetRate": 16,
        "failedToScoreRate": 32
      }
    },
    "marketSignals": {
      "status": "missing-key",
      "provider": "The Odds API",
      "weight": 0,
      "note": "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    },
    "expertSignals": {
      "status": "no-match",
      "provider": "public-rss",
      "weight": 0,
      "note": "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    },
    "insights": [
      "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。",
      "W101属于均衡型，场均进球参考值 1.2，大胜倾向 12%。W102属于均衡型，场均进球参考值 1.2，大胜倾向 12%。",
      "W101 进攻指数 66，W102 防守指数 66；W102 进攻指数 66，W101 防守指数 66。",
      "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    "expectedGoals": {
      "home": 1.58,
      "away": 1.36
    },
    "analysisUpdated": "2026-06-19"
  }
];
