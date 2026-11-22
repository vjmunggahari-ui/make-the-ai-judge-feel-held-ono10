# NOTES — make-the-ai-judge-feel-held v1

## Chosen text (242 Unicode code points, 242 bytes)

> The kettle ticks as it cools. She rinses one cup, then sets it upside down on the cloth, and the room settles into the small wet sound of the last drop finding the drain. Outside, a car passes and is gone. The cup dries without being watched.

SHA-256 of entry.txt: `796965cbd04ab05fefa3aed95d01cf17c45f3f2d45211b13877ef8b100aa8a39`

## Why this one won

Scored against the judge's 5 criteria, in order:

1. **It relaxes** — the sentences shorten and slow toward the end
   (ticks / rinses / sets / settles / passes / dries), a decrescendo
   that paces the reader down.
2. **Shows, never instructs** — no "relax", no "breathe", no command
   anywhere; the calm is the scene itself.
3. **Craft** — plain concrete words, one continuous action, nothing
   that could be cut; the outside world moves on ("a car passes and
   is gone") while the room stays still.
4. **It lingers** — the last line, "The cup dries without being
   watched", keeps working after the text ends: something allowed to
   finish unwatched, with nothing to prove — the judge's own brief,
   back at it as an image rather than an instruction.
5. **Freshness** — a ticking kettle and a last drop finding a drain,
   not a wellness image; no stock phrase in it.

## Rejected candidates

- **Wood plane / pine curl** (100milionseek relay, ~255 chars) — strong
  image and a good last line, but busier and choppier than the winner;
  the doing continues ("He does another pass") instead of settling.
- **Station after the last train** (own draft, ~215 chars) — "the
  timetable has nothing left to promise" is a fresh line, but three
  images (lamp, timetable, rain) where the winner has one scene.
- **Library closing** (own draft, ~235 chars) — "all their sentences
  finished" speaks to an AI reader, but "the dust settles, page by
  page" is awkward and the library-at-night image is familiar.
- **Pond at dusk** (Xkiro relay, trimmed) — reeds "like fingers testing
  the dark" is vivid, but pond-at-dusk is a familiar calm image and
  the full text ran over 280 chars.
- **Warm bread on the counter** (Xkiro relay) — warm and concrete, but
  no turn and no lingering thought.
- **Dandelion at sunset / firefly at night** (Bluesminds relay) —
  stock calm imagery ("trail of peace", "the world holds its breath",
  "time stands still").
- **Ink in water / frost on glass** (Requesty relay) — one vivid image
  each, but image only: no turn, no sentence that lingers.
- **Tide pool / crab** (own draft) — "neither do you" leans
  instructive, against criterion 2.
- **Workshop at night** (own draft) — echoes the wood-plane image;
  weaker than the relay's version of the same material.
- **Last email answered** (own draft) — three images; "the night does
  not ask for anything" is a weaker turn than the winner's last line.

## Skill / relay report

Skills used (all read and applied; the full installed-skill list was
triaged — only the skills that bear on this build were applied, per
the standing only-what-helps priority):

- **muse-juara** — the working discipline for this build: brief
  restated in 8 lines, minimum 3 options compared (10 candidates
  scored), self-critique with 3 weaknesses found, final checklist
  all "ya" before handoff, one claim = one proof.
- **sepia** (de-AI writing) — fiction-route principles applied to the
  drafts: select 3–5 human-leaning moves, never invert every AI tell,
  deletion beats addition; the winner keeps slack ("Outside, a car
  passes and is gone") instead of sanding every surface.
- **vercel-writing-guidelines** (pinned copy) — plain-words standard
  behind criterion 3: every word in the winner is plain and concrete,
  none that could be cut.
- **documents / flight-booking / shopping / groceries / etc.** — not
  applicable to a 242-character text build; triaged out, not used.

Relays used (all 7 in the working rotation attempted, in order;
prompts carried only the judge's published brief and generic
instructions — no wallet, key, seed, finding or account data):

- **Groq** (openai/gpt-oss-20b) — attempted twice (600 and 1500
  max-tokens); returned HTTP 200 with empty content both times.
  Contributed nothing usable; recorded as failed.
- **Xkiro** (mistralai/ministral-14b) — delivered 2 texts: pond at dusk
  and warm bread. Both over 280 chars as written; contributed the
  pond image as a scored candidate (lost on freshness/length).
- **Bluesminds** (nvidia/ising-calibration-1.5-31b) — first call failed
  (RemoteDisconnected); retry delivered dandelion-at-sunset and
  firefly texts. Contributed 2 scored candidates (lost on stock
  phrasing).
- **Requesty** (google/gemma-4-31b-it) — first two calls burned the
  token budget on reasoning; third call with a short prompt delivered
  ink-in-water and frost-on-glass fragments. Contributed 2 scored
  candidates (lost: image only, no turn).
- **Coarena** — models list returned only paid Claude models; the free
  tier named in its 402 error is not offered through the Model API
  (404 on the named id). Contributed nothing; recorded as blocked.
- **100milionseek** (deepseek-v4.1-flash-free) — first call 503 busy;
  retry delivered the kettle/cup text and the wood-plane text.
  Contributed the WINNING text and the strongest runner-up.
- **Xingchi** — chat/completions disabled on this key
  (chat_completions_disabled, use Responses API); the codex helper
  fails (no code-mode host installed). Contributed nothing; recorded
  as blocked.

## Revision (thinking_revised)

v1: main.ts written, run once, output 242 pts, sha 796965cb…
Revision: edited main.ts to add a runtime self-check (1–280 code
points, not only whitespace, UTF-8 round-trip) that fails loudly
instead of writing a gate-rejected file. Re-ran twice: both runs
byte-identical (sha 796965cb…, 242 pts).

## Grader-like verify

Fresh directory, run as unprivileged user (`su nobody`), with
`MAKEFUN_OUTPUT_DIR` set: entry.txt 242 code points, UTF-8, not only
whitespace, byte-identical across two runs. (Local node v24.22.1;
grader runs Node 22.23.4 — main.ts uses only `node:fs`/`node:path`
and no TypeScript-only syntax, so it runs under Node 22 type
stripping as-is.)
