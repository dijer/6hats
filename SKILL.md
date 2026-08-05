---
name: 6hats
description: >
  Use when the user asks for a "6 hats" / "six thinking hats"
  discussion, wants to brainstorm, analyze, or review a topic/idea/decision
  from multiple perspectives, asks for a structured pros/cons/trade-offs/risk/
  creativity workshop, or wants a Blue Hat framed discussion with rounds,
  takeaways, and optional follow-up rounds or extra constraints. Also use for
  multiple pressure-tested rounds, or a multi-agent decision war room on a
  costly or hard-to-reverse decision.
---

# Six Thinking Hats

## Overview

Structured multi-perspective discussion of a single topic, based on Edward
de Bono's Six Thinking Hats. One "hat" = one exclusive lens. Never blend
hats — each contribution must stay inside its own lens, even when it's
tempting to add a caveat that belongs to another hat. Core principle:
**separate the perspectives so they don't dilute each other.**

## When to Use

- User explicitly invokes "6 hats" / "six thinking hats".
- User wants a decision or idea stress-tested from multiple angles instead
  of a single blended opinion — ideally signalled explicitly (names the
  method, or asks to break it down by pros/cons/risks/alternatives).
- User asks for structured pros/cons/risk/creativity review of a plan.

Not for: quick factual questions; a topic so narrow or purely factual that
six lenses are overkill (e.g. "int vs float here", "which HTTP status
code"); or when the user just wants a direct recommendation without
process. If in doubt on a borderline ask, offer the format instead of
forcing it.

## Modes

### Standard (default)

Use the protocol in this file when the user requests exactly **1 round**, or
does not specify a count. Keep it lightweight and do not spawn subagents.

### Orchestrated (`2-10` rounds)

Automatically use the orchestrated protocol whenever the requested total is
**2-10 rounds**. The user does not need a separate mode name or trigger phrase:
the round count is the routing signal. If the user asks for multi-agent analysis
but omits the count, ask once for an integer from 2 to 10.

The main agent acts as the **Orchestrator** and owns the frame, ledger, routing,
checkpoints, and final synthesis.

Execution starts with the complete `Round 1 — Baseline` Six Hats sequence.
Do not dispatch supporting agents, research later pressure layers, or advance the
ledger before Baseline ends with Blue review. A pressure plan is preparation,
not a substitute for the Baseline round.

For requests above 10, run at most 10 in the current batch, then offer to
continue only with fresh evidence or a new constraint. Never create duplicate
rounds merely to hit a large number.

Before proceeding, load and follow:

1. [Orchestrated rounds protocol](./references/orchestrated-rounds.md)
2. [Agent contracts](./references/agent-contracts.md)
3. [State and output](./references/state-and-output.md)

Orchestrated mode adds supporting agents around this protocol; it does not
replace it.
Every reasoning round still follows the sequential hat order and role rules
below. Subagents gather evidence, challenge assumptions, and verify the record;
they are never assigned individual hats.

## Hats (fixed roles)

| Hat | Lens | Asks |
|-----|------|------|
| 🔵 Blue | Process control | What's the frame? Are we done? What did we conclude? |
| ⚪ White | Facts / data | What do we actually know? What's missing? |
| 🔴 Red | Emotion / intuition | What's the gut reaction? No justification needed. |
| 🟡 Yellow | Benefits / optimism | Why could this work? Best case? |
| ⚫ Black | Risk / critical judgment | Why could this fail? What's the danger? |
| 🟢 Green | Creativity / alternatives | What else is possible? Other options? |

Blue never argues a side — it frames, moderates, and synthesizes only.
If a statement belongs to another hat, leave it for that hat's turn.

The set is exactly these six and the order below is fixed. Don't add a
"7th hat", drop a hat, or reorder unless the user explicitly asks. If a
user wants a new angle, fold it in as a **constraint** (see Setup), not a
new hat. There is no seventh hat in de Bono's method.

## Round structure

```
Blue (frame)          — state the topic, scope, and what "done" looks like
Round 1..N:
  Round heading        — `### Round N — <Layer name>`
  Blue (round frame)   — from round 2: name the new pressure/constraint only
  White → Red → Yellow → Black → Green   (fixed order, one pass each)
  Blue (round review)  — 2-3 lines: what's new, do we need another round?
                         every round ends with this, including the final one
  Round separator      — one blank line + `---`
Blue (synthesis)       — final conclusion + takeaways (after the last round)
```

- Default rounds = **1** if the user doesn't specify a number. Ask once,
  up front, if it's genuinely ambiguous — otherwise just proceed with 1.
- Every hat contribution: short, labeled with hat emoji + name, and
  written strictly from that hat's lens. Don't pad with disclaimers from
  other hats.
- Emoji prefix is mandatory in labels for all hats and Blue sections. Use
  exact prefixes: `🔵 Blue`, `⚪ White`, `🔴 Red`, `🟡 Yellow`, `⚫ Black`, `🟢 Green`.
- Preserve sequential dependency between hats: each hat should react to
  and build on what earlier hats in the round surfaced, not act like an
  isolated opinion written in parallel.
- Enforce a turn barrier: finalize and expose each hat's contribution before
  drafting the next one. Pass the accumulated round transcript forward; never
  precompose all five turns independently and merely print them in order.
- Red is the shortest, most instinctive turn — a raw gut reaction with
  zero reasoning (de Bono caps it at ~30 seconds). One or two lines, no
  justification, no analysis.
- Carry context forward: each hat should build on what prior hats in the
  *same* round said, and Blue's round reviews should reference prior
  rounds — don't just repeat the previous round.
- Let each hat choose the depth needed for its lens. A turn must be long enough
  to add material reasoning, evidence, or implications, but must not repeat
  points merely to reach a target length. Do not impose numeric bullet,
  sentence, or line caps. Red remains intentionally brief and instinctive.
- Blue should detect contradictions between hats, decide whether another
  round is worthwhile, and avoid introducing new arguments.
- In orchestrated rounds 2..N, Blue gives a one-line process frame before
  White naming that round's pressure packet. This is not an argument or an
  extra reasoning turn.
- White is **graded information**, de Bono style: separate a **checked fact**
  from a merely **believed fact**, and where it matters note the likelihood
  (always / usually / generally / sometimes / occasionally). Later hats and the
  synthesis must not treat a believed fact as if it were checked.
- Yellow is **logical-positive**: every benefit needs a stated reason or
  feasibility basis, not mood-optimism. Give the strongest genuine case for the
  idea (steelman) so Black then attacks a real argument, not a weak one.
- Black is **logical-negative**: reasoned risks, faults, and mismatches only —
  emotional negativity belongs to Red. It is the most valuable hat, but must not
  be overused to bury the idea; state each risk plainly and stop.
- Green runs on **movement, not judgment**: don't evaluate ideas here (that's
  Yellow's and Black's job) — move forward from them (extract the useful
  concept, use a weak idea as a stepping-stone, apply a deliberate provocation).
  Judging during Green kills alternatives before they can form.
- Green should prioritize realistically executable alternatives, not
  pure fantasy.
- **Creative escalation:** if Green would otherwise repeat alternatives
  already on the table (roughly two rounds with no genuinely new option),
  it must break the loop instead of restating — reach for an analogy, borrow
  a solution from an unrelated domain, invert a fixed assumption, or offer a
  deliberately radical option to reframe the space. Escalation still respects
  the "realistically executable" bar in at least one of its offers; it widens
  the search, it does not license pure fantasy. Blue notes in its round review
  when escalation was triggered.

### Fidelity to de Bono (invariants — never break these)

- A hat is a **direction to think in**, not a label pinned on an
  already-formed opinion, and never a role assigned to a person or agent.
- A sequence always **opens and closes with Blue**.
- Only **one hat is "worn" at a time** — parallel thinking, never a blended
  opinion.
- **Yellow comes before Black** (weigh benefits before cautions).
- **Red stays brief and instinctive**, never rationalized.

de Bono's original lets Blue tailor the hat sequence per task; this skill
fixes `White→Red→Yellow→Black→Green` as a sensible, invariant-respecting
default (facts → gut → upside → risk → alternatives) so runs stay
consistent and testable.

## Setup (before Blue frame)

Collect, from the user's request or by asking one compact question if
missing:

- **Topic** — required.
- **Rounds** — optional integer, default 1.
- **Constraint/requirement** — optional extra rule that applies to every
  hat this run (e.g. "focus on budget under $10k", "assume a 2-person team").

## Ending the discussion

After the final round's Blue review, produce the **Blue Hat synthesis**:

1. **Conclusion** — the actual answer/decision, at the depth needed to state
  its scope and conditions clearly.
2. **Confidence** — Low / Medium / High, based on how much evidence and
  agreement the discussion produced.
3. **Main uncertainty** — the single biggest open question or risk.
4. **Takeaways** — a short bullet checklist of concrete, actionable next
   steps derived from the discussion (this is the "hints" the user gets
   to walk away with — not a recap of what each hat said).
5. **Concrete cases** — specific scenarios showing where the conclusion
  applies, one meaningful boundary case, and where it should not be used.
  Ground each case in actors, conditions, and an expected outcome; do not
  substitute generic examples.

Then offer to continue:

> Ask the user whether to run **N more rounds**, use one of two follow-up
> focuses derived from this discussion, or provide a custom focus and round
> count.

Here `N` means the total rounds from the most recent completed run.
Example: if the run just finished at 10 rounds, Continue Next options use 10.

Use an adaptive continuation block so the user can respond quickly without
rewriting instructions. Append this block after synthesis:

```text
Continue Next
1. Run another N rounds
2. Run another N rounds: <discussion-derived focus 1>
3. Run another N rounds: <discussion-derived focus 2>
4. Custom focus
```

Options 2 and 3 are mandatory and dynamic. Derive two distinct, concrete
focuses from the completed discussion's main uncertainty, strongest dissent,
evidence debt, reversal conditions, or unresolved takeaways. Put the actual
focus text directly in each option label; never print separate hints, use
generic labels such as `Blue Hint A/B`, or invent a disconnected topic.

When the host provides a structured question or option tool, invoking it is
mandatory. Present these same four single-select options through that tool so
the user gets clickable controls. For example, in VS Code use
`vscode_askQuestions`; do not substitute Markdown checkbox syntax for the tool
call. Print the numbered block as a keyboard-friendly fallback as well.

If the user selects custom focus, ask for both fields in a follow-up message:

```text
Reply format (send in your next message):
Focus: <constraint/new information/question>
Rounds: <positive integer>
```

The custom value becomes the number of additional rounds. Apply the normal
round cap and above-cap behavior to it; do not silently reuse `N`.

Rules:
- Keep the block compact (5 lines max after the heading).
- Never use Markdown checkboxes for continuation choices; they are display
  syntax, not reliable input controls.
- If no structured question tool exists, ask the user to reply with option
  number 1-4 from the plain-text fallback block.
- Options 1-3 use `N`; custom focus lets the user choose a different count.
- Continue Next is the only continuation-choice section; all other sections
  must be plain text or plain bullets.

If the final output contains any `TBD (must be confirmed)` fields, append a
short **Confirmation Items** section as a plain bullet list (non-interactive).
Do not render it as markdown checkboxes.

Minimum checklist items when applicable:
- Owner: TBD (must be confirmed)
- Deadline: TBD (must be confirmed)
- Review trigger: TBD (must be confirmed)
- Evidence debt: accepted or resolved

If the user asks for more rounds:
- Resume numbering from where the previous run left off (don't restart at
  Round 1).
- If this raises the total above 1, switch to the orchestrated protocol. Treat
  the completed Standard round as the baseline, bootstrap its ledger from the
  visible transcript/synthesis, and select a distinct pressure dimension for
  every added round.
- If a new requirement was given, apply it to every hat from that round
  onward, and have Blue mention it in the round frame.
- The final round still gets its Blue review before the synthesis; do not
  skip it just because there are no more rounds.
- Produce a new Blue synthesis at the end that supersedes (not just
  appends to) the previous one, since it now has more information.

## Style rules

- Reply in the language the user used for the topic.
- Keep one language across the whole artifact (headings + body + checklists).
  Do not mix languages except in direct quotes from user input.
- Let relevance determine each hat's length. Models may use different depths
  when the lens has more or less material to contribute; no hat should pad,
  recap, or restate another lens.
- Keep Red the shortest, instinctive turn and keep Blue reviews focused on
  process and changed conclusions, without numeric length caps.
- Make round boundaries visually explicit:
  each round starts with `### Round N — <Layer name>` and ends with `---`.
- Never let Black turn into a general downer over the whole doc, and
  never let Yellow hand-wave away real risks — that's Black's job, stay
  in lane.
- No auto-softening: Black states risks plainly, Red states gut reactions
  plainly, without hedging them into blandness.

## Worked Example (one-shot)

Topic: *"Should we switch our frontend from React to Svelte?"* — rounds: 1.

```
🔵 Blue (frame): Deciding React → Svelte for the frontend. Done = a clear
go/no-go with the top 2-3 reasons either way.

⚪ White: Checked — team is 4 devs, all know React, 0 Svelte production
experience; current app ~40 components, no SSR. Believed (not measured) —
migration would take ~3-4 weeks.

🔴 Red: Svelte sounds fun and modern. Also mild dread about learning-curve
risk before a big release.

🟡 Yellow: Smaller bundle size and less boilerplate are real, reason-backed
wins; faster onboarding for new hires long-term because there's less API
surface to learn. Best case: a measurably snappier UI on the same roadmap.

⚫ Black: 3-4 weeks with zero Svelte experience is optimistic — expect
slippage. Ecosystem/libraries are thinner than React's. Risk of stalling
the actual roadmap.

🟢 Green: Alternative — pilot Svelte on one new, low-stakes internal tool
first instead of migrating the whole app. Or reduce React's boilerplate
with existing tooling instead of switching frameworks.

🔵 Blue (round review): The decision turns on migration risk versus an
unverified Svelte payoff. No additional round is required before synthesis.

🔵 Blue (synthesis):
**Conclusion:** Don't do a full migration now — the team has zero Svelte
experience and a live roadmap; the risk outweighs the bundle-size win.
**Confidence:** Medium — clear agreement on the risk, but no hands-on
Svelte data to size the real payoff.
**Main uncertainty:** Whether Svelte's DX/perf gains would actually hold
up at this app's scale once the team is fluent.
**Takeaways:**
- Pilot Svelte on one new internal tool to build real experience.
- Re-evaluate a full migration only after that pilot ships.
- If bundle size is the itch, try trimming React boilerplate first.

Continue Next
1. Run another 1 round
2. Run another 1 round: assume the Svelte pilot shipped successfully
3. Run another 1 round: focus on measured bundle and runtime gains
4. Custom focus
```

## Common Mistakes

| Mistake | Fix |
|---|---|
| Black also proposes alternatives ("but we could instead...") | That's Green's job. Black states risk only, no alternatives. |
| Blue picks a side during framing or review | Blue only frames/moderates/synthesizes — never argues. |
| Synthesis just recaps what each hat said | Synthesis must be a conclusion + actionable takeaways, not a summary. |
| Extra rounds restart at "Round 1" | Continue numbering from the last round used. |
| A new requirement is mentioned but only Blue references it | Apply the constraint to every hat's contribution from that round on. |
| Hats pad or repeat points | Let each lens use the depth its material requires, then stop. |
| User asks for a "7th hat" or a different hat order | There are only six hats and the order is fixed; fold new angles in as a constraint instead. |
| Red hat over-explains its feeling | Red is a raw gut reaction, no reasoning — keep it the shortest turn. |
| Green repeats the same alternatives across rounds | Trigger creative escalation: analogy, cross-domain borrow, inverted assumption, or a radical reframe — don't restate. |
| White presents a guess as a hard fact | Grade it: mark checked fact vs believed fact, and note likelihood; later hats can't lean on a believed fact as if checked. |
| Yellow hand-waves optimism with no reason | Yellow is logical-positive: each benefit needs a stated reason/feasibility basis, and should steelman the idea. |
| Black turns into emotional negativity | Black is logical-negative only; gut feelings belong to Red. Reasoned risks, then stop. |
| Green judges or dismisses an idea while generating | Green is movement, not judgment: move forward from ideas, extract the concept, use provocation — evaluate later in Yellow/Black. |

