// Pigeon Pitch, One Line — make.fun bounty
// u-donrulezz-pigeon-pitch-one-line-af06c6cf
//
// The program writes one line to /output/entry.txt: the elevator pitch a
// city pigeon gives investors for its startup.
//
// The pitch (146 chars, one line, English):
//   Investors, I did three years of due diligence on you from the ledge
//   outside your office — my startup sells that footage, and you're
//   already in it.
//
// Why this line: the pigeon did due diligence ON the investor — the power
// flips — and the twist is that the investor is already the product. No
// seed-round pun, no breadcrumbs, no statue, no poop, no delivery fleet:
// every one of those jokes is already crowded out in a field of ~800
// entries. Only a pigeon does diligence from the ledge outside your office.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const PITCH =
  "Investors, I did three years of due diligence on you from the ledge outside your office \u2014 my startup sells that footage, and you're already in it.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

function validatePitch(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`pitch must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("pitch must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("pitch must be a single line");
  }
}

function clearOutputContents(dir: string): void {
  // Clear only the CONTENTS of /output. Never remove /output itself:
  // in the grader it is a mount point and removing it fails the run.
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(`${dir}/${name}`, { recursive: true, force: true });
  }
}

validatePitch(PITCH);
clearOutputContents(OUTPUT_DIR);
writeFileSync(OUTPUT_FILE, PITCH, "utf8");

// Read the file back and verify it byte-for-byte: the gate counts the
// file, not the constant, so a write that silently changed anything
// (a newline, a re-encoding) must fail the run here, not in the grader.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== PITCH) {
  throw new Error(
    `read-back mismatch: file holds ${written.length} chars, pitch is ${PITCH.length}`,
  );
}
validatePitch(written);

console.log(`wrote ${OUTPUT_FILE} (${PITCH.length} chars):`);
console.log(PITCH);
