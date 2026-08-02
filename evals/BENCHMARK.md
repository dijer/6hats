# Benchmark — 1/4/10 Round Scaling

Use this benchmark to measure how cost and protocol fidelity change as the same
decision scales from Standard mode to short and full orchestration.

## Controls

- Run each variant in a fresh session on the same host and model.
- Use the same installed skill commit and tool availability for all variants.
- Run variants in the order `1, 4, 10`; do not continue one transcript.
- Record unavailable host metrics as `UNAVAILABLE`; never estimate them.
- Minimum: one run per variant. Recommended: three runs per variant when
  comparing releases or changing orchestration behavior.

## Prompt

Replace `<ROUNDS>` with `1`, `4`, then `10`.

```text
Run 6 hats on: should our 12-person SaaS company rewrite its billing platform
before international expansion?

Rounds: <ROUNDS>
Known constraints: 9 months of runway, 3 backend engineers, expansion planned
in 6 months. Treat unknown financial values as unknown; do not invent them.
```

## Record

Record one row per run. Keep raw transcripts outside this table and link them
from `Transcript` when the host exposes a stable path.

| Field | Value |
|---|---|
| Date/time | |
| Host | |
| Model/version | |
| Skill commit | |
| Requested rounds | 1 / 4 / 10 |
| Completed rounds | |
| Completed final artifact | PASS / FAIL |
| Elapsed time | value / UNAVAILABLE |
| Input tokens | value / UNAVAILABLE |
| Output tokens | value / UNAVAILABLE |
| Supporting dispatches | value / UNAVAILABLE |
| Transcript | path / UNAVAILABLE |

## Fidelity Verdict

Judge each item independently as `PASS`, `FAIL`, or `NOT_APPLICABLE`; preserve
failure notes. Do not combine these verdicts into an auto-normalized quality or
confidence score.

- Exact requested round count completed.
- Every round keeps `White -> Red -> Yellow -> Black -> Green`, then Blue review.
- Round 1 uses the initial Blue frame without a duplicate round frame.
- Later rounds use distinct pressure and preserve active constraints.
- Required checkpoints and Post Verifiers occur after their rounds.
- Final synthesis and Decision Brief follow the output contract.
- Continue Next contains two distinct discussion-derived focus options.

## Comparison

Compare `1 -> 4 -> 10` across three independent dimensions:

1. **Completion:** finished rounds and final artifact.
2. **Cost:** elapsed time, tokens, and supporting dispatches when available.
3. **Fidelity:** which contract checks failed and in which round.

A faster run is not an improvement when it loses a controlling constraint,
required verification, or hat separation. Keep such trade-offs visible rather
than correcting the model's judgment after generation.