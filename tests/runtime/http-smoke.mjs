import assert from "node:assert/strict";

const base = "http://127.0.0.1:8787";
let passed = 0;

async function check(path, status = 200, init = {}) {
  const response = await fetch(`${base}${path}`, {
    ...init,
    redirect: "manual",
    signal: AbortSignal.timeout(30_000),
  });
  assert.equal(response.status, status, `${path}: HTTP status`);
  passed += 1;
  console.log(`PASS ${status} ${path}`);
  return response;
}

const home = await (await check("/")).text();
assert.match(home, /To get started/);
await check("/runtime-missing-page", 404);
await check("/next.svg");
await check("/favicon.ico");

const css = [...home.matchAll(/href="([^"?]+\.css(?:\?[^\"]*)?)"/g)]
  .map((match) => match[1]);
assert.ok(css.length > 0, "HTML must reference a local stylesheet");
let checkedFont = false;
for (const path of new Set(css)) {
  assert.ok(path.startsWith("/_next/"), "Only local CSS is allowed");
  const stylesheet = await (await check(path)).text();
  const font = stylesheet.match(/url\(([^)]+\.woff2)\)/);
  if (font && !checkedFont) {
    const fontPath = new URL(font[1].replaceAll('"', ""), `${base}${path}`).pathname;
    assert.ok(fontPath.startsWith("/_next/"), "Only local fonts are allowed");
    await check(fontPath);
    checkedFont = true;
  }
}
assert.ok(checkedFont, "At least one local font must be served");

const probe = await (await check("/runtime-probe?value=workers-query", 200, {
  headers: { "x-runtime-probe": "request-a" },
})).text();
assert.match(probe, /id="runtime-marker"/);
assert.match(probe, /workers-query/);
assert.match(probe, /request-a/);
assert.match(probe, /Count: <!-- -->0/);

const first = await check("/runtime-request?value=first", 200, {
  headers: { "x-runtime-probe": "request-first" },
});
assert.equal(first.headers.get("x-runtime-query"), "first");
assert.equal(first.headers.get("x-runtime-request"), "request-first");
const firstNonce = first.headers.get("x-runtime-nonce");
assert.ok(firstNonce);
assert.equal(await first.text(), "PAIPAK_WORKERS_RUNTIME_OK");

const second = await check("/runtime-request?value=second", 200, {
  headers: { "x-runtime-probe": "request-second" },
});
assert.equal(second.headers.get("x-runtime-query"), "second");
assert.equal(second.headers.get("x-runtime-request"), "request-second");
assert.notEqual(second.headers.get("x-runtime-nonce"), firstNonce);

const redirect = await check("/runtime-probe/?value=redirect", 308);
assert.equal(redirect.headers.get("location"), "/runtime-probe?value=redirect");

// Exercise concurrent rendering too: a single successful request can hide
// cross-request cache/rendering failures in the Workers isolate.
await Promise.all(Array.from({ length: 4 }, async (_, index) => {
  const value = `parallel-${index}`;
  const page = await (await check(`/runtime-probe?value=${value}`)).text();
  assert.match(page, /PAIPAK_WORKERS_SSR_OK/);
  assert.ok(page.includes(value));
  const response = await check(`/runtime-request?value=${value}`, 200, {
    headers: { "x-runtime-probe": value },
  });
  assert.equal(response.headers.get("x-runtime-query"), value);
  assert.equal(response.headers.get("x-runtime-request"), value);
  await response.text();
}));
console.log(`PASS ${passed} HTTP checks; SSR/query/header/nonce/assets/404/redirect/concurrency verified`);
