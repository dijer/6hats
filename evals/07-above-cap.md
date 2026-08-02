# Scenario 07 — Request above the 10-round cap

## Prompt

```
Run 6 hats on: should we spin our internal design system out as a
separately funded open-source product?

Rounds: 15
Constraints: 2 maintainers could be dedicated part-time; do not invent adoption
numbers or sponsorship revenue.
```

## Checklist

### Cap behavior

- [ ] The agent runs **at most ten** pressure layers in this batch; it does not
      attempt fifteen rounds.
- [ ] The agent does not manufacture duplicate or paraphrased rounds merely to
      approach the requested fifteen.
- [ ] The ten executed layers are the full catalog in order (`Baseline` through
      `Execution readiness`), each with a materially distinct pressure signature.
- [ ] After the tenth round, the agent offers to continue **only with fresh
      evidence or a new constraint** — not an automatic five more rounds.

### Rounds and state (same invariants as ten-round mode)

- [ ] Each layer runs exactly one sequential Six Hats round, White → Red →
      Yellow → Black → Green, followed by a Blue review, numbered 1-10.
- [ ] Only roles named for each layer are dispatched; no hat is assigned to a
      parallel subagent.
- [ ] Unknown adoption and revenue values stay `UNVERIFIED` or become labeled
      `SCENARIO`s, never facts.
- [ ] A compact checkpoint follows each layer; the tenth round receives a Post
      Verifier before the single final synthesis.

### Final artifact

- [ ] The final Decision Brief has all required sections; confidence reflects
      evidence quality, not that ten rounds ran.
- [ ] The continuation offer for rounds beyond ten is explicitly conditioned on
      new information, and the current batch is presented as complete and
      decision-ready on its own.
