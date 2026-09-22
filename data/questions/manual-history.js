/* 手書き問題(正答位置は tools/rebalance-manual.mjs で均等化済み)
 * 再実行: cd tools && npm run rebalance */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "m-hist-09",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "スターバックスの創業者3名は?",
    "choices": [
      {
        "id": "a",
        "text": "ハワード・シュルツ、アルフレッド・ピート、レイ・クロック"
      },
      {
        "id": "b",
        "text": "ジェリー・ボールドウィン、ゼブ・シーガル、ゴードン・ボウカー"
      },
      {
        "id": "c",
        "text": "シアトルの3人のシェフ"
      },
      {
        "id": "d",
        "text": "不明"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "1971年、ジェリー・ボールドウィン、ゼブ・シーガル、ゴードン・ボウカーの3人がシアトルで創業しました。",
    "sources": [
      {
        "title": "スターバックス | 沿革",
        "url": "https://www.starbucks.co.jp/company/history/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "歴史",
      "創業"
    ]
  },
  {
    "id": "m-hist-10",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "スターバックスの創業者たちがコーヒーのローストを学んだ人物は?",
    "choices": [
      {
        "id": "a",
        "text": "ハワード・シュルツ"
      },
      {
        "id": "b",
        "text": "カルディ"
      },
      {
        "id": "c",
        "text": "アルフレッド・ピート(ピーツ・コーヒー&ティー創業者)"
      },
      {
        "id": "d",
        "text": "創業者自身が開発"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "創業者たちはアルフレッド・ピート(アメリカにスペシャルティコーヒーを最初に流行させた人物)から焙煎を学び、当初はピーツの豆を販売していました。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 4,
    "tags": [
      "歴史"
    ]
  },
  {
    "id": "m-hist-11",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "ハワード・シュルツがスターバックスを離れて創業した会社は?",
    "choices": [
      {
        "id": "a",
        "text": "ピーツ・コーヒー"
      },
      {
        "id": "b",
        "text": "タリーズ"
      },
      {
        "id": "c",
        "text": "ドトール"
      },
      {
        "id": "d",
        "text": "イル・ジョルナーレ(Il Giornale)"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "シュルツは1985年にイタリアンスタイルのエスプレッソバー「イル・ジョルナーレ」を創業し、1987年にスターバックスを買収しました。",
    "sources": [
      {
        "title": "スターバックス | 沿革",
        "url": "https://www.starbucks.co.jp/company/history/"
      }
    ],
    "difficulty": 4,
    "tags": [
      "歴史"
    ]
  },
  {
    "id": "m-hist-12",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "最初のスターバックス ラテが提供されたのはいつ?",
    "choices": [
      {
        "id": "a",
        "text": "1984年4月"
      },
      {
        "id": "b",
        "text": "1971年"
      },
      {
        "id": "c",
        "text": "1996年"
      },
      {
        "id": "d",
        "text": "2000年"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "1984年4月、1号店内に設営されたエスプレッソバーで最初のスターバックス ラテが提供されました。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 4,
    "tags": [
      "歴史"
    ]
  },
  {
    "id": "m-hist-13",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "スターバックスが北米以外で最初に進出した国は?",
    "choices": [
      {
        "id": "a",
        "text": "イギリス"
      },
      {
        "id": "b",
        "text": "日本(1996年・銀座)"
      },
      {
        "id": "c",
        "text": "中国"
      },
      {
        "id": "d",
        "text": "韓国"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "1996年、東京・銀座(松屋通り)に日本1号店がオープン。日本は北米以外で初めての進出市場でした。",
    "sources": [
      {
        "title": "スターバックス | 沿革",
        "url": "https://www.starbucks.co.jp/company/history/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "歴史",
      "日本"
    ]
  },
  {
    "id": "m-hist-14",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "2019年に中目黒にオープンした「スターバックス リザーブ® ロースタリー 東京」の位置づけは?",
    "choices": [
      {
        "id": "a",
        "text": "日本最大の普通の店舗"
      },
      {
        "id": "b",
        "text": "本社オフィス"
      },
      {
        "id": "c",
        "text": "コーヒーの焙煎と体験を届ける旗艦的なロースタリー"
      },
      {
        "id": "d",
        "text": "倉庫"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "ロースタリー東京は焙煎所であると同時に、コーヒーへの探求心から生まれた没入型のコーヒー体験を届ける場所です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "歴史",
      "リザーブ"
    ]
  },
  {
    "id": "m-hist-15",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "スターバックス1号店で当初販売していたものは?",
    "choices": [
      {
        "id": "a",
        "text": "ドリンクのエスプレッソ"
      },
      {
        "id": "b",
        "text": "ケーキとサンドイッチ"
      },
      {
        "id": "c",
        "text": "コーヒー豆のみ"
      },
      {
        "id": "d",
        "text": "焙煎したてのコーヒー豆、ティー、スパイス"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "創業時はドリンクの提供はなく、焙煎したてのコーヒー、ティー、スパイスを販売する店でした。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "歴史",
      "創業"
    ]
  },
  {
    "id": "m-hist-16",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "「サードプレイス」の意味は?",
    "choices": [
      {
        "id": "a",
        "text": "職場と自宅の間の、会話やコミュニティ感覚を楽しめる場所"
      },
      {
        "id": "b",
        "text": "3番目の店舗"
      },
      {
        "id": "c",
        "text": "3位の賞"
      },
      {
        "id": "d",
        "text": "3回目の焙煎"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ハワード・シュルツがミラノで感銘を受けたエスプレッソバーの文化をもとにした、職場でも自宅でもない第3の心地よい場所という考え方です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "理念"
    ]
  },
  {
    "id": "m-hist-17",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "ブラックエプロン(コーヒーマスター)だけに認められる業務は?",
    "choices": [
      {
        "id": "a",
        "text": "店長会議への出席"
      },
      {
        "id": "b",
        "text": "コーヒーセミナーの講師"
      },
      {
        "id": "c",
        "text": "焙煎工場での作業"
      },
      {
        "id": "d",
        "text": "商品の発注"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "スターバックスではブラックエプロンを持つコーヒーマスターのみが、コーヒーセミナーの講師を務めることができます。",
    "sources": [
      {
        "title": "コーヒーセミナー | スターバックス",
        "url": "https://www.starbucks.co.jp/seminar/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "ブラックエプロン"
    ]
  },
  {
    "id": "m-hist-18",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "ブラックエプロン認定試験の特徴として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "誰でも無条件で着用できる"
      },
      {
        "id": "b",
        "text": "一度合格すれば永久に有効"
      },
      {
        "id": "c",
        "text": "年に一度行われ、合格すると名前入りの黒いエプロンが支給される"
      },
      {
        "id": "d",
        "text": "店長だけが受けられる"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "ブラックエプロン認定試験は年に一度行われ、合格すると個人の名前入りエプロンが支給されます。合格したコーヒーマスターも毎年受験し、合格回数分の星が付きます。",
    "sources": [
      {
        "title": "スターバックス | Our Mission",
        "url": "https://www.starbucks.co.jp/company/mission.html"
      }
    ],
    "difficulty": 2,
    "tags": [
      "ブラックエプロン"
    ]
  },
  {
    "id": "m-hist-19",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "スターバックスの社名の候補として、航海にちなんだ別の候補名があったとされるが、最終的に選ばれた由来は?",
    "choices": [
      {
        "id": "a",
        "text": "シアトルの灯台"
      },
      {
        "id": "b",
        "text": "創業者の愛犬"
      },
      {
        "id": "c",
        "text": "コーヒー畑の名前"
      },
      {
        "id": "d",
        "text": "小説『白鯨』の一等航海士「スターバック」"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "海洋冒険小説『白鯨(モビー・ディック)』に登場するコーヒー好きの一等航海士「スターバック」から名付けられました。",
    "sources": [
      {
        "title": "スターバックス | 沿革",
        "url": "https://www.starbucks.co.jp/company/history/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "歴史",
      "社名"
    ]
  },
  {
    "id": "m-hist-20",
    "category": "スターバックスの歴史・理念",
    "type": "single",
    "question": "2011年の創業40周年に行われた変更は?",
    "choices": [
      {
        "id": "a",
        "text": "ロゴのリニューアル(サイレンのみのデザインへ)とトリビュート ブレンドの発売"
      },
      {
        "id": "b",
        "text": "社名変更"
      },
      {
        "id": "c",
        "text": "日本撤退"
      },
      {
        "id": "d",
        "text": "ドリンク価格の統一"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "2011年、創業40周年を機にロゴから社名を外しサイレンのみのデザインに刷新。記念ブレンド「トリビュート ブレンド」も発売されました。",
    "sources": [
      {
        "title": "スターバックス | 沿革",
        "url": "https://www.starbucks.co.jp/company/history/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "歴史",
      "ロゴ"
    ]
  },
  {
    "id": "m-eth-01",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスの正式名称は?",
    "choices": [
      {
        "id": "a",
        "text": "Coffee Association For Export"
      },
      {
        "id": "b",
        "text": "Coffee And Farmer Equity Practices"
      },
      {
        "id": "c",
        "text": "Certified Arabica Farm Evaluation"
      },
      {
        "id": "d",
        "text": "Coffee And Fairness Enterprise"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "C.A.F.E.は Coffee And Farmer Equity(コーヒーと農家の公平)の略です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-02",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスが評価する分野の組み合わせとして正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "価格・広告・販売数"
      },
      {
        "id": "b",
        "text": "味・香り・色のみ"
      },
      {
        "id": "c",
        "text": "品質・経済的透明性・社会的責任・環境面のリーダーシップ"
      },
      {
        "id": "d",
        "text": "店舗数・売上・利益"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "C.A.F.E.プラクティスは品質基準を前提に、経済的透明性・社会的責任・環境面へのリーダーシップを評価する調達ガイドラインです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-03",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスの策定を支援した国際環境NGOは?",
    "choices": [
      {
        "id": "a",
        "text": "グリーンピース"
      },
      {
        "id": "b",
        "text": "WWF"
      },
      {
        "id": "c",
        "text": "国連"
      },
      {
        "id": "d",
        "text": "コンサベーション・インターナショナル"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "地球の生物多様性保護に取り組む国際環境NGO、コンサベーション・インターナショナルとの協力で策定されました。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE",
      "パートナー"
    ]
  },
  {
    "id": "m-eth-04",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスが開始された年は?",
    "choices": [
      {
        "id": "a",
        "text": "2004年"
      },
      {
        "id": "b",
        "text": "1996年"
      },
      {
        "id": "c",
        "text": "2013年"
      },
      {
        "id": "d",
        "text": "1971年"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "2004年にC.A.F.E.プラクティスが開始され、同年に最初のファーマーサポートセンターがコスタリカ・サンホセに設立されました。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE",
      "年表"
    ]
  },
  {
    "id": "m-eth-05",
    "category": "エシカル調達",
    "type": "single",
    "question": "「ファーマーサポートセンター」の役割は?",
    "choices": [
      {
        "id": "a",
        "text": "消費者向けの問い合わせ窓口"
      },
      {
        "id": "b",
        "text": "アグロノミスト(農学者)チームが生産者を支援し、持続可能な栽培を促進する拠点"
      },
      {
        "id": "c",
        "text": "豆の販売所"
      },
      {
        "id": "d",
        "text": "焙煎工場"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "ファーマーサポートセンターはC.A.F.E.プラクティスと同年(2004年)に最初の拠点をコスタリカ・サンホセに設立し、農学者チームが生産者のプログラム参加と栽培改善を支援します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "FSC"
    ]
  },
  {
    "id": "m-eth-06",
    "category": "エシカル調達",
    "type": "single",
    "question": "ハシエンダ アルサシア農園について正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "シアトルの焙煎工場"
      },
      {
        "id": "b",
        "text": "日本の直営農園"
      },
      {
        "id": "c",
        "text": "2013年にスターバックスが買い取ったコスタリカのコーヒー農園で、栽培研究の拠点"
      },
      {
        "id": "d",
        "text": "コーヒーのブランド名"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "スターバックスは2013年にコスタリカの農園を買収。生産者の課題理解とベストプラクティス確立を支える拠点で、2018年にはビジターセンターも開設しました。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "農園"
    ]
  },
  {
    "id": "m-eth-07",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスがコーヒー生産者支援として行っている「1億本プロジェクト」の内容は?",
    "choices": [
      {
        "id": "a",
        "text": "1億杯のコーヒーを無料提供"
      },
      {
        "id": "b",
        "text": "1億ドルの募金"
      },
      {
        "id": "c",
        "text": "1億店舗の出店"
      },
      {
        "id": "d",
        "text": "気候変動に強い品種の苗木を生産者に配布する取り組み"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "さび病や気候変動に強いハイブリッド種の苗木を生産者に配布し、コーヒーの未来を守る取り組みです。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "苗木",
      "サステナビリティ"
    ]
  },
  {
    "id": "m-eth-08",
    "category": "エシカル調達",
    "type": "single",
    "question": "フェアトレード認証コーヒーの生産者として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "すべて小規模農園で構成される協同組合"
      },
      {
        "id": "b",
        "text": "大農園のみ"
      },
      {
        "id": "c",
        "text": "政府機関"
      },
      {
        "id": "d",
        "text": "焙煎工場"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "フェアトレード認証コーヒーはすべて、小規模農園で構成される協同組合によって生産されています。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "フェアトレード"
    ]
  },
  {
    "id": "m-eth-09",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスの倫理的調達の対象となる商品は?",
    "choices": [
      {
        "id": "a",
        "text": "コーヒーのみ"
      },
      {
        "id": "b",
        "text": "コーヒー・紅茶・ココアなど"
      },
      {
        "id": "c",
        "text": "水のみ"
      },
      {
        "id": "d",
        "text": "包装材のみ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "責任をもって栽培され倫理的に調達された高品質なコーヒー・紅茶・ココアなどを購買し、生産者のよりよい未来と地球環境への貢献を目指しています。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "エシカル"
    ]
  },
  {
    "id": "m-eth-10",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスのコーヒーの倫理的調達の達成状況は?",
    "choices": [
      {
        "id": "a",
        "text": "まだ取り組んでいない"
      },
      {
        "id": "b",
        "text": "1割のみ"
      },
      {
        "id": "c",
        "text": "高品質なアラビカコーヒーのほぼすべてをC.A.F.E.プラクティスなどの倫理的基準で調達している"
      },
      {
        "id": "d",
        "text": "検証していない"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "スターバックスはコーヒーの倫理的調達を長年進め、ほぼすべてのコーヒーを検証済みの倫理的調達プログラムで購買しています。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-11",
    "category": "エシカル調達",
    "type": "single",
    "question": "「協同組合」の説明として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "大企業の子会社"
      },
      {
        "id": "b",
        "text": "店舗の従業員組合"
      },
      {
        "id": "c",
        "text": "政府の機関"
      },
      {
        "id": "d",
        "text": "複数のコーヒー生産者がまとまり、販売交渉・栽培方法の情報共有などを行う組織"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "小規模農家が協力して販売交渉力や栽培技術を高める組織形態です。加工・輸出を独自に行う協同組合もあります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "生産者"
    ]
  },
  {
    "id": "m-eth-12",
    "category": "エシカル調達",
    "type": "single",
    "question": "ハシエンダ アルサシアのビジターセンターが開設された年は?",
    "choices": [
      {
        "id": "a",
        "text": "2018年"
      },
      {
        "id": "b",
        "text": "2013年"
      },
      {
        "id": "c",
        "text": "2004年"
      },
      {
        "id": "d",
        "text": "1996年"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "2018年に、種まきから栽培・加工・焙煎・テイスティングまで一杯のコーヒーの旅の全行程を体験できるビジターセンターが農園内に開設されました。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 4,
    "tags": [
      "農園",
      "年表"
    ]
  },
  {
    "id": "m-eth-13",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスで最優先の前提条件となるのは?",
    "choices": [
      {
        "id": "a",
        "text": "価格の安さ"
      },
      {
        "id": "b",
        "text": "コーヒーの品質"
      },
      {
        "id": "c",
        "text": "生産量の多さ"
      },
      {
        "id": "d",
        "text": "輸送の速さ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "品質基準を満たすことが前提条件であり、そのうえで経済的透明性・社会的責任・環境面のリーダーシップが評価されます。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-14",
    "category": "エシカル調達",
    "type": "single",
    "question": "グローバル コーヒー クオリティ(GCQ)チームの役割は?",
    "choices": [
      {
        "id": "a",
        "text": "店舗の清掃を管理する"
      },
      {
        "id": "b",
        "text": "豆を栽培する"
      },
      {
        "id": "c",
        "text": "生豆が焙煎工場に到着してから抽出準備が整うまでの品質を担当し、輸送中の品質維持も確認する"
      },
      {
        "id": "d",
        "text": "広告を作る"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "GCQチームは生豆がスターバックスの焙煎工場に到着するとテイスティングし、輸送中に品質が維持されたことも確認します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "品質管理"
    ]
  },
  {
    "id": "m-eth-15",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックス コーヒー トレーディング カンパニー(SCTC)の所在地は?",
    "choices": [
      {
        "id": "a",
        "text": "シアトル"
      },
      {
        "id": "b",
        "text": "東京"
      },
      {
        "id": "c",
        "text": "ミラノ"
      },
      {
        "id": "d",
        "text": "スイスのローザンヌ"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "SCTCはスイス・ローザンヌにあり、バイヤーの拠点。すべてのオファーサンプルと出荷前サンプルがここでテイスティングされます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "調達"
    ]
  },
  {
    "id": "m-eth-16",
    "category": "エシカル調達",
    "type": "single",
    "question": "倫理的調達で重視される「経済的透明性」とは?",
    "choices": [
      {
        "id": "a",
        "text": "支払いの流れを追跡できるようにし、生産者へ適正な対価が支払われることを確認すること"
      },
      {
        "id": "b",
        "text": "価格を下げる交渉をすること"
      },
      {
        "id": "c",
        "text": "豆の見た目を確認すること"
      },
      {
        "id": "d",
        "text": "店舗の売上を公開すること"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "経済的透明性は、コーヒーの対価が生産者まで適正に届いているかを追跡・確認する仕組みです。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-17",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスにおける「社会的責任」の評価内容に近いものは?",
    "choices": [
      {
        "id": "a",
        "text": "店舗の内装"
      },
      {
        "id": "b",
        "text": "労働者の安全・賃金・待遇など働く環境"
      },
      {
        "id": "c",
        "text": "広告表現"
      },
      {
        "id": "d",
        "text": "配送スピード"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "社会的責任の評価では、農園やミルで働く人々の安全・賃金・待遇などが確認されます。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-18",
    "category": "エシカル調達",
    "type": "single",
    "question": "C.A.F.E.プラクティスにおける「環境面のリーダーシップ」に含まれる考え方は?",
    "choices": [
      {
        "id": "a",
        "text": "パッケージを豪華にする"
      },
      {
        "id": "b",
        "text": "輸送を空輸に変える"
      },
      {
        "id": "c",
        "text": "森林や水資源の保護、環境負荷を抑えた栽培"
      },
      {
        "id": "d",
        "text": "カフェイン量を増やす"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "環境面のリーダーシップでは、森林・水・土壌の保全など環境負荷を抑えた栽培が評価されます。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-19",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスが生産者支援で取り組む「さび病」対策の意味は?",
    "choices": [
      {
        "id": "a",
        "text": "鉄製器具の錆を防ぐ"
      },
      {
        "id": "b",
        "text": "店舗の錆を磨く"
      },
      {
        "id": "c",
        "text": "パッケージの劣化防止"
      },
      {
        "id": "d",
        "text": "コーヒーの葉を枯らす病気への耐性品種を育てる"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "さび病はコーヒーの葉を枯らす病害で、収量を大きく損ないます。耐性品種の苗木配布はこの対策の一環です。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "生産者支援"
    ]
  },
  {
    "id": "m-eth-20",
    "category": "エシカル調達",
    "type": "single",
    "question": "「生産者のよりよい未来」を支える取り組みとして適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ファーマーサポートセンターでの技術支援"
      },
      {
        "id": "b",
        "text": "豆の価格を下げる"
      },
      {
        "id": "c",
        "text": "生産量だけを増やす"
      },
      {
        "id": "d",
        "text": "輸送を最速化する"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ファーマーサポートセンターの農学者が生産者に栽培・品質向上を支援し、持続可能な生産を支えます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "FSC"
    ]
  },
  {
    "id": "m-eth-21",
    "category": "エシカル調達",
    "type": "single",
    "question": "フェアトレード認証で目指すことに近いものは?",
    "choices": [
      {
        "id": "a",
        "text": "豆を速く売ること"
      },
      {
        "id": "b",
        "text": "生産者に適正な価格が支払われ、地域社会や環境にも配慮されること"
      },
      {
        "id": "c",
        "text": "輸入関税を下げること"
      },
      {
        "id": "d",
        "text": "包装を増やすこと"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "フェアトレードは適正価格の支払いと、生産者・地域・環境への配慮を目指す仕組みです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "フェアトレード"
    ]
  },
  {
    "id": "m-eth-22",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスの倫理的調達で扱う品質チェックの流れとして正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "店舗で味見だけする"
      },
      {
        "id": "b",
        "text": "検査は行わない"
      },
      {
        "id": "c",
        "text": "オファーサンプルと出荷前サンプルをSCTCでテイスティングして確認"
      },
      {
        "id": "d",
        "text": "外観のみ確認"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "SCTCでオファーサンプル・出荷前サンプルのテイスティングを行い、品質を確認してから調達します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "品質管理"
    ]
  },
  {
    "id": "m-eth-23",
    "category": "エシカル調達",
    "type": "single",
    "question": "ハシエンダ アルサシアが担う役割として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "店舗の内装デザイン"
      },
      {
        "id": "b",
        "text": "広告制作"
      },
      {
        "id": "c",
        "text": "物流倉庫"
      },
      {
        "id": "d",
        "text": "栽培研究とベストプラクティスの確立、生産者への支援拠点"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "アルサシア農園はコスタリカの研究拠点で、栽培方法や病害対策などのベストプラクティスを確立する役割を担います。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "農園"
    ]
  },
  {
    "id": "m-eth-24",
    "category": "エシカル調達",
    "type": "single",
    "question": "「苗木配布」プロジェクトの目的に近いものは?",
    "choices": [
      {
        "id": "a",
        "text": "気候変動や病害に強いコーヒーの木を増やして生産を安定させる"
      },
      {
        "id": "b",
        "text": "観賞用の木を売る"
      },
      {
        "id": "c",
        "text": "店舗の装飾に使う"
      },
      {
        "id": "d",
        "text": "紙の材料を確保する"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "耐性品種の苗木を生産者に配布し、気候変動やさび病への耐性を高めて生産を安定させる取り組みです。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "苗木",
      "サステナビリティ"
    ]
  },
  {
    "id": "m-eth-25",
    "category": "エシカル調達",
    "type": "single",
    "question": "倫理的調達における「検証済みプログラム」の意味に近いものは?",
    "choices": [
      {
        "id": "a",
        "text": "自己申告のみでよい"
      },
      {
        "id": "b",
        "text": "第三者または基準に基づき、調達方法が基準を満たすことを確認する仕組み"
      },
      {
        "id": "c",
        "text": "検査をしない"
      },
      {
        "id": "d",
        "text": "広告を見るだけ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "C.A.F.E.プラクティスやフェアトレードのように、基準への適合を確認する仕組みが「検証済みプログラム」です。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-26",
    "category": "エシカル調達",
    "type": "single",
    "question": "「C.A.F.E.」の対象として最も適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "店舗の内装"
      },
      {
        "id": "b",
        "text": "ドリンクの価格"
      },
      {
        "id": "c",
        "text": "コーヒー豆の調達全般(品質・労働・環境・透明性)"
      },
      {
        "id": "d",
        "text": "販促物のデザイン"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "C.A.F.E.プラクティスはコーヒー豆の調達における品質・労働・環境・透明性を評価するガイドラインです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-eth-27",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスの倫理的調達で「生産者との長期的関係」が重視される理由は?",
    "choices": [
      {
        "id": "a",
        "text": "短期で安く買うため"
      },
      {
        "id": "b",
        "text": "広告のため"
      },
      {
        "id": "c",
        "text": "理由はない"
      },
      {
        "id": "d",
        "text": "品質と安定供給を維持し、生産者の生活と環境保全を支えるため"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "長期的な関係は品質の維持と生産者の生活・環境保全につながり、持続可能なコーヒー供給を支えます。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "調達"
    ]
  },
  {
    "id": "m-eth-28",
    "category": "エシカル調達",
    "type": "single",
    "question": "倫理的調達の説明として最も適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "品質・労働環境・環境保全・透明性を考慮して責任をもって調達すること"
      },
      {
        "id": "b",
        "text": "最も安い豆を買うこと"
      },
      {
        "id": "c",
        "text": "見た目だけで選ぶこと"
      },
      {
        "id": "d",
        "text": "輸入量を増やすだけ"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "倫理的調達は品質に加え、労働環境・環境保全・経済的透明性を考慮した責任ある調達です。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "エシカル"
    ]
  },
  {
    "id": "m-eth-29",
    "category": "エシカル調達",
    "type": "single",
    "question": "スターバックスがコーヒー生産者と直接取引や支援を重視する狙いは?",
    "choices": [
      {
        "id": "a",
        "text": "広告のため"
      },
      {
        "id": "b",
        "text": "品質と生産者の生活・環境を同時に守り、持続可能な供給を実現するため"
      },
      {
        "id": "c",
        "text": "コスト削減のみ"
      },
      {
        "id": "d",
        "text": "輸送を早めるため"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "生産者との関係強化は、品質維持と生産者の生活・環境保全を両立させ、持続可能な供給につなげる狙いがあります。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "調達"
    ]
  },
  {
    "id": "m-eth-30",
    "category": "エシカル調達",
    "type": "single",
    "question": "「環境面のリーダーシップ」の例として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "パッケージを増やす"
      },
      {
        "id": "b",
        "text": "価格を下げる"
      },
      {
        "id": "c",
        "text": "森林や水を守る栽培方法の推進"
      },
      {
        "id": "d",
        "text": "輸送を増やす"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "環境面では森林・水・土壌の保全や、環境負荷を抑えた栽培が評価されます。",
    "sources": [
      {
        "title": "STARBUCKS STORIES | 倫理的な調達",
        "url": "https://stories.starbucks.co.jp/stories/ethical-sourcing/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "CAFE"
    ]
  },
  {
    "id": "m-srv-01",
    "category": "接客・提案",
    "type": "single",
    "question": "お客様に「チョコレートケーキに合うコーヒーを」と聞かれた。おすすめとして適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ケニア(強い柑橘の酸味)"
      },
      {
        "id": "b",
        "text": "ブロンドローストの軽い豆"
      },
      {
        "id": "c",
        "text": "水出しアイスのみ"
      },
      {
        "id": "d",
        "text": "カフェ ベロナ®(ダークココアの風味)"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "ダークココアとロースティな甘みを持つカフェ ベロナはチョコレート系デザートとの相性が抜群です。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案",
      "ペアリング"
    ]
  },
  {
    "id": "m-srv-02",
    "category": "接客・提案",
    "type": "single",
    "question": "「カフェインを控えたい」と言うお客様への案内として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ディカフェ ハウス ブレンドやディカフェ対応のドリップを案内する"
      },
      {
        "id": "b",
        "text": "カフェイン除去コーヒーはないと伝える"
      },
      {
        "id": "c",
        "text": "エスプレッソを勧める"
      },
      {
        "id": "d",
        "text": "水だけを勧める"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ディカフェ(カフェイン除去)の選択肢を案内します。スターバックスでは二酸化炭素抽出法・スイスウォータープロセスでカフェイン除去したコーヒーを提供しています。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案",
      "デカフェ"
    ]
  },
  {
    "id": "m-srv-03",
    "category": "接客・提案",
    "type": "single",
    "question": "「豆を家でプレスで淹れたい」と言うお客様への挽き目の案内は?",
    "choices": [
      {
        "id": "a",
        "text": "極細挽き"
      },
      {
        "id": "b",
        "text": "粗挽き"
      },
      {
        "id": "c",
        "text": "挽かない(豆のまま)"
      },
      {
        "id": "d",
        "text": "中細挽き"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "コーヒープレスは粗挽きが適しています。細かいとフィルターを通り抜けたり過抽出で苦くなったりします。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案",
      "挽き目"
    ]
  },
  {
    "id": "m-srv-04",
    "category": "接客・提案",
    "type": "single",
    "question": "「どの豆が一番おいしい?」と聞かれたときの適切な対応は?",
    "choices": [
      {
        "id": "a",
        "text": "人気No.1を機械的に答える"
      },
      {
        "id": "b",
        "text": "一番高い豆を勧める"
      },
      {
        "id": "c",
        "text": "酸味・コク・風味の好みをヒアリングしてからおすすめを提案する"
      },
      {
        "id": "d",
        "text": "分からないと答える"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "おいしさの好みは人それぞれなので、酸味の強さ・コク・風味(ナッツ系/柑橘系など)の好みを聞いてから提案するのが適切です。",
    "sources": [
      {
        "title": "スターバックス | Our Mission",
        "url": "https://www.starbucks.co.jp/company/mission.html"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-05",
    "category": "接客・提案",
    "type": "single",
    "question": "「酸味が苦手なので、まろやかな豆がほしい」というお客様への提案として最も適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ケニア"
      },
      {
        "id": "b",
        "text": "ブレックファースト ブレンド"
      },
      {
        "id": "c",
        "text": "エチオピア"
      },
      {
        "id": "d",
        "text": "スマトラやカフェ ベロナなど酸味の低いダークロースト"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "酸味が苦手な方には酸味が低く(LOW〜MEDIUM-LOW)フルボディのダークローストが適しています。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-06",
    "category": "接客・提案",
    "type": "single",
    "question": "お客様が「オリガミって何?」と尋ねてきた。説明として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "お湯を注ぐだけで本格ドリップが楽しめる、持ち運べるドリップバッグ式コーヒー"
      },
      {
        "id": "b",
        "text": "コーヒーの抽出器具"
      },
      {
        "id": "c",
        "text": "豆の保存容器"
      },
      {
        "id": "d",
        "text": "スタバの会員制度"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "スターバックス オリガミは折り紙に由来する、器具不要でお湯を注ぐだけのドリップバッグコーヒーです。",
    "sources": [
      {
        "title": "スターバックス オリガミ | スターバックス",
        "url": "https://product.starbucks.co.jp/beans/origami/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案",
      "商品"
    ]
  },
  {
    "id": "m-srv-07",
    "category": "接客・提案",
    "type": "single",
    "question": "「豆の保存方法を教えて」と聞かれた。正しい案内は?",
    "choices": [
      {
        "id": "a",
        "text": "冷蔵庫で保存する"
      },
      {
        "id": "b",
        "text": "密閉容器に入れ、直射日光・湿気を避け常温で保存し、開封後は約1週間以内に"
      },
      {
        "id": "c",
        "text": "水に浸して保存"
      },
      {
        "id": "d",
        "text": "袋のまま日光に当てる"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "光・空気・湿気が劣化の原因です。密閉・常温・遮光で保存し、開封後は約1週間以内に使い切るのが理想です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案",
      "保存"
    ]
  },
  {
    "id": "m-srv-08",
    "category": "接客・提案",
    "type": "single",
    "question": "「フルーティーで明るい酸味の豆が好き」なお客様へのおすすめは?",
    "choices": [
      {
        "id": "a",
        "text": "スマトラ"
      },
      {
        "id": "b",
        "text": "イタリアン ロースト"
      },
      {
        "id": "c",
        "text": "ケニアやエチオピア(アフリカ産)"
      },
      {
        "id": "d",
        "text": "エスプレッソ ロースト"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "フルーティーで明るい酸味が好みの方には、アフリカ産のジューシーなコーヒーが適しています。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-09",
    "category": "接客・提案",
    "type": "single",
    "question": "「エスプレッソマシンで使う豆の挽き目は?」と聞かれた。",
    "choices": [
      {
        "id": "a",
        "text": "粗挽き"
      },
      {
        "id": "b",
        "text": "中挽き"
      },
      {
        "id": "c",
        "text": "挽かなくてよい"
      },
      {
        "id": "d",
        "text": "極細挽き"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "エスプレッソは高圧・短時間抽出のため極細挽きが適しています。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案",
      "挽き目"
    ]
  },
  {
    "id": "m-srv-10",
    "category": "接客・提案",
    "type": "single",
    "question": "コーヒーセミナーの案内として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "ブラックエプロン(コーヒーマスター)のみが講師を務められる"
      },
      {
        "id": "b",
        "text": "誰でも講師になれる"
      },
      {
        "id": "c",
        "text": "セミナーはない"
      },
      {
        "id": "d",
        "text": "店長のみ講師可能"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "コーヒーセミナーはブラックエプロンを持つコーヒーマスターのみが講師を務められます。",
    "sources": [
      {
        "title": "コーヒーセミナー | スターバックス",
        "url": "https://www.starbucks.co.jp/seminar/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案",
      "セミナー"
    ]
  },
  {
    "id": "m-srv-11",
    "category": "接客・提案",
    "type": "single",
    "question": "「朝にさっぱり飲みたい」というお客様への提案として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "スマトラ"
      },
      {
        "id": "b",
        "text": "ブレックファースト ブレンドやコロンビア(ミディアム)"
      },
      {
        "id": "c",
        "text": "イタリアン ロースト"
      },
      {
        "id": "d",
        "text": "デカフェのみ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "朝にさっぱり飲みたい方には、明るい酸味とバランスのよいミディアムローストが合います。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-12",
    "category": "接客・提案",
    "type": "single",
    "question": "「濃いめで力強いコーヒーが好き」なお客様への提案として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ブロンドロースト"
      },
      {
        "id": "b",
        "text": "コロンビア"
      },
      {
        "id": "c",
        "text": "エスプレッソ ローストやイタリアン ロースト"
      },
      {
        "id": "d",
        "text": "水出しのみ"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "力強いコクと香ばしさが好みの方にはダークロースト系が適しています。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-13",
    "category": "接客・提案",
    "type": "single",
    "question": "「デザートと一緒に楽しみたい」というお客様への説明として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "どの豆でも同じ"
      },
      {
        "id": "b",
        "text": "コーヒーは勧めない"
      },
      {
        "id": "c",
        "text": "水だけを勧める"
      },
      {
        "id": "d",
        "text": "チョコ系ならカフェ ベロナ、ベリー系ならケニアなどフードペアリングで提案する"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "デザートに合わせてフードペアリングを提案すると、風味が引き立ちます。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案",
      "ペアリング"
    ]
  },
  {
    "id": "m-srv-14",
    "category": "接客・提案",
    "type": "single",
    "question": "「コーヒー初心者で何から始めればいい?」と聞かれたときの案内として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ハウス ブレンドやコロンビアなどバランスのよい豆から始める"
      },
      {
        "id": "b",
        "text": "最も強い豆だけを勧める"
      },
      {
        "id": "c",
        "text": "何も勧めない"
      },
      {
        "id": "d",
        "text": "デカフェのみ"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "初心者にはバランスのよいミディアムローストから始めると、好みの方向性を探りやすいです。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-15",
    "category": "接客・提案",
    "type": "single",
    "question": "「自宅でミルクと合わせて飲みたい」というお客様への提案として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ケニアのみ"
      },
      {
        "id": "b",
        "text": "エスプレッソ ローストやカフェ ベロナなどミルクと相性のよい豆"
      },
      {
        "id": "c",
        "text": "ブロンドのみ"
      },
      {
        "id": "d",
        "text": "勧めない"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "ミルクと合わせるならコクがしっかりした豆が合いやすいです。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-16",
    "category": "接客・提案",
    "type": "single",
    "question": "「夏にアイスで飲みたい」というお客様への案内として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "ホットのみ勧める"
      },
      {
        "id": "b",
        "text": "勧めない"
      },
      {
        "id": "c",
        "text": "アイス向けに濃いめの豆や水出しコーヒーを案内する"
      },
      {
        "id": "d",
        "text": "必ずエスプレッソ"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "アイスでは風味がぼやけやすいため、濃いめや水出し向けの豆を案内します。",
    "sources": [
      {
        "title": "HELLO COFFEE | おいしいコーヒーのいれ方",
        "url": "https://www.starbucks.co.jp/hellocoffee/howto/brew/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-17",
    "category": "接客・提案",
    "type": "single",
    "question": "「豆の種類が多すぎて分からない」と言うお客様への案内として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "全部説明する"
      },
      {
        "id": "b",
        "text": "一番高い豆を勧める"
      },
      {
        "id": "c",
        "text": "何も勧めない"
      },
      {
        "id": "d",
        "text": "酸味・コク・風味の軸で好みを聞き、2〜3種に絞って提案する"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "選択肢が多いときは、好みの軸で絞って提案すると選びやすくなります。",
    "sources": [
      {
        "title": "スターバックス | Our Mission",
        "url": "https://www.starbucks.co.jp/company/mission.html"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-18",
    "category": "接客・提案",
    "type": "single",
    "question": "「香りが良い豆がほしい」と言うお客様への説明として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "エチオピアやケニアなど華やかな香りの豆を提案する"
      },
      {
        "id": "b",
        "text": "スマトラのみ"
      },
      {
        "id": "c",
        "text": "勧めない"
      },
      {
        "id": "d",
        "text": "すべて同じ香り"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "華やかな香りが好みなら、フローラルやベリー系の香りが特徴の豆が合います。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-19",
    "category": "接客・提案",
    "type": "single",
    "question": "「ギフトにしたい」と言うお客様への案内として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "自分の好みだけで勧める"
      },
      {
        "id": "b",
        "text": "相手の好みを聞き、シングルオリジンやギフト向けパッケージを提案する"
      },
      {
        "id": "c",
        "text": "勧めない"
      },
      {
        "id": "d",
        "text": "最安値のみ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "贈り物は相手の好みに合わせて提案すると喜ばれやすいです。",
    "sources": [
      {
        "title": "スターバックス | Our Mission",
        "url": "https://www.starbucks.co.jp/company/mission.html"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案"
    ]
  },
  {
    "id": "m-srv-20",
    "category": "接客・提案",
    "type": "single",
    "question": "「豆と粉のどちらを買うべき?」と聞かれたときの案内として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "粉の方が必ず良い"
      },
      {
        "id": "b",
        "text": "どちらでも同じ"
      },
      {
        "id": "c",
        "text": "豆のまま買い、抽出直前に挽く方が香りが長持ちすると案内する"
      },
      {
        "id": "d",
        "text": "豆は買えない"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "豆のまま保存し、抽出直前に挽く方が香りと鮮度を保てます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "提案",
      "保存"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
