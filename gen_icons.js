#!/usr/bin/env node
/* アイコンPNG生成スクリプト(依存なし:zlibでPNGを直接エンコード)
   緑背景 + 白いコーヒーカップのシンプルなアイコンを生成する */
const zlib = require("zlib");
const fs = require("fs");

/* ---------- PNGエンコーダ ---------- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}
function encodePNG(w, h, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  const stride = w * 4;
  const raw = Buffer.alloc((stride + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    sig,
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ---------- 描画 ---------- */
function hex(s) {
  return [parseInt(s.slice(1, 3), 16), parseInt(s.slice(3, 5), 16), parseInt(s.slice(5, 7), 16)];
}
function makeCanvas(size, bg) {
  const px = Buffer.alloc(size * size * 4);
  const [r, g, b] = bg;
  for (let i = 0; i < size * size; i++) {
    px[i * 4] = r; px[i * 4 + 1] = g; px[i * 4 + 2] = b; px[i * 4 + 3] = 255;
  }
  return { size, px };
}
function setPx(cv, x, y, col) {
  const { size, px } = cv;
  if (x < 0 || y < 0 || x >= size || y >= size) return;
  const i = (y * size + x) * 4;
  const a = col.length === 4 ? col[3] / 255 : 1;
  px[i] = Math.round(col[0] * a + px[i] * (1 - a));
  px[i + 1] = Math.round(col[1] * a + px[i + 1] * (1 - a));
  px[i + 2] = Math.round(col[2] * a + px[i + 2] * (1 - a));
  px[i + 3] = 255;
}
function fillRect(cv, x0, y0, x1, y1, col) {
  for (let y = Math.floor(y0); y < y1; y++)
    for (let x = Math.floor(x0); x < x1; x++) setPx(cv, x, y, col);
}
function fillCircle(cv, cx, cy, r, col) {
  for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++)
    for (let x = Math.floor(cx - r); x <= Math.ceil(cx + r); x++) {
      const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
      if (d <= r - 0.5) setPx(cv, x, y, col);
      else if (d <= r + 0.5) setPx(cv, x, y, [...col.slice(0, 3), Math.round(255 * (r + 0.5 - d))]);
    }
}
function fillEllipse(cv, cx, cy, rx, ry, col) {
  for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++)
    for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
      const dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry;
      const d = dx * dx + dy * dy;
      if (d <= 0.92) setPx(cv, x, y, col);
      else if (d <= 1.0) setPx(cv, x, y, [...col.slice(0, 3), Math.round(255 * (1.0 - d) * 12)]);
    }
}
function fillRoundedRect(cv, x0, y0, x1, y1, r, col) {
  fillRect(cv, x0 + r, y0, x1 - r, y1, col);
  fillRect(cv, x0, y0 + r, x1, y1 - r, col);
  fillCircle(cv, x0 + r, y0 + r, r, col);
  fillCircle(cv, x1 - r, y0 + r, r, col);
  fillCircle(cv, x0 + r, y1 - r, r, col);
  fillCircle(cv, x1 - r, y1 - r, r, col);
}

/* ---------- アイコン描画(512基準でスケール) ---------- */
function drawIcon(size, maskable) {
  const s = size / 512;
  const green = hex("#00754a");
  const white = hex("#ffffff");
  const coffee = hex("#4b2e1e");
  const cv = makeCanvas(size, maskable ? green : hex("#006241")); // maskableは余白込み全面緑

  // 通常アイコンは角丸の緑背景、maskableは全面塗り
  if (!maskable) {
    // 全面を緑で塗り直し(角丸はOS側で切られるので角まで塗る)
    for (let i = 0; i < size * size; i++) {
      cv.px[i * 4] = green[0]; cv.px[i * 4 + 1] = green[1]; cv.px[i * 4 + 2] = green[2]; cv.px[i * 4 + 3] = 255;
    }
  }

  const sc = (v) => v * s;
  const inset = maskable ? 1.22 : 1.0; // maskableはセーフゾーンに収めるため縮小
  const cx = size / 2;
  const off = (v) => cx + (v - 256) * s * inset;
  const offY = (v) => cx + (v - 256) * s * inset + (maskable ? 6 * s : 0);
  const w2 = (v) => v * s * inset;

  // 湯気(2本の縦棒、丸端)
  fillRoundedRect(cv, off(196), offY(120), off(196) + w2(18), offY(120) + w2(62), w2(9), [...white, 200]);
  fillRoundedRect(cv, off(252), offY(108), off(252) + w2(18), offY(108) + w2(74), w2(9), [...white, 200]);

  // カップ本体(白い角丸)
  fillRoundedRect(cv, off(118), offY(208), off(118) + w2(214), offY(208) + w2(150), w2(22), white);
  // コーヒー液面(カップ上部の楕円)
  fillEllipse(cv, off(225), offY(216), w2(92), w2(18), coffee);

  // 持ち手(右のリング:外側白→内側緑でくり抜き)
  fillCircle(cv, off(356), offY(272), w2(52), white);
  fillCircle(cv, off(356), offY(272), w2(30), green);

  // ソーサー
  fillRoundedRect(cv, off(96), offY(384), off(96) + w2(320), offY(384) + w2(26), w2(13), white);

  return cv;
}

for (const [name, size, maskable] of [
  ["icon-192.png", 192, false],
  ["icon-512.png", 512, false],
  ["icon-maskable-512.png", 512, true],
  ["apple-touch-icon.png", 180, false],
]) {
  const cv = drawIcon(size, maskable);
  fs.writeFileSync(name, encodePNG(size, size, cv.px));
  console.log(`${name}: ${size}x${size} 生成完了`);
}
