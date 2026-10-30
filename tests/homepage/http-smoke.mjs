import assert from "node:assert/strict";

const base = process.env.HOMEPAGE_BASE_URL ?? "http://127.0.0.1:3000";
const response = await fetch(base);
assert.equal(response.status, 200);
const html = await response.text();
assert.match(html, /<html[^>]*lang="th"/);
assert.match(html, /<title>paipak/);
assert.match(html, /ข้อมูลตัวอย่าง/);
assert.match(html, /แนะนำ\/เปิดใหม่/);
assert.match(html, /ติดหาด \/ ใกล้หาด/);
assert.match(html, /ราคาสุดคุ้ม/);
assert.match(html, /พูลวิลล่าทั้งหมด/);
assert.doesNotMatch(html, /@poolavilla|033-166-355|Poola 13|Create Next App/);
for (const path of ["/mock/villa-01.webp", "/mock/villa-08.webp", "/mock/credits.json"]) {
  const asset = await fetch(`${base}${path}`);
  assert.equal(asset.status, 200, path);
}
assert.equal((await fetch(`${base}/homepage-missing-page`)).status, 404);
console.log("PASS: Thai homepage SSR, four categories, mock data, local imagery, 404");
