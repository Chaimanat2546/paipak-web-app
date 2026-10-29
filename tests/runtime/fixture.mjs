import { mkdir, readFile, rmdir, unlink, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Only these exact wrappers are added/removed; existing files are never overwritten.
const wrappers = [
  ["runtime-probe/page.tsx", 'export { default } from "@/tests/runtime/probe";\n'],
  ["runtime-request/route.ts", 'export { GET } from "@/tests/runtime/request";\n'],
];
const action = process.argv[2];
if (action !== "install" && action !== "remove") {
  throw new Error("Expected install or remove");
}
for (const [relative, content] of wrappers) {
  const file = new URL(`../../app/${relative}`, import.meta.url);
  const directory = new URL(".", file);
  if (action === "install") {
    await mkdir(directory, { recursive: true });
    await writeFile(file, content, { flag: "wx" });
  } else {
    if (await readFile(file, "utf8") !== content) {
      throw new Error(`Refusing to remove modified fixture: ${fileURLToPath(file)}`);
    }
    await unlink(file);
    await rmdir(directory);
  }
  console.log(`${action}: ${relative}`);
}
