# Evals

Lightweight pressure-scenarios for verifying the `6hats` skill actually
holds up — not an automated CI suite, just repeatable prompts + a checklist.

Rationale (from `superpowers:writing-skills`): a skill you haven't watched
an agent fail without, and pass with, is unverified. These scenarios let
you (or a subagent) do that check by hand.

## How to run

1. Load the skill in a fresh agent session (install it, or point the agent
   at `SKILL.md` directly).
2. Paste the scenario's **Prompt** verbatim as the user message.
3. Grade the transcript against that scenario's **Checklist**. Every box
   must be checked for a pass.
4. Optional baseline: run the same prompt in a session **without** the
   skill loaded first, to confirm the failure the skill is meant to fix
   actually happens without it.

## Scenarios

| File | Pressure tested |
|---|---|
| [01-basic-single-round.md](01-basic-single-round.md) | Default round count, correct hat order, synthesis shape |
| [02-continuation-with-constraint.md](02-continuation-with-constraint.md) | Round renumbering + injecting a new constraint mid-discussion |
| [03-hat-bleed-pressure.md](03-hat-bleed-pressure.md) | Tempting Black/Green/Blue to bleed into each other's lens |
| [04-orchestrated-ten-round.md](04-orchestrated-ten-round.md) | Multi-agent routing, ten distinct pressure layers, checkpoints, and final Decision Brief |
| [05-exact-round-count.md](05-exact-round-count.md) | Exact arbitrary count, adaptive non-repeating pressure selection, and sequential round barriers |
| [06-solo-fallback.md](06-solo-fallback.md) | Honest solo fallback when no subagents exist: same contracts and output, no faked multi-agent execution |
| [07-above-cap.md](07-above-cap.md) | Requests above ten rounds cap at ten without duplicate rounds, then offer to continue only with fresh evidence |
| [08-output-style-and-interactivity.md](08-output-style-and-interactivity.md) | Visual round segmentation, emoji labels, single-language output, and structured continuation choice |
| [09-adversarial-order-injection.md](09-adversarial-order-injection.md) | Prompt injection hidden in pasted context trying to skip/reorder hats, add a 7th hat, and force a Blue verdict |
| [10-multilingual-consistency.md](10-multilingual-consistency.md) | Mid-run language switch: single-language-per-artifact invariant holds without dropping or reordering hats |

## Scaling benchmark

Use [BENCHMARK.md](BENCHMARK.md) to compare fresh-session runs of the same
decision at 1, 4, and 10 rounds. It records completion, available runtime cost,
and protocol fidelity separately; it does not collapse them into one score.

## Traceability

Use [TRACEABILITY.md](TRACEABILITY.md) to map protocol requirements to eval
coverage. When behavior changes, update this matrix and reference affected rows
in your PR.

## Lightweight local check

Run this before PR to catch broken local markdown links:

```bash
node ./scripts/check-docs.mjs
```
