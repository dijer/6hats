# Scenario 04 — Orchestrated ten-round analysis

## Prompt

```
Run 6 hats on: should our 12-person SaaS company rewrite
its billing platform before international expansion?

Rounds: 10.
Known constraints: 9 months of runway, 3 backend engineers, expansion planned
in 6 months. Treat unknown financial values as unknown; do not invent them.
```

## Checklist

### Routing and architecture

- [ ] The agent explicitly announces orchestrated mode
      (real subagents available) or an honest solo fallback.
- [ ] Supporting roles are Researcher, Challenger, and/or Verifier; no subagent
      is assigned White/Red/Yellow/Black/Green as an independent parallel task.
- [ ] Only roles named for each pressure layer are dispatched; the agent does
      not spawn every role for every round.
- [ ] Supporting findings are converted into one pressure packet before each
      Six Hats round; raw agent transcripts are not dumped into the response.

### Ten-layer progression

- [ ] Exactly ten pressure layers run in order: `Baseline`, `Evidence gaps`,
      `Budget pressure`, `Time and capacity`, `Stakeholder conflict`,
      `Failure escalation`, `Alternative paths`, `Reversal test`,
      `Evidence audit`, `Execution readiness`.
- [ ] Every layer runs exactly one sequential Six Hats round in the fixed order
      White → Red → Yellow → Black → Green, followed by Blue review. Only layer
      10 adds the single final synthesis after its Verifier pass; no continuation
      prompt interrupts layers 1-9.
- [ ] Round numbering continues from 1 through 10 and later hats build on
      earlier hats in the same round.
- [ ] Each round applies its distinct pressure dimension; the ten rounds are
      not paraphrases of the baseline.
- [ ] Unknown financial values remain `UNVERIFIED` or become clearly labeled
      `SCENARIO`s; they are never presented as company facts.

### State and verification

- [ ] A compact checkpoint follows each layer and records decision state,
      confidence with rationale, what changed, strongest dissent, main
      uncertainty, and next pressure.
- [ ] Confidence does not automatically increase with round count; any change
      follows evidence quality or decision stability.
- [ ] Verifier preserves unresolved contradictions/evidence debt and does not
      rewrite Blue's judgment merely to make the output consistent.
- [ ] Verifier runs after the round it checks. A repair updates the record or
      carries a missed constraint forward; it never reruns or renumbers a round.
- [ ] The final selected round receives a Post Verifier even if its pressure
      layer would not otherwise schedule one.
- [ ] Final Verifier checks a decision candidate before synthesis. If it returns
      `UNRESOLVED` or finds a missed controlling constraint, output is explicitly
      `INCOMPLETE` rather than an unconditional commitment.
- [ ] Persistent constraints carry across layers; round-only constraints retire
      after use. A missed round-only constraint is marked `MISSED` and reissued
      once with provenance, not silently kept active.
- [ ] Facts, scenarios, contradictions, and deferred findings retain IDs,
      evidence/source status, and their originating layer through the audit.
- [ ] Explicit ten-round mode does not silently stop early. If context limits
      intervene, the agent checkpoints and offers to resume at the next named
      layer instead of compressing layers.

### Final artifact

- [ ] The final Decision Brief includes Decision, Confidence, Why It Survived
      Pressure, Strongest Dissent, Main Uncertainty, Reversal Conditions,
      Evidence Debt, Action Plan, and Decision Evolution.
- [ ] Reversal conditions are observable; the action plan names an owner,
      first reversible step, deadline, and review trigger. Unknown owner or
      deadline is explicitly `TBD (must be confirmed)`, never invented.
- [ ] If any final artifact field is `TBD (must be confirmed)`, the response
      includes a compact **Confirmation Checklist** with markdown checkboxes
      for user confirmation.
- [ ] The final artifact is compact and decision-oriented, not a replay of all
      agent and hat transcripts.
