/* ブラックエプロン試験クイズ - Service Worker (オフライン対応) */
const CACHE_NAME = "be-quiz-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./core.js",
  "./data/coffees.js",
  "./data/reference.js",
  "./data/terms.js",
  "./data/questions/basic.js",
  "./data/questions/origin.js",
  "./data/questions/process.js",
  "./data/questions/brewing.js",
  "./data/questions/tasting.js",
  "./data/questions/core-coffee.js",
  "./data/questions/history.js",
  "./data/questions/generated-core.js",
  "./data/questions/generated-seasonal.js",
  "./data/questions/generated-service.js",
  "./data/questions/generated-reference.js",
  "./data/questions/generated-terms.js",
  "./data/questions/manual-basic.js",
  "./data/questions/manual-tasting.js",
  "./data/questions/manual-brewing.js",
  "./data/questions/manual-process.js",
  "./data/questions/manual-history.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* キャッシュ優先、なければネットワーク */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
