/* 手書き問題(正答位置は tools/rebalance-manual.mjs で均等化済み)
 * 再実行: cd tools && npm run rebalance */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "m-brew-08",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "挽きたてのコーヒー粉をすぐ使うべき理由は?",
    "choices": [
      {
        "id": "a",
        "text": "粉は時間がたつと硬くなるため"
      },
      {
        "id": "b",
        "text": "挽きたてでないと抽出できないため"
      },
      {
        "id": "c",
        "text": "カフェインが消えてしまうため"
      },
      {
        "id": "d",
        "text": "粉は空気に触れる面積が大きく、酸化(風味劣化)が早いため"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "粉にすると空気に触れる表面積が増え、香り成分の揮発と酸化が急速に進みます。抽出直前に挽くのが基本です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "鮮度"
    ]
  },
  {
    "id": "m-brew-09",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "エスプレッソの表面にできるクレマ(金色の泡)は何を示す?",
    "choices": [
      {
        "id": "a",
        "text": "適切な圧力で抽出された新鮮なエスプレッソの印"
      },
      {
        "id": "b",
        "text": "失敗した抽出の印"
      },
      {
        "id": "c",
        "text": "ミルクが混ざった痕跡"
      },
      {
        "id": "d",
        "text": "豆が古い証拠"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "クレマは高圧抽出で生まれる金色の泡で、適切に抽出されたエスプレッソの目印です。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "エスプレッソ"
    ]
  },
  {
    "id": "m-brew-10",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "抽出が不足(アンダーエクストラクション)したコーヒーの味の傾向は?",
    "choices": [
      {
        "id": "a",
        "text": "苦くて濃い"
      },
      {
        "id": "b",
        "text": "薄く、酸味が尖り物足りない"
      },
      {
        "id": "c",
        "text": "変化しない"
      },
      {
        "id": "d",
        "text": "必ず甘くなる"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "抽出不足では風味成分が十分に取り出されず、薄く尖った酸味の物足りない味になります。逆に抽出しすぎると苦味・雑味が強まります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "抽出理論"
    ]
  },
  {
    "id": "m-brew-11",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "抽出が過剰(オーバーエクストラクション)になったコーヒーの味の傾向は?",
    "choices": [
      {
        "id": "a",
        "text": "甘くなる"
      },
      {
        "id": "b",
        "text": "酸味だけが消える"
      },
      {
        "id": "c",
        "text": "苦味や渋み・雑味が強く出る"
      },
      {
        "id": "d",
        "text": "変わらない"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "抽出しすぎると後半の苦み・雑味成分まで溶け出し、苦く渋い味になります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "抽出理論"
    ]
  },
  {
    "id": "m-brew-12",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "コーヒー豆の挽き目を細かくすると抽出はどう変化する?",
    "choices": [
      {
        "id": "a",
        "text": "抽出されなくなる"
      },
      {
        "id": "b",
        "text": "変わらない"
      },
      {
        "id": "c",
        "text": "必ず薄くなる"
      },
      {
        "id": "d",
        "text": "抽出が速くなり、出やすくなる(過剰になりやすい)"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "挽き目が細かいほどお湯との接触面積が増え抽出が速くなります。器具に合わせた挽き目が重要です。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "挽き目"
    ]
  },
  {
    "id": "m-brew-13",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "スターバックス オリガミ® の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "お湯を注ぐだけで本格ドリップが楽しめる持ち運べるドリップバッグ"
      },
      {
        "id": "b",
        "text": "専用マシンが必要なカプセル"
      },
      {
        "id": "c",
        "text": "粉末のインスタントコーヒー"
      },
      {
        "id": "d",
        "text": "冷凍コーヒー"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "オリガミは折り紙に由来する名前のドリップバッグ式コーヒーで、器具なしにお湯を注ぐだけでドリップコーヒーが楽しめます。",
    "sources": [
      {
        "title": "スターバックス オリガミ | スターバックス",
        "url": "https://product.starbucks.co.jp/beans/origami/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "商品"
    ]
  },
  {
    "id": "m-brew-14",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "スターバックス ヴィア® の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "焙煎前の生豆"
      },
      {
        "id": "b",
        "text": "お湯を注ぐだけでドリップに近い味わいが楽しめるスティックタイプ"
      },
      {
        "id": "c",
        "text": "コーヒー味の飴"
      },
      {
        "id": "d",
        "text": "抽出に1時間かかる"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "ヴィアは独自の微細な挽き技術で、お湯を注ぐだけでドリップコーヒーに近い味わいを楽しめるスティックコーヒーです。",
    "sources": [
      {
        "title": "スターバックス ヴィア | スターバックス",
        "url": "https://product.starbucks.co.jp/beans/via/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "商品"
    ]
  },
  {
    "id": "m-brew-15",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "水出しコーヒー(コールドブリュー)の味わいの特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "強い酸味と苦味"
      },
      {
        "id": "b",
        "text": "必ず薄い"
      },
      {
        "id": "c",
        "text": "熱を加えず長時間抽出するため、酸味・苦みが穏やかでまろやか"
      },
      {
        "id": "d",
        "text": "エスプレッソと同じ濃さ"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "低温でじっくり抽出するため、酸味や苦みが抑えられまろやかでなめらかな味わいになります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "水出し"
    ]
  },
  {
    "id": "m-brew-16",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "開封したコーヒー豆の理想的な使い切り期間(スターバックスの目安)は?",
    "choices": [
      {
        "id": "a",
        "text": "約半年"
      },
      {
        "id": "b",
        "text": "期限はない"
      },
      {
        "id": "c",
        "text": "開封当日のみ"
      },
      {
        "id": "d",
        "text": "約1週間以内"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "開封後は空気・光・湿気で風味が劣化するため、密閉容器で常温保存し約1週間以内に使い切るのが理想です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "鮮度",
      "保存"
    ]
  },
  {
    "id": "m-brew-17",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "コーヒー豆を冷蔵庫・冷凍庫で保存することが推奨されない主な理由は?",
    "choices": [
      {
        "id": "a",
        "text": "出し入れ時の結露と、他の食品のにおい移りで風味が損なわれるから"
      },
      {
        "id": "b",
        "text": "豆が凍って割れるから"
      },
      {
        "id": "c",
        "text": "冷蔵庫では酸化が進むから"
      },
      {
        "id": "d",
        "text": "豆が発芽するから"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "冷蔵・冷凍は温度差による結露(湿気)とにおい移りが風味を損なう原因になるため、密閉して常温保存が推奨されます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "保存"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
