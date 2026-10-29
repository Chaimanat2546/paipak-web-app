import { Suspense } from "react";
import { headers } from "next/headers";
import Image from "next/image";
import RuntimeCounter from "./counter";

type RuntimeProbeProps = {
  searchParams: Promise<{ value?: string | string[] }>;
};

async function RequestMarker({ searchParams }: RuntimeProbeProps) {
  const requestHeaders = await headers();
  const query = await searchParams;
  const value = typeof query.value === "string" ? query.value : "none";
  return (
    <p id="runtime-marker" data-nonce={crypto.randomUUID()}>
      PAIPAK_WORKERS_SSR_OK | {value} | {requestHeaders.get("x-runtime-probe") ?? "browser"}
    </p>
  );
}

export default function RuntimeProbe(props: RuntimeProbeProps) {
  return (
    <main>
      <h1>Local Workers runtime probe</h1>
      <Suspense fallback={<p>Waiting for request</p>}>
        <RequestMarker {...props} />
      </Suspense>
      <RuntimeCounter />
      <Image src="/next.svg" alt="Local static asset" width={100} height={20} unoptimized />
    </main>
  );
}
