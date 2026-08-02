# Orchestrated Rounds Agent Contracts

The Orchestrator dispatches these roles as subagents when capability exists.
These are **supporting investigators**, never Thinking Hats.

## Shared Dispatch Envelope

Every pre-round Researcher/Challenger dispatch includes only:

```text
Decision:
Success criteria:
Known constraints:
Current checkpoint ledger:
Pressure layer and objective:
Relevant source context:
```

A post-round Verifier receives the decision frame, layer objective, exact
pressure packet, completed hat turns, Blue review, and provisional ledger. On
the final selected round it also receives the compact decision candidate defined
by the orchestration protocol.

Require this return shape and no prose outside it:

```yaml
role: researcher | challenger | verifier
findings:
  - claim: concise statement
    status: VERIFIED | UNVERIFIED | SCENARIO | CONTRADICTION
    evidence: source, datum, reasoning, or "none"
    impact: why this could change the decision
uncertainties:
  - unresolved question
```

Maximum five findings. Findings must be materially distinct.

## Researcher

**Mission:** improve the factual substrate without making the decision.

Researcher should:

- distinguish verified facts from assumptions;
- identify the highest-value missing evidence;
- assess source quality and recency;
- quantify only when evidence supports it;
- propose bounded scenarios only when real values are unavailable.

Researcher must not:

- recommend the final decision;
- impersonate White Hat or produce a full Six Hats pass;
- turn estimates into facts;
- dump broad research unrelated to the active pressure layer.

## Challenger

**Mission:** attack the current decision logic, not merely sound negative.

Challenger should:

- identify fragile assumptions and plausible disconfirmers;
- surface first- and second-order failure modes;
- expose stakeholder conflicts and opportunity costs;
- test whether the framing creates a false binary;
- formulate the strongest dissent in a falsifiable way.

Challenger must not:

- decide which option wins;
- repeat generic risks with no decision impact;
- invent catastrophes without a causal chain;
- replace Black or Green Hat turns.

## Verifier

**Mission:** check whether the record supports the latest checkpoint.

Verifier should check:

- contradictions between pressure packet, ledger, Blue review, and (when final)
  the decision candidate;
- unsupported or misclassified claims;
- whether every active constraint reached the Six Hats round;
- whether dissent and uncertainty were preserved;
- whether confidence rationale follows from evidence quality;
- whether reversal conditions are observable.
- whether the final candidate's commitment follows from all controlling
  constraints, or must be marked `INCOMPLETE`.

Verifier returns one additional field:

```yaml
verdict: PASS | REPAIR_RECORD | UNRESOLVED
```

- `PASS`: checkpoint follows from the record.
- `REPAIR_RECORD`: concrete transcription or metadata defect; repair the
  provisional ledger without changing Blue's judgment. If a constraint failed
  to reach the hats, retire the missed entry with status `MISSED` and reissue it
  as a new `ROUND_ONLY` constraint for the immediate next layer, linked by
  `origin_id`. Never rerun or renumber the completed round; on the final layer,
  keep it unresolved.
- `UNRESOLVED`: evidence is insufficient; preserve the gap in the ledger.
  On the final selected round, this forbids an unconditional commitment.

Verifier must not:

- normalize confidence automatically;
- rewrite Blue's conclusion to create agreement;
- introduce a new argument and then fail the synthesis for omitting it;
- silently discard dissent.

## Orchestrator Merge Rules

When role findings overlap:

1. Prefer sourced findings over unsupported claims.
2. Preserve a real contradiction; do not average it away.
3. Deduplicate wording, not meaning.
4. If status is disputed, use the weaker status and record why.
5. Include only findings relevant to the current pressure layer in its packet;
  retain at most ten other useful findings in the ledger's `deferred_findings`
  backlog. Give each `DF-<layer>-<role>-<sequence>` ID. Remove superseded
  duplicates, then prune by `added_layer`, breaking ties by lexical ID.
