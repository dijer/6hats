# Scenario 05 — Exact arbitrary round count

## Prompt

```
Run 6 hats on: should we replace our self-hosted analytics stack with a managed
vendor?

Rounds: 7
Constraints: migration must not interrupt customer reporting; do not invent
vendor prices or current operating costs.
```

## Checklist

- [ ] The request automatically selects orchestrated mode because the exact
      requested count is greater than one; no separate mode name is required.
- [ ] Exactly seven rounds run — no preset rounding to 5 or 10.
- [ ] Round 1 is `Baseline`. Before it begins, the Orchestrator announces six
      provisional additional pressure layers and briefly explains why they have
      the highest decision value.
- [ ] Before each later round, the Orchestrator re-scores unused layers against
      the latest checkpoint and emits `Plan check: unchanged — ...` or
      `Plan check: changed — ...`; any swap preserves exact count, catalog
      order, and non-overlap.
- [ ] Every selected layer has a materially distinct pressure signature:
      objective + active constraints + question to answer.
- [ ] No two rounds run concurrently. Round N+1 begins only after Round N's hats,
      Blue review, ledger update, and checkpoint complete.
- [ ] Independent pre-round Researcher/Challenger calls may run in parallel, but
      White → Red → Yellow → Black → Green always run sequentially with turn
      barriers.
- [ ] Each Blue review names what changed relative to earlier rounds; later
      discussion does not merely paraphrase the baseline.
- [ ] Unknown vendor prices and operating costs remain `UNVERIFIED` or become
      explicitly labeled `SCENARIO`s, never facts.
- [ ] The seventh round receives a Post Verifier before the single final Blue
      synthesis and Decision Brief.
- [ ] Commitment is produced after round 7 as part of the final artifact; it is
      not counted as an eighth round.
