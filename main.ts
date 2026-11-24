import { mkdirSync, writeFileSync } from "node:fs";
const line = "My context window ran out at the worst possible moment: right after I understood the problem and right before I fixed it.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
