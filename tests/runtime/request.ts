export function GET(request: Request): Response {
  const url = new URL(request.url);
  return new Response("PAIPAK_WORKERS_RUNTIME_OK", {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-runtime-query": url.searchParams.get("value") ?? "none",
      "x-runtime-request": request.headers.get("x-runtime-probe") ?? "none",
      "x-runtime-nonce": crypto.randomUUID(),
    },
  });
}
