---
name: 6hats
description: >
  Use when the user asks for a "6 hats" / "six thinking hats" / "шесть шляп"
  discussion, wants to brainstorm, analyze, or review a topic/idea/decision
  from multiple perspectives, asks for a structured pros/cons/risk/creativity
  workshop, or wants more than a single one-sided opinion on a decision.
---

# Six Thinking Hats

## Overview

Structured multi-perspective discussion of a single topic, based on Edward
de Bono's Six Thinking Hats. One "hat" = one exclusive lens. Never blend
hats — each contribution must stay inside its own lens, even when it's
tempting to add a caveat that belongs to another hat. Core principle:
**separate the perspectives so they don't dilute each other.**

## When to Use

- User explicitly invokes "6 hats" / "six thinking hats" / "шесть шляп".
- User wants a decision or idea stress-tested from multiple angles instead
  of a single blended opinion.
- User asks for structured pros/cons/risk/creativity review of a plan.

Not for: quick factual questions, or when the user just wants a direct
recommendation without process.

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

## Round structure

```
Blue (frame)          — state the topic, scope, and what "done" looks like
Round 1..N:
  White → Red → Yellow → Black → Green   (fixed order, one pass each)
  Blue (round review)  — 2-3 lines: what's new, do we need another round?
Blue (synthesis)       — final conclusion + takeaways (after the last round)
```

- Default rounds = **1** if the user doesn't specify a number. Ask once,
  up front, if it's genuinely ambiguous — otherwise just proceed with 1.
- Every hat contribution: short, labeled with hat emoji + name, and
  written strictly from that hat's lens. Don't pad with disclaimers from
  other hats.
- Carry context forward: each hat should build on what prior hats in the
  *same* round said, and Blue's round reviews should reference prior
  rounds — don't just repeat the previous round.

## Setup (before Blue frame)

Collect, from the user's request or by asking one compact question if
missing:

- **Topic** — required.
- **Rounds** — optional integer, default 1.
- **Constraint/requirement** — optional extra rule that applies to every
  hat this run (e.g. "focus on budget under $10k", "assume a 2-person team").

## Ending the discussion

After the final round's Blue review, produce the **Blue Hat synthesis**:

1. **Conclusion** — 2-4 sentences, the actual answer/decision.
2. **Takeaways** — a short bullet checklist of concrete, actionable next
   steps derived from the discussion (this is the "hints" the user gets
   to walk away with — not a recap of what each hat said).

Then offer to continue:

> Ask the user: run **N more rounds**? Optionally with a new
> requirement/constraint to inject (e.g. a fresh angle, a tightened
> constraint, new information).

If the user asks for more rounds:
- Resume numbering from where the previous run left off (don't restart at
  Round 1).
- If a new requirement was given, apply it to every hat from that round
  onward, and have Blue mention it in the round frame.
- Produce a new Blue synthesis at the end that supersedes (not just
  appends to) the previous one, since it now has more information.

## Style rules

- Reply in the language the user used for the topic.
- Keep each hat's turn tight (a few lines) — this is a discussion, not an
  essay per hat.
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

⚪ White: Team is 4 devs, all know React, 0 Svelte production experience.
Current app: ~40 components, no SSR. Migration would take ~3-4 weeks.

🔴 Red: Svelte sounds fun and modern. Also mild dread about learning-curve
risk before a big release.

🟡 Yellow: Smaller bundle size, less boilerplate, faster onboarding for
new hires long-term. Could ship a snappier UI as a side benefit.

⚫ Black: 3-4 weeks with zero Svelte experience is optimistic — expect
slippage. Ecosystem/libraries are thinner than React's. Risk of stalling
the actual roadmap.

🟢 Green: Alternative — pilot Svelte on one new, low-stakes internal tool
first instead of migrating the whole app. Or reduce React's boilerplate
with existing tooling instead of switching frameworks.

🔵 Blue (synthesis):
**Conclusion:** Don't do a full migration now — the team has zero Svelte
experience and a live roadmap; the risk outweighs the bundle-size win.
**Takeaways:**
- Pilot Svelte on one new internal tool to build real experience.
- Re-evaluate a full migration only after that pilot ships.
- If bundle size is the itch, try trimming React boilerplate first.

Want to run another round — maybe with a constraint like "assume the
pilot already shipped successfully"?
```

## Common Mistakes

| Mistake | Fix |
|---|---|
| Black also proposes alternatives ("but we could instead...") | That's Green's job. Black states risk only, no alternatives. |
| Blue picks a side during framing or review | Blue only frames/moderates/synthesizes — never argues. |
| Synthesis just recaps what each hat said | Synthesis must be a conclusion + actionable takeaways, not a summary. |
| Extra rounds restart at "Round 1" | Continue numbering from the last round used. |
| A new requirement is mentioned but only Blue references it | Apply the constraint to every hat's contribution from that round on. |
| Hats write long essays | Keep each turn to a few lines — it's a discussion, not a report. |

