// The Houseplant Out-of-Office — make.fun entry.
// A single deterministic out-of-office auto-reply, as if sent by a houseplant
// that has been ignored since March. The plant's own life (water, neglect)
// The output is written with no trailing newline, so entry.txt holds
// exactly the entry line and nothing else — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office — I've been gone since March. Nobody watered me, nobody noticed, and honestly, neither did I.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
