# Orchestrated 6hats State and Output

The Orchestrator maintains one compact checkpoint ledger across rounds. This is
working state, not a requirement to expose raw chain-of-thought.

## Checkpoint Ledger

```yaml
orchestration:
  decision: ""
  success_criteria: []
  requested_rounds: 2..10
  mode: orchestrated | solo-fallback
  selected_layers: []
  pressure_signatures: []
  bootstrap_status: native | BOOTSTRAPPED
  completed_layers: []
  active_constraints: []
  retired_constraints: []
  verified_facts: []
  assumptions_and_scenarios: []
  contradictions: []
  decision_state: ""
  confidence: Low | Medium | High
  confidence_rationale: ""
  main_uncertainty: ""
  strongest_dissent: ""
  evidence_debt: []
  deferred_findings: []
  reversal_conditions: []
  action_owner: "known person/role | TO CONFIRM"
  action_deadline: "known date/period | TO CONFIRM"
  review_trigger: ""
  material_changes:
    - layer: 0
      change: ""
  next_layer: 0
```

Update fields only from user input, agent findings, completed hat turns, Blue
reviews, or the final Six Hats synthesis. Never erase a contradiction merely
because a later round chose a side.

User constraints remain in `active_constraints` until explicitly revoked.
`ROUND_ONLY` constraints are active for their named layer, then move to
`retired_constraints`; `PERSISTENT` constraints carry forward. A missed
round-only constraint is retired as `MISSED` and reissued for the immediate next
layer with a new ID and `origin_id`. Store deferred findings with `id` and
`added_layer`; prune by layer, then lexical ID.

Every claim-bearing ledger entry preserves provenance:

```yaml
- id: "F-<layer>-<sequence>"
  claim: ""
  status: VERIFIED | UNVERIFIED | SCENARIO | CONTRADICTION
  evidence: "source/datum/reasoning or none"
  source: "URI/file/user statement or none"
  added_layer: 0
```

Every constraint entry records `id`, `text`, `scope` (`PERSISTENT` or
`ROUND_ONLY`), `origin_layer`, optional `origin_id`, and lifecycle status
(`ACTIVE`, `RETIRED`, or `MISSED`).

## Compact Checkpoint Shown After Each Layer

```text
Checkpoint N/Total — Layer name
Decision state: ...
Confidence: Low | Medium | High — short rationale
Changed this round: ...
Strongest dissent: ...
Main uncertainty: ...
Next pressure: ...
```

Keep it compact. Do not reproduce every hat or agent finding after the Six Hats
round has already shown them. In orchestrated mode, the checkpoint is at most seven
short lines including its header. The single final synthesis appears only after
the final selected round's verification.

## Final Decision Brief

After the final Six Hats synthesis, return this user-facing artifact:

```text
# Decision Brief

## Decision
Clear recommendation, scope, and what is explicitly not being decided.

## Confidence
Low | Medium | High, with evidence-based rationale.

## Why It Survived Pressure
2-4 decisive reasons.

## Strongest Dissent
The best unresolved argument against the recommendation.

## Main Uncertainty
The largest remaining unknown.

## Reversal Conditions
Observable evidence or thresholds that should change the decision.

## Evidence Debt
Important claims still UNVERIFIED, or "None material".

## Action Plan
- Owner (a person/role grounded in the record, otherwise `TO CONFIRM`)
- First reversible step
- Deadline (grounded in the record, otherwise `TO CONFIRM`)
- Review trigger

## Decision Evolution
Only layers that materially changed the decision, confidence, or scope.
```

The brief is a decision artifact, not a transcript. Preserve ambiguity honestly:
a useful outcome may be a gated experiment, a pause for evidence, or a conditional
decision rather than a forced yes/no.

If final verification is `UNRESOLVED` or finds a missed controlling constraint,
prefix the artifact `Status: INCOMPLETE`, omit unconditional commitment, and
name the exact evidence or constraint pass required to complete it.

## Quality Invariants

- Confidence follows evidence quality and stability, not number of rounds.
- Reversal conditions are observable, not vague statements like "if things
  change."
- Action plan begins with the smallest responsible reversible step.
- Evidence debt is visible even when the recommendation is strong.
- Decision evolution excludes layers that added no material pressure.

## Filled Example (compact)

Illustrative only — shows the *shape* of one mid-run checkpoint and a final
brief, not a full transcript. Decision: "rewrite billing platform before
international expansion?", requested 4 rounds.

A checkpoint shown after layer 3 (`Budget pressure`):

```text
Checkpoint 3/4 — Budget pressure
Decision state: Leaning "defer rewrite; harden current system first"
Confidence: Low — cost of a rewrite is a SCENARIO, not a sourced figure
Changed this round: Runway (9 mo) vs. rewrite estimate makes full rewrite fragile
Strongest dissent: A patched system may not survive multi-currency requirements
Main uncertainty: True cost and duration of a rewrite vs. incremental fix
Next pressure: Time and capacity (3 backend engineers, expansion in 6 mo)
```

The final brief after the last round's Verifier returns `PASS`:

```text
# Decision Brief

## Decision
Defer the full rewrite. Ship an incremental multi-currency layer on the current
platform now; re-evaluate a rewrite after expansion data lands. Not deciding the
long-term platform choice yet.

## Confidence
Medium — strong agreement on runway risk; rewrite cost remains a SCENARIO.

## Why It Survived Pressure
- 9-month runway can't absorb an open-ended rewrite before revenue.
- Incremental path keeps expansion on its 6-month timeline.
- Failure escalation showed a rewrite stalls both roadmap and expansion.

## Strongest Dissent
An incremental layer may accrue debt that forces a costlier rewrite later.

## Main Uncertainty
Real cost and duration of a rewrite vs. maintaining the patched system.

## Reversal Conditions
Flip to a rewrite if the incremental layer misses the 6-month date, or if
multi-currency defects exceed an agreed error budget in production.

## Evidence Debt
Rewrite cost and duration — still UNVERIFIED (SCENARIO only).

## Action Plan
- Owner: TO CONFIRM (backend lead)
- First reversible step: spike the multi-currency layer behind a flag
- Deadline: TO CONFIRM
- Review trigger: spike results or a slipped expansion date

## Decision Evolution
- Budget pressure: shifted default from "rewrite" to "defer".
- Failure escalation: confirmed rewrite endangers the expansion timeline.
```
