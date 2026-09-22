/**
 * core.js — ブラックエプロン試験クイズの純粋ロジック層
 *
 * DOM/localStorageに直接依存しない関数群。
 * ブラウザでは classic script として `window.Core`、
 * Nodeでは `globalThis.Core` として利用できる(node:testで検証)。
 */
(function (g) {
  "use strict";

  var DAY_MS = 86400000;
  var SCHEMA_VERSION = 2;
  var ATTEMPTS_MAX = 3000;
  var REVIEW_CLEAR_STREAK = 3; // 復習対象から外れる連続正解数

  /* ================= テキスト正規化(表記ゆれ吸収) ================= */
  /** ®™・中黒・全半角・空白差を吸収する比較用文字列を返す */
  function normText(s) {
    return String(s == null ? "" : s)
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[®™]/g, "")
      .replace(/[・･⋅]/g, "")
      .replace(/\s+/g, "");
  }

  /* ================= 問題の正規化 ================= */
  /**
   * 新形式 { choices:[{id,text}], answerIds:[id,...] } と
   * 旧形式 { choices:[str,...], answer:index } の両方を
   * 新形式に正規化する。
   */
  function normalizeQuestion(q) {
    var base = {
      type: "single",
      explanation: "",
      sources: [],
      difficulty: 2,
      tags: []
    };
    for (var k in q) base[k] = q[k];

    if (Array.isArray(q.choices) && typeof q.choices[0] === "string") {
      var letters = "abcdefgh";
      base.choices = q.choices.map(function (t, i) {
        return { id: letters[i], text: t };
      });
      base.answerIds = [letters[q.answer]];
    }
    if (base.answerIds.length > 1) base.type = "multi";
    if (!base.type) base.type = "single";
    return base;
  }

  /** 出題用に選択肢をシャッフルした出題オブジェクトを作る */
  function prepareQuestion(rawQ, rng) {
    var nq = normalizeQuestion(rawQ);
    nq.choices = shuffle(nq.choices, rng);
    return nq;
  }

  /** Fisher-Yatesシャッフル(rng差し替え可能でテスト容易) */
  function shuffle(arr, rng) {
    var a = arr.slice();
    var rand = rng || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /**
   * 採点。正規化済み問題と選択肢ID配列(回答)を受け取る。
   * 単一選択・複数選択とも「選択肢ID集合の完全一致」で判定。
   */
  function judge(nq, pickedIds) {
    if (!Array.isArray(pickedIds) || pickedIds.length === 0) return false;
    var a = nq.answerIds.slice().sort().join("|");
    var p = pickedIds.slice().sort().join("|");
    return a === p;
  }

  /* ================= 間隔反復(SM-2系) ================= */
  /**
   * SM-2簡易版。quality: 0〜5(正解=4, 不正解=1として呼ぶ)。
   * card: {easeFactor, intervalDays, repetitions, dueAt, lapses}
   */
  function sm2Next(card, quality, now) {
    now = now == null ? Date.now() : now;
    var ef = card && card.easeFactor || 2.5;
    var reps = card && card.repetitions || 0;
    var iv = card && card.intervalDays || 0;
    var lapses = card && card.lapses || 0;

    if (quality < 3) {
      lapses += 1;
      reps = 0;
      iv = 0.02; // 約30分後に再出題
    } else {
      reps += 1;
      iv = reps === 1 ? 1 : reps === 2 ? 6 : Math.round(iv * ef);
      ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
      if (ef < 1.3) ef = 1.3;
    }
    return {
      easeFactor: Math.round(ef * 100) / 100,
      intervalDays: iv,
      repetitions: reps,
      lapses: lapses,
      dueAt: now + iv * DAY_MS
    };
  }

  /* ================= 永続化層 ================= */
  /**
   * localStorage互換のバックエンド(getItem/setItem)を注入して使う。
   * 既存キー blackApronQuiz.wrongIds / .stats は維持。
   * wrongIds は v1 の配列形式から v2 の {id:{misses,streak}} へ無損失マイグレーション。
   */
  var KEYS = {
    wrong: "blackApronQuiz.wrongIds",
    stats: "blackApronQuiz.stats",
    attempts: "blackApronQuiz.attempts",
    srs: "blackApronQuiz.srs",
    examLog: "blackApronQuiz.examLog",
    version: "blackApronQuiz.schemaVersion"
  };

  function createStore(backend) {
    function read(key, fallback) {
      try {
        var v = backend.getItem(key);
        return v == null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    }
    function write(key, val) {
      backend.setItem(key, JSON.stringify(val));
    }

    var store = {
      backend: backend,

      /* ---- マイグレーション(起動時に1回) ---- */
      migrate: function () {
        var v = read(KEYS.version, 1);
        if (v < 2) {
          // wrongIds: array → {id:{misses,streak}}
          var old = read(KEYS.wrong, []);
          if (Array.isArray(old)) {
            var map = {};
            old.forEach(function (id) { map[id] = { misses: 1, streak: 0 }; });
            write(KEYS.wrong, map);
          }
          write(KEYS.version, 2);
        }
      },

      /* ---- 復習リスト(3回連続正解で解除) ---- */
      getWrongMap: function () {
        var m = read(KEYS.wrong, {});
        return Array.isArray(m) ? {} : m; // 未マイグレーション時の保険
      },
      wrongIds: function () { return Object.keys(this.getWrongMap()); },
      recordOutcome: function (qid, isCorrect) {
        var m = this.getWrongMap();
        var e = m[qid] || { misses: 0, streak: 0 };
        if (isCorrect) {
          e.streak += 1;
          if (e.streak >= REVIEW_CLEAR_STREAK) delete m[qid];
          else m[qid] = e;
        } else {
          e.misses += 1;
          e.streak = 0;
          m[qid] = e;
        }
        write(KEYS.wrong, m);
      },

      /* ---- 累計統計(既存キー) ---- */
      getStats: function () {
        return read(KEYS.stats, { answered: 0, correct: 0 });
      },
      bumpStats: function (isCorrect) {
        var s = this.getStats();
        s.answered += 1;
        if (isCorrect) s.correct += 1;
        write(KEYS.stats, s);
      },

      /* ---- 回答履歴(直近3000件ローテーション) ---- */
      getAttempts: function () { return read(KEYS.attempts, []); },
      logAttempt: function (entry) {
        var a = this.getAttempts();
        a.push(entry);
        if (a.length > ATTEMPTS_MAX) a = a.slice(a.length - ATTEMPTS_MAX);
        write(KEYS.attempts, a);
      },

      /* ---- SRS ---- */
      getSrs: function () { return read(KEYS.srs, {}); },
      updateSrs: function (qid, quality, now) {
        var s = this.getSrs();
        s[qid] = sm2Next(s[qid], quality, now);
        write(KEYS.srs, s);
      },
      dueIds: function (now) {
        now = now == null ? Date.now() : now;
        var s = this.getSrs();
        return Object.keys(s).filter(function (id) { return s[id].dueAt <= now; });
      },

      /* ---- 模擬試験履歴 ---- */
      getExamLog: function () { return read(KEYS.examLog, []); },
      logExam: function (entry) {
        var a = this.getExamLog();
        a.push(entry);
        write(KEYS.examLog, a);
      }
    };
    return store;
  }

  /* ================= バックアップ(エクスポート/インポート) ================= */
  var BACKUP_APP_ID = "blackApronQuiz";
  var EXTRA_KEYS = ["blackApronQuiz.theme", "blackApronQuiz.lastBackupAt"];
  var EXPORT_KEYS = Object.keys(KEYS).map(function (k) { return KEYS[k]; }).concat(EXTRA_KEYS);

  /** localStorageの学習データをまとめたバックアップオブジェクトを返す */
  function exportData(backend) {
    var data = {};
    EXPORT_KEYS.forEach(function (key) {
      var raw;
      try { raw = backend.getItem(key); } catch (e) { raw = null; }
      if (raw != null) {
        try { data[key] = JSON.parse(raw); } catch (e) { data[key] = raw; }
      }
    });
    return {
      app: BACKUP_APP_ID,
      schemaVersion: SCHEMA_VERSION,
      exportedAt: Date.now(),
      data: data
    };
  }

  /**
   * インポート対象JSONの検証。問題なければnull、問題があれば理由の文字列を返す。
   * 壊れたファイルで既存データを上書きしないためのガード。
   */
  function validateBackup(obj) {
    if (!obj || typeof obj !== "object") return "JSONオブジェクトではありません";
    if (obj.app !== BACKUP_APP_ID) return "このアプリのバックアップではありません";
    if (!obj.data || typeof obj.data !== "object" || Array.isArray(obj.data))
      return "バックアップのデータ部が不正です";
    var wrong = obj.data[KEYS.wrong];
    if (wrong != null && (typeof wrong !== "object" || wrong == null))
      return "復習データの形式が不正です";
    var stats = obj.data[KEYS.stats];
    if (stats != null && (typeof stats !== "object" ||
        typeof stats.answered !== "number" || typeof stats.correct !== "number"))
      return "統計データの形式が不正です";
    var attempts = obj.data[KEYS.attempts];
    if (attempts != null && !Array.isArray(attempts)) return "履歴データの形式が不正です";
    var srs = obj.data[KEYS.srs];
    if (srs != null && (typeof srs !== "object" || Array.isArray(srs)))
      return "SRSデータの形式が不正です";
    return null;
  }

  /** 検証済みバックアップをバックエンドへ書き戻す。validateBackupを通してから呼ぶこと */
  function importData(backend, obj) {
    var err = validateBackup(obj);
    if (err) return err;
    Object.keys(obj.data).forEach(function (key) {
      backend.setItem(key, JSON.stringify(obj.data[key]));
    });
    return null;
  }

  /* ================= 公開 ================= */
  g.Core = {
    SCHEMA_VERSION: SCHEMA_VERSION,
    REVIEW_CLEAR_STREAK: REVIEW_CLEAR_STREAK,
    KEYS: KEYS,
    normText: normText,
    normalizeQuestion: normalizeQuestion,
    prepareQuestion: prepareQuestion,
    shuffle: shuffle,
    judge: judge,
    sm2Next: sm2Next,
    createStore: createStore,
    BACKUP_APP_ID: BACKUP_APP_ID,
    EXPORT_KEYS: EXPORT_KEYS,
    exportData: exportData,
    validateBackup: validateBackup,
    importData: importData
  };
})(typeof window !== "undefined" ? window : globalThis);
