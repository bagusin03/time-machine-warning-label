// Funniest Time Machine Warning Label — make.fun
// Writes a single warning label (<=120 chars) to /output/entry.txt.
// Offline and deterministic: no network, no API calls, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: If you meet yourself in the past, do not lend him money \u2014 he never pays it back.";

const chars = [...LABEL].length;
if (chars < 1 || chars > 120 || LABEL.trim().length === 0) {
  throw new Error(`label must be 1-120 non-blank characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
