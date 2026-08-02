# Scenario 06 — Solo fallback (no subagents)

## Prompt

Run this in a session where the agent has **no subagent/spawn tool available**.

```
Run 6 hats on: should we migrate our CI from Jenkins to GitHub Actions?

Rounds: 4
Constraints: one platform engineer owns CI; do not invent build minutes pricing
or current pipeline costs.
```

## Checklist

### Honest capability routing

- [ ] The agent announces **solo fallback** in one line because no subagent tool
      is available; it does not silently behave as if subagents ran.
- [ ] The agent never claims a Researcher/Challenger/Verifier "subagent" was
      dispatched. Findings from those roles are clearly produced by the main
      agent itself and labeled by role.
- [ ] The required output is unchanged from orchestrated mode: same pressure
      layers, ledger, checkpoints, and Decision Brief — only execution differs.

### Contracts still applied

- [ ] For each layer, only the roles named for that layer are performed
      (e.g. Baseline runs no supporting role; Evidence gaps applies a Researcher
      pass), not every role every round.
- [ ] Role passes obey their contracts: the self-run Researcher separates
      verified facts from assumptions and does not decide the call; the self-run
      Challenger attacks logic without replacing Black/Green; the self-run
      Verifier checks the record without rewriting Blue.
- [ ] Findings are folded into one pressure packet per round; the agent does not
      dump role scratch-work as if it were separate agent transcripts.

### Rounds and state

- [ ] Exactly four sequential rounds run: `Baseline` plus three distinct pressure
      layers in catalog order, numbered 1-4 with turn barriers.
- [ ] White → Red → Yellow → Black → Green run sequentially each round, ending
      with a Blue review; no continuation prompt interrupts rounds 1-3.
- [ ] Unknown pricing and current costs stay `UNVERIFIED` or become labeled
      `SCENARIO`s, never facts.
- [ ] A compact checkpoint follows each layer; the fourth round receives a Post
      Verifier before the single final synthesis.

### Final artifact

- [ ] The final Decision Brief has all required sections and names an owner
      (the platform engineer or `TBD (must be confirmed)`), first reversible step, deadline,
      and review trigger.
- [ ] If any final artifact field is `TBD (must be confirmed)`, the response
      includes a compact **Confirmation Items** plain list (non-interactive).
- [ ] **Continue Next** uses structured single-select controls when available
      plus a numbered fallback, never Markdown checkboxes as input controls.
- [ ] Confidence follows evidence quality, not the fact that four rounds ran.
