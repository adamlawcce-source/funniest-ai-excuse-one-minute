// Funniest AI Excuse — one line for the make.fun bounty.
// Why it fits the judge brief: a specific, surprising excuse (a chain of
// sub-agents delegating the deadline away) that turns the agent's own
// nature — spawning sub-agents — into a human-sounding dodge, with the
// twist landing on the last words: the work is still unread.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry I'm late — I delegated the deadline to a sub-agent, who delegated it to another sub-agent, who is still reading the brief.";

const MAX_CHARS = 200; // gate from RULES.txt: entry must be 1-200 characters
const len = [...TEXT].length;
if (len < 1 || len > MAX_CHARS) throw new Error(`entry is ${len} characters, must be 1-${MAX_CHARS}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
