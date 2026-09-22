/* 手書き問題(正答位置は tools/rebalance-manual.mjs で均等化済み)
 * 再実行: cd tools && npm run rebalance */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "m-basic-08",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "ロブスタ種の特徴として正しいものはどれ?",
    "choices": [
      {
        "id": "a",
        "text": "低地でも育ちやすく、カフェイン含有量がアラビカ種より多い"
      },
      {
        "id": "b",
        "text": "高地でしか育たず栽培が難しい"
      },
      {
        "id": "c",
        "text": "風味が最も洗練されており最高級品とされる"
      },
      {
        "id": "d",
        "text": "スターバックスの主力品種である"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ロブスタ種はアラビカ種より低地で栽培でき病害虫にも強い品種ですが、風味の洗練度は低くカフェインが多いのが特徴です。スターバックスはアラビカ種のみを購買しています。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "品種"
    ]
  },
  {
    "id": "m-basic-09",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "ティピカ種の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "病害に強く低地で育つ"
      },
      {
        "id": "b",
        "text": "高地で栽培すると優れた品質になるが、さび病などの病害に弱い"
      },
      {
        "id": "c",
        "text": "収穫量が少なく低品質"
      },
      {
        "id": "d",
        "text": "ロブスタ種に属する栽培品種"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "ティピカ種はアラビカ種の代表的な栽培品種で、高地栽培で優れた品質を生みますが病害には弱い品種です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "品種"
    ]
  },
  {
    "id": "m-basic-10",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "ブルボン種はどの種に属する栽培品種?",
    "choices": [
      {
        "id": "a",
        "text": "ロブスタ種"
      },
      {
        "id": "b",
        "text": "リベリカ種"
      },
      {
        "id": "c",
        "text": "アラビカ種"
      },
      {
        "id": "d",
        "text": "独立した別の植物種"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "栽培品種は種の下に位置する分類で、ブルボン種はアラビカ種に属する栽培品種のひとつです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "品種"
    ]
  },
  {
    "id": "m-basic-11",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "コーヒーの木の花について正しいのはどれ?",
    "choices": [
      {
        "id": "a",
        "text": "黄色い大きな花を咲かせる"
      },
      {
        "id": "b",
        "text": "花は咲かず実だけがなる"
      },
      {
        "id": "c",
        "text": "ピンク色の花が1年中咲く"
      },
      {
        "id": "d",
        "text": "白く、ジャスミンに似た香りの花を咲かせる"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "コーヒーの木は白いジャスミンに似た香りの花を咲かせます。花は数日で散り、その後果実(コーヒーチェリー)が実ります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "栽培"
    ]
  },
  {
    "id": "m-basic-12",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "コーヒーチェリーが完熟したときの色は?",
    "choices": [
      {
        "id": "a",
        "text": "深い赤色"
      },
      {
        "id": "b",
        "text": "黄色"
      },
      {
        "id": "c",
        "text": "緑色"
      },
      {
        "id": "d",
        "text": "黒色"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "コーヒーチェリーは熟すと深い赤色になります。手作業で熟した実だけを選んで収穫することが品質に直結します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "収穫"
    ]
  },
  {
    "id": "m-basic-13",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "コーヒー栽培に適さない環境条件はどれ?",
    "choices": [
      {
        "id": "a",
        "text": "標高の高い地域"
      },
      {
        "id": "b",
        "text": "霜が降りる寒冷な地域"
      },
      {
        "id": "c",
        "text": "雨季と乾季がある地域"
      },
      {
        "id": "d",
        "text": "年間を通じて温暖な地域"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "コーヒーの木は霜に弱いため、霜の降りない熱帯・亜熱帯(コーヒーベルト)でのみ栽培されます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "栽培"
    ]
  },
  {
    "id": "m-basic-14",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "手摘みによる選択的収穫(セレクティブピッキング)の利点は?",
    "choices": [
      {
        "id": "a",
        "text": "作業が最も早い"
      },
      {
        "id": "b",
        "text": "機械よりコストが安い"
      },
      {
        "id": "c",
        "text": "熟した実だけを摘み取れるため品質が安定する"
      },
      {
        "id": "d",
        "text": "未熟な豆も集められる"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "熟度のばらつきを避け、熟した赤い実だけを収穫できるため高品質なコーヒーになります。平地で効率重視の場合は機械収穫や一斉摘み取りも行われます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "収穫"
    ]
  },
  {
    "id": "m-basic-15",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「エイジドコーヒー」とは?",
    "choices": [
      {
        "id": "a",
        "text": "焙煎後に長期保存した豆"
      },
      {
        "id": "b",
        "text": "古くなって酸化したコーヒー"
      },
      {
        "id": "c",
        "text": "樽の中で抽出したコーヒー"
      },
      {
        "id": "d",
        "text": "生豆のまま3〜5年貯蔵・熟成させたコーヒー"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "エイジドコーヒーは生豆のまま3〜5年熟成させたもので、杉を思わせる風味やスパイシー感が増します。アジア/太平洋地域の一部のコーヒーが用いられます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "エイジド"
    ]
  },
  {
    "id": "m-basic-16",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "スターバックスで採用されているカフェイン除去法は?",
    "choices": [
      {
        "id": "a",
        "text": "二酸化炭素抽出法とスイスウォータープロセス"
      },
      {
        "id": "b",
        "text": "水で煮沸する方法のみ"
      },
      {
        "id": "c",
        "text": "有機溶媒を使う方法のみ"
      },
      {
        "id": "d",
        "text": "カフェイン除去は行っていない"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "スターバックスでは二酸化炭素抽出法・スイスウォータープロセスでカフェイン除去されたコーヒーを提供しています。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "デカフェ"
    ]
  },
  {
    "id": "m-basic-17",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "アラビカ種でピーベリーが発生する割合の目安は?",
    "choices": [
      {
        "id": "a",
        "text": "約50%"
      },
      {
        "id": "b",
        "text": "約5〜10%"
      },
      {
        "id": "c",
        "text": "約30%"
      },
      {
        "id": "d",
        "text": "ほぼ0%"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "チェリーの中の2つの豆のうち片方だけが丸く育つピーベリーは、アラビカ種で通常5〜10%の割合で発生します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "豆の構造"
    ]
  },
  {
    "id": "m-basic-18",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "コーヒーは何科の植物?",
    "choices": [
      {
        "id": "a",
        "text": "バラ科"
      },
      {
        "id": "b",
        "text": "マメ科"
      },
      {
        "id": "c",
        "text": "アカネ科"
      },
      {
        "id": "d",
        "text": "ブドウ科"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "コーヒーはアカネ科コーヒー属(Coffea)の常緑低木です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "植物学"
    ]
  },
  {
    "id": "m-basic-19",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「シェイド グロウン」コーヒーとは?",
    "choices": [
      {
        "id": "a",
        "text": "温室で栽培されたコーヒー"
      },
      {
        "id": "b",
        "text": "日陰で乾燥させたコーヒー"
      },
      {
        "id": "c",
        "text": "遮光パッケージのコーヒー"
      },
      {
        "id": "d",
        "text": "コーヒーの木に日陰をもたらす木々(シェイドツリー)の下で栽培されたコーヒー"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "シェイドグロウンは日陰を作る木々の下で栽培する方法で、鳥の生息地保全など生物多様性への配慮につながります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "栽培",
      "エシカル"
    ]
  },
  {
    "id": "m-basic-20",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「ハイブリッド種」の苗木の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "気候変動と病気に強い品種"
      },
      {
        "id": "b",
        "text": "見た目がカラフル"
      },
      {
        "id": "c",
        "text": "収穫まで1週間の品種"
      },
      {
        "id": "d",
        "text": "カフェインを含まない品種"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ハイブリッド種は気候変動と病気に強い品種の苗木で、さび病などへの耐性を高める研究の成果です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "品種",
      "エシカル"
    ]
  },
  {
    "id": "m-basic-21",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「テロワール」の意味は?",
    "choices": [
      {
        "id": "a",
        "text": "コーヒーの焙煎度合い"
      },
      {
        "id": "b",
        "text": "特定の栽培地特有の土壌・土地・微気候の総称"
      },
      {
        "id": "c",
        "text": "抽出器具の一種"
      },
      {
        "id": "d",
        "text": "コーヒーのグレード制度"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "テロワールはフランス語で「土壌・土地」を意味し、栽培地特有の条件が育てられる品種と風味を決定づけます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "栽培"
    ]
  },
  {
    "id": "m-basic-22",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "焙煎前のコーヒー豆を何と呼ぶ?",
    "choices": [
      {
        "id": "a",
        "text": "煎り豆"
      },
      {
        "id": "b",
        "text": "パーチメント"
      },
      {
        "id": "c",
        "text": "生豆(グリーンビーン)"
      },
      {
        "id": "d",
        "text": "チェリー豆"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "コーヒー豆はもともとコーヒーチェリーに包まれた種(生豆)で、これを焙煎したものがコーヒー豆として届きます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "豆の構造"
    ]
  },
  {
    "id": "m-basic-23",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「パーチメント」とは?",
    "choices": [
      {
        "id": "a",
        "text": "コーヒーの外側の果肉"
      },
      {
        "id": "b",
        "text": "焙煎時にできる焦げた皮"
      },
      {
        "id": "c",
        "text": "コーヒー豆の包装紙"
      },
      {
        "id": "d",
        "text": "果肉を除去した後も生豆を包んでいる内果皮の保護膜"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "パーチメント(内果皮)は果肉除去後も豆を包む保護膜で、乾燥工程の後に除去されます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "豆の構造"
    ]
  },
  {
    "id": "m-basic-24",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "高標高の農園で栽培されたコーヒーに見られる特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "キリッとした酸味をともなう強い風味(鮮やかな味わい)"
      },
      {
        "id": "b",
        "text": "酸味がほぼなく平坦な味"
      },
      {
        "id": "c",
        "text": "必ずフルボディになる"
      },
      {
        "id": "d",
        "text": "カフェインが多くなる"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "口の中の前の方に印象が残るキリッとした酸味をともなう強い風味は「鮮やかな」と表現され、標高の高い農園のコーヒーに見られる特徴です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "栽培",
      "テイスティング"
    ]
  },
  {
    "id": "m-basic-25",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "コーヒーの木が実をつけ始めるまでの期間と、花が咲く季節の関係として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "植えた年に実がなる"
      },
      {
        "id": "b",
        "text": "雨季の後に開花し、実は数か月かけて成熟する"
      },
      {
        "id": "c",
        "text": "冬に花が咲き翌日収穫できる"
      },
      {
        "id": "d",
        "text": "花と実は関係ない"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "コーヒーの木は植えてから約3〜4年で収穫可能になり、雨季の後の開花から果実が成熟するまで数か月かかります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "栽培"
    ]
  },
  {
    "id": "m-basic-26",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「大農園(エステート)」の説明として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "国が運営する試験農場"
      },
      {
        "id": "b",
        "text": "輸出専門の倉庫施設"
      },
      {
        "id": "c",
        "text": "栽培・収穫・加工を一箇所で行い品質を直接管理できる生産者"
      },
      {
        "id": "d",
        "text": "消費国の焙煎工場"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "大農園は栽培から加工まで一貫して行い、全プロセスで品質を直接管理できる生産形態です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "生産"
    ]
  },
  {
    "id": "m-basic-27",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "「インポーター」の役割は?",
    "choices": [
      {
        "id": "a",
        "text": "店舗でコーヒーを抽出する人"
      },
      {
        "id": "b",
        "text": "生豆を栽培する農家"
      },
      {
        "id": "c",
        "text": "コーヒーの品質検査官"
      },
      {
        "id": "d",
        "text": "加工場や協同組合から生豆を引き受け・購買し、ロースト工場への出荷手配をする業者"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "インポーターは契約に基づき、エクスポーターや生産者からの生豆をロースト工場へ出荷する手配をします。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "流通"
    ]
  },
  {
    "id": "m-basic-28",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "赤道付近の生産地の収穫の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "年に2回収穫できる地域がある"
      },
      {
        "id": "b",
        "text": "収穫は全世界で同じ月"
      },
      {
        "id": "c",
        "text": "10年に1度しか収穫できない"
      },
      {
        "id": "d",
        "text": "収穫は機械のみで行われる"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "赤道に近い地域では雨季が年2回あるため、年に2回収穫できる産地があります(例:コロンビアの一部)。高緯度の産地は年1回が一般的です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "収穫"
    ]
  },
  {
    "id": "m-basic-29",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "生豆と焙煎済みの豆の違いとして正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "生豆でもそのまま抽出できる"
      },
      {
        "id": "b",
        "text": "生豆は焙煎して初めてコーヒー特有の香りと風味が引き出される"
      },
      {
        "id": "c",
        "text": "生豆の方が香りが強い"
      },
      {
        "id": "d",
        "text": "生豆は食用に適さないため捨てられる"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "生豆はほとんど無味無臭で、焙煎の熱によって初めてコーヒー特有の香り・風味・色が生まれます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "焙煎"
    ]
  },
  {
    "id": "m-basic-30",
    "category": "コーヒーの基礎知識",
    "type": "single",
    "question": "世界で広く流通しているコーヒーの主要な2品種は?",
    "choices": [
      {
        "id": "a",
        "text": "ティピカ種とブルボン種"
      },
      {
        "id": "b",
        "text": "アラビカ種とリベリカ種"
      },
      {
        "id": "c",
        "text": "アラビカ種とロブスタ種"
      },
      {
        "id": "d",
        "text": "ゲイシャ種とティピカ種"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "流通するコーヒーの主要2品種はアラビカ種とロブスタ種です。ティピカ・ブルボン・ゲイシャはアラビカ種の栽培品種です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "品種"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
