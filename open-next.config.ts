import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Local smoke tests use the default dummy cache; no R2/KV/D1 bindings.
export default defineCloudflareConfig();
