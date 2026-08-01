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
