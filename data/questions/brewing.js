/* 自動生成: tools/migrate-questions.mjs による旧形式→新形式変換
 * 手編集可。変更後は cd tools && npm run validate で検証すること。 */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "brew-01",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "コーヒープレス(フレンチプレス)の標準的な抽出時間と挽き目は?",
    "choices": [
      {
        "id": "a",
        "text": "約30秒・極細挽き"
      },
      {
        "id": "b",
        "text": "約2分・中細挽き"
      },
      {
        "id": "c",
        "text": "約4分・粗挽き"
      },
      {
        "id": "d",
        "text": "約10分・極粗挽き"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "コーヒープレスは粗挽きの粉をお湯に約4分浸してから押し下げます。フィルターでろ過しないためオイル分が残り、フルボディの味わいになります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  },
  {
    "id": "brew-02",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "エスプレッソの抽出時間と挽き目の組み合わせとして正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "約4分・粗挽き"
      },
      {
        "id": "b",
        "text": "約1分・中挽き"
      },
      {
        "id": "c",
        "text": "約5秒・飲用直前に挽かない"
      },
      {
        "id": "d",
        "text": "約18〜23秒・極細挽き"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "エスプレッソは極細挽きの粉に高圧でお湯を通し、約18〜23秒で抽出します。早すぎると薄く、遅すぎると苦くなります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  },
  {
    "id": "brew-03",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "コーヒー抽出に適したお湯の温度はどのくらい?",
    "choices": [
      {
        "id": "a",
        "text": "90〜96℃"
      },
      {
        "id": "b",
        "text": "60〜70℃"
      },
      {
        "id": "c",
        "text": "100℃の沸騰直後"
      },
      {
        "id": "d",
        "text": "50℃以下"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "適温は90〜96℃です。温度が高すぎると雑味・苦味が出やすく、低すぎると抽出不足で薄いコーヒーになります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  },
  {
    "id": "brew-04",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "ドリップコーヒーの一般的な分量の目安は?",
    "choices": [
      {
        "id": "a",
        "text": "コーヒー30gにお湯100ml"
      },
      {
        "id": "b",
        "text": "コーヒー10gにお湯180ml"
      },
      {
        "id": "c",
        "text": "コーヒー5gにお湯500ml"
      },
      {
        "id": "d",
        "text": "コーヒー50gにお湯50ml"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "180ml(約1杯)のお湯に対してコーヒー粉10g(大さじ2杯程度)が基本の比率です。濃さは好みに合わせて調整します。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  },
  {
    "id": "brew-05",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "ペーパードリップで最初に少量のお湯を注いで待つ工程(蒸らし)の目的は?",
    "choices": [
      {
        "id": "a",
        "text": "粉を冷まして苦味を抑えるため"
      },
      {
        "id": "b",
        "text": "ペーパーのにおいを落とすため"
      },
      {
        "id": "c",
        "text": "粉に含まれるガスを抜き、均一に抽出しやすくするため"
      },
      {
        "id": "d",
        "text": "カフェインを先に抽出するため"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "新鮮な粉はガス(二酸化炭素)を多く含み、お湯を注ぐと膨らみます。約30秒蒸らすことでガスが抜け、その後の抽出が均一になります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  },
  {
    "id": "brew-06",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "開封後のコーヒー豆の保存方法として最も適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "透明な瓶に入れて日光に当てる"
      },
      {
        "id": "b",
        "text": "ジッパーを開けたまま冷蔵庫の野菜室に入れる"
      },
      {
        "id": "c",
        "text": "水に浸して冷蔵保存する"
      },
      {
        "id": "d",
        "text": "密閉容器に入れ、直射日光を避けて常温で保存"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "光・空気・湿気は風味劣化の原因です。密閉容器で常温保存し、開封後は約1週間以内に使い切るのが理想です。冷蔵は結露やにおい移りの原因になります。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  },
  {
    "id": "brew-07",
    "category": "抽出方法と鮮度",
    "type": "single",
    "question": "抽出器具と仕上がりの特徴の組み合わせで正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "コーヒープレス:オイル分が残りフルボディ"
      },
      {
        "id": "b",
        "text": "ペーパードリップ:オイル分が残りフルボディ"
      },
      {
        "id": "c",
        "text": "エスプレッソ:ライトボディで大容量"
      },
      {
        "id": "d",
        "text": "水出し(コールドブリュー):強い酸味と苦み"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "コーヒープレスは金属フィルターのため油脂や微粉末が残りフルボディになります。水出しは酸味・苦味が穏やかでまろやかな味わいが特徴です。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "抽出"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
