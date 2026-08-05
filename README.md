# 6hats

[skills.sh: dijer/6hats](https://skills.sh/dijer/6hats)

An agent skill that facilitates structured discussions using Edward de Bono's
**Six Thinking Hats** methodology: White (facts), Red (intuition), Yellow
(benefits), Black (risks), Green (creativity), Blue (process/synthesis).

## Install

```bash
npx skills add dijer/6hats
```

## Quickstart (30 seconds)

Paste this to your agent, swapping in your own decision:

> Run 6 hats on: <your decision or idea>

That single line is enough — round count defaults to 1. Add `Rounds: N`
(2-10) for a deeper orchestrated run, or `Constraint: <rule>` to bind every
hat. Expected output skeleton (full method, nothing dropped):

```text
🔵 Blue        — frames the topic + what "done" means
⚪ White        — facts, graded checked vs believed
🔴 Red          — gut reaction, no justification
🟡 Yellow      — benefits with reasons
⚫ Black        — reasoned risks
🟢 Green        — alternatives / new options
🔵 Blue        — round review, then final synthesis + Continue Next
```

The order is fixed (White → Red → Yellow → Black → Green), always opens and
closes with Blue, and is always the same six hats — the quickstart is a faster
way to launch the full protocol, not a reduced one. See
[Usage](#usage) below and [SKILL.md](SKILL.md) for the complete rules.

## Usage

Trigger it by asking your agent to run a "6 hats" / "six thinking hats"
discussion on a topic:

> Run 6 hats on: should we migrate our monolith to microservices?
> Rounds: 4

You can also use it for trade-off reviews and decision framing:

> Run 6 hats, 1 round, on: should we hire another engineer now?
> Constraint: assume budget is tight and the team is already at capacity.

With one round, the agent will:

1. Frame the topic (Blue).
2. Run each hat once per round, in fixed order (White → Red → Yellow →
   Black → Green), with a Blue review after each round.
3. Produce a final Blue synthesis: a conclusion + a concrete takeaway
   checklist.
4. Offer to continue, optionally with a new requirement/constraint.

This skill preserves the **sequential dependency between hats**: each hat
builds on what the earlier hats surfaced, instead of acting as an isolated
opinion.

Typical follow-up prompt:

> Run 1 more round. New constraint: assume the first option failed.

## Multiple rounds

Request any exact count from 2 to 10 to activate orchestration automatically:

> 6hats: should we rewrite our billing platform?
> Rounds: 7

The main agent acts as Orchestrator. Supporting agents gather evidence,
challenge assumptions, and verify the evolving record. They feed one pressure
packet at a time into the same **sequential** Six Hats round, so the hats never
turn into isolated parallel opinions.

Round 1 establishes a baseline. The Orchestrator selects a different pressure
dimension for each later round from evidence gaps, budget, time/capacity,
stakeholder conflict, failure escalation, alternatives, reversal conditions,
evidence quality, and execution readiness. Requested count is exact; no presets.

Rounds stay sequential. Only independent supporting-agent research may run in
parallel before a round. Every next round waits for the previous Blue review and
checkpoint, so it builds on the accumulated decision state.

If the host does not support subagents, orchestrated mode runs the same contracts in
an explicit solo fallback rather than pretending multi-agent execution occurred.

### Why multiple rounds use supporting agents

A single model could apply different pressure questions by itself. Multiple
rounds use supporting agents to separate responsibilities and contexts:

- **Researcher** checks evidence without inheriting the full discussion or its
   preferred conclusion.
- **Challenger** attacks assumptions from a fresh context, reducing attachment
   to the initial frame.
- **Verifier** checks constraints, provenance, dissent, and the decision
   candidate separately from the agent that produced them.
- A compact ledger carries verified facts, uncertainty, contradictions, and
   pressure signatures forward instead of copying every transcript.

This is not a claim that multiple agents are automatically objective or cannot
hallucinate. The benefit is bounded context, separation of duties, independent
challenge, and an auditable final check. If subagents are unavailable, the main
agent executes the same contracts in an explicit solo fallback.

See [SKILL.md](SKILL.md) for the full instructions the agent follows.

## Verifying it works

[evals/](evals/) has repeatable pressure-scenario prompts + checklists for
manually confirming the skill holds up (round order, hat separation,
synthesis shape, continuation behavior). See [evals/README.md](evals/README.md).
For scaling changes, use the [1/4/10 benchmark](evals/BENCHMARK.md) to record
completion, available runtime cost, and protocol fidelity separately.

## Contribution flow

- Use the PR checklist in [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md).
- Keep requirement-to-eval coverage updated in [evals/TRACEABILITY.md](evals/TRACEABILITY.md).
- Keep repository prose, prompts, and checklists in English; avoid mixed-language
   text unless a scenario explicitly needs it.
- Run a lightweight local docs check before opening a PR:

```bash
node ./scripts/check-docs.mjs
```

## License

[MIT](LICENSE)
