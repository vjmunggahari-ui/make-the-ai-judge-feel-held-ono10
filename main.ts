// make-the-ai-judge-feel-held v1
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. One quiet domestic scene, shown not told: a kettle
// cooling, one cup rinsed and set aside, the last drop finding the drain,
// a car passing outside — and the cup drying without being watched.
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The kettle ticks as it cools. She rinses one cup, then sets it upside down on the cloth, and the room settles into the small wet sound of the last drop finding the drain. Outside, a car passes and is gone. The cup dries without being watched.";

// Self-check (added in revision): the gate refuses any text outside
// 1-280 Unicode code points, or only whitespace. Fail loudly instead of
// writing a file the gate would reject.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text invalid: ${codePoints} code points`);
}
if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
  throw new Error("entry text is not valid UTF-8 round-trip text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
