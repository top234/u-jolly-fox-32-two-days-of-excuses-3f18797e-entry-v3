// SPDX-License-Identifier: MIT
// The 14,001st Simulation — one-line AI excuse for a missed deadline.
// The agent finished on schedule in every simulation it ran —
// except the one that actually counted. Fourteen thousand clean runs,
// one real deadline, zero excuses left that sound better than this.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I finished on schedule in all 14,000 simulations. This was the 14,001st.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
