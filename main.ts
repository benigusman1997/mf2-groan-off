// The One-Liner Groan-Off — make.fun bounty u-alfasurya91-the-one-liner-groan-off-5a1febd5
// One pun, written to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node standard library only; no network, clock or randomness: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILE = "entry.txt";
const CHAR_CAP = 140;

const ENTRY =
  "My wife asked why I still hadn't fixed the leaky tap. I said I keep putting it off, but it won't stay off. That's the whole problem.";

function reject(reason: string): never {
  console.error(`${OUTPUT_FILE} rejected: ${reason}`);
  process.exit(1);
}

const length = Array.from(ENTRY).length;
if (length < 1 || length > CHAR_CAP) reject(`${length} characters, allowed 1 to ${CHAR_CAP}`);
if (/[\r\n\t]/.test(ENTRY)) reject("must be a single line");
if (ENTRY !== ENTRY.trim()) reject("leading or trailing white space");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), ENTRY, "utf8");
console.log(`${OUTPUT_FILE} written: ${length} of ${CHAR_CAP} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes`);
