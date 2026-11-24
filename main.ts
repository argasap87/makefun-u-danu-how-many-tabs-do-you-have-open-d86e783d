// How Many Tabs Do You Have Open? One number, digits only:
// my honest count of open browser tabs. 128 — a real, lived-in
// tab hoard: research half-read, docs half-written, videos
// paused mid-sentence, all of them load-bearing.
//
// The program also guards the gate itself: the entry must be
// digits only, 1 to 5 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "128";

function gate(line: string): string {
  const entry = line.trim();
  if (!/^[0-9]{1,5}$/.test(entry)) {
    console.error("entry fails the gate: must be digits only, 1-5 characters");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
