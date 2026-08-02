# Orchestrated Rounds Protocol

Use this protocol when `SKILL.md` routes a request for **2-10 rounds**.
The main agent is the **Orchestrator**. The existing Six Hats round remains the
reasoning core.

## Architecture

```text
Decision + success criteria
  -> Orchestrator owns frame, ledger, routing, and stop rules
     -> bounded subagents gather evidence, challenge assumptions, or verify
     -> Orchestrator builds one pressure packet
     -> one sequential Six Hats round
     -> Blue review and checkpoint
  -> next pressure layer
  -> final Decision Brief
```

- **Multi-agent outside, sequential hats inside.** Independent pre-round
   subagents may run concurrently. Rounds never run concurrently: round `N+1`
   waits for round `N`'s Blue review and checkpoint. Never assign hats to
   parallel agents.
- Subagents provide inputs and checks. They do not vote, synthesize hats, or
  override Blue.
- The Orchestrator carries forward the compact ledger, not raw transcripts.
- Never convert a proposed scenario into a fact. Mark it `SCENARIO`.
- Never force confidence or conclusions to become numerically consistent. Fix
  weak inputs; preserve model judgment.

## Setup

Extract or ask one compact question for:

- **Decision**: the hard call.
- **Success criteria**: what a good outcome must achieve.
- **Known constraints**: money, time, people, policy, risk tolerance.
- **Rounds**: exact requested integer from `2` through `10`.

Honor the exact count: seven means seven, without rounding to a preset. State a
**provisional** pressure plan before round 1.

## Why Supporting Agents

Pressure layers do not inherently require multiple agents; one model could
execute them. Supporting agents are used because they add bounded, independent
contexts around the sequential Hats process:

- Researcher examines evidence without inheriting the Orchestrator's full
   transcript or preferred conclusion.
- Challenger attacks the current logic from a fresh context, reducing anchoring
   to the initial frame.
- Verifier checks the record and decision candidate separately from the agent
   that produced them.
- The compact ledger, rather than raw round and agent transcripts, carries state
   forward and limits context growth.

This improves separation of duties and the chance of catching contradictions;
it does not guarantee objectivity, eliminate hallucinations, or prevent context
limits by itself. If subagents are unavailable, use the explicit solo fallback
and apply the same contracts in the main agent.

### Continuation Bootstrap

When orchestration begins only after a completed Standard round:

1. Treat that completed round as `Baseline` and do not rerun it.
2. Reconstruct a minimal ledger from user statements and the visible hat turns,
   Blue review, and synthesis. Preserve source/status; mark unsupported claims
   `UNVERIFIED` rather than retroactively validating them.
3. Record Baseline as completed with its pressure signature and create a
   retrospective checkpoint labeled `BOOTSTRAPPED`, not newly executed.
4. Select the requested number of **additional** pressure layers, continue
   numbering, and supersede the earlier synthesis only after they complete.

## Capability Routing

Announce the selected mode in one line:

1. **Orchestrated mode**: a subagent tool is available. Dispatch only roles
   listed for the current pressure layer, in parallel when independent.
2. **Solo fallback**: no subagent tool is available. The Orchestrator performs
   the same bounded contracts itself and labels the findings. Do not pretend
   subagents ran.

Capability changes execution, not the required output.

## Pressure Layers

Always run `1. Baseline` first. Select exactly `N-1` additional layers from
`2-10` based on decision impact, unresolved evidence, user constraints, and
non-overlap with already selected pressure. Preserve the catalog order among
selected layers. For 10 rounds, run the full catalog.

Before starting, record provisional signatures for planned layers:
`objective + active constraints + question to answer`. Immediately before each
new round, re-score unused layers against the latest checkpoint and finalize
that round's signature. You may swap future unrun layers when new evidence makes
the plan stale, while preserving exact count and catalog order among the final
selection. Never change completed layers. If a candidate overlaps a completed
signature, replace it with the next highest-value unused layer and announce the
plan change.

The final selected layer always receives a Post Verifier, even when its catalog
row does not list one. Catalog Verifiers on earlier selected layers still run.

`Pre` roles run before the hats; `Post` Verifier runs only after Blue's round
review and the provisional ledger update.

| Layer | Objective | Roles | Pressure applied to the Six Hats round |
|---|---|---|---|
| 1. Baseline | Establish the initial call | None | Input packet contains known facts and constraints; hats apply all lenses |
| 2. Evidence gaps | Separate knowledge from assumptions | Pre: Researcher | Missing facts and source quality |
| 3. Budget pressure | Test financial viability | Pre: Researcher + Challenger | Known cap or labeled budget scenario |
| 4. Time and capacity | Test execution realism | Pre: Researcher + Challenger | Deadline, staffing, opportunity cost |
| 5. Stakeholder conflict | Expose incompatible incentives | Pre: Challenger | Named stakeholders and tensions |
| 6. Failure escalation | Surface first/second-order failures | Pre: Challenger | Strongest plausible failure modes |
| 7. Alternative paths | Escape false binaries | Pre: Researcher + Challenger | Reversible, incremental, and do-nothing options |
| 8. Reversal test | Define what would flip the call | Pre: Challenger; Post: Verifier | Disconfirmers and reversal conditions |
| 9. Evidence audit | Reduce unsupported certainty | Pre: Researcher; Post: Verifier | Contradictions, weak claims, evidence debt |
| 10. Execution readiness | Test whether the emerging decision can be acted on | Post: Verifier | Owner, reversible step, deadline, and review trigger; unknown owner/deadline stay `TBD (must be confirmed)` |

If a concrete constraint is unknown, use a bounded `SCENARIO` only when it can
meaningfully test the decision. Otherwise record the gap instead of inventing
precision.

## Round Loop

For each selected layer:

1. **Finalize and frame the objective.** Re-score future layers, finalize this
   layer's pressure signature, and confirm it differs from completed rounds.
   Baseline uses the discussion's initial Blue frame only. Before every later
   round, Blue gives a one-line process frame naming the new pressure/constraint
   before White. A new round must pressure the decision differently, not
   paraphrase earlier discussion.
2. **Dispatch pre-round roles.** Follow
   [agent contracts](./agent-contracts.md). Run only Researcher/Challenger roles
   marked `Pre`. Pass the decision frame, current ledger, layer objective, and
   relevant source context.
3. **Build the pressure packet.** Deduplicate agent findings into:
   - verified facts;
   - assumptions and `SCENARIO`s;
   - constraints;
   - contradictions;
   - questions this round must answer.
   Mark each injected constraint `PERSISTENT` or `ROUND_ONLY`. User constraints
   are persistent until revoked; stress scenarios are round-only unless the user
   explicitly adopts them.
4. **Run exactly one sequential Six Hats round.** Treat all selected layers as
   one ongoing N-round discussion. Layer 1 starts it; each later layer injects
   its pressure packet as that round's constraint. Enforce the turn barrier from
   `SKILL.md`, keep numbering continuous, and end every round with Blue review.
   Do not emit or request a continuation offer between layers.
5. **Update the provisional ledger.** Use the completed hat turns and Blue
   review. Follow [state and output](./state-and-output.md).
6. **Dispatch post-round Verifier when assigned, and always after the final
   selected round.** Give it the exact pressure packet, completed round, Blue
   review, and provisional ledger. For the final round, also give it a compact
   decision candidate: recommendation, confidence rationale, strongest dissent,
   reversal conditions, evidence debt, and action fields. It may repair a
   transcription/metadata defect or mark a missed constraint for the next layer;
   it never reruns a round or rewrites Blue's judgment.
7. **Show one compact checkpoint.** Do not expose internal agent transcripts or
   repeat the entire discussion.

After the final selected round's Verifier pass:

- `PASS`: produce the one final Blue synthesis and Decision Brief from the
   verified candidate.
- `REPAIR_RECORD`: repair metadata only, then produce the artifact.
- `UNRESOLVED`, or a controlling constraint was missed: do not issue an
   unconditional commitment. Produce an `INCOMPLETE` Decision Brief naming the
   gap, preserving model-judged confidence, and giving the smallest action needed
   to resolve it.

Commitment is an output step, not an extra round.

## Stop and Pause Rules

- Complete the exact requested count unless the user stops it.
- Pause early only when user-owned information blocks a
  responsible analysis and a scenario would be misleading.
- Do not declare convergence because agents agree. Require stable reasoning,
  addressed dissent, and no new high-severity contradiction.
- If context limits threaten quality, show the checkpoint and offer to resume at
  the next named layer. Never compress multiple pressure layers into one.
- Stop at applicable safety or policy boundaries and explain the limitation.

## Cost Controls

- Spawn only roles named for the layer.
- Cap each role at five findings.
- In orchestrated mode, cap White/Yellow/Black/Green at two concise bullets each,
   Red at one sentence, and Blue review at two lines. This pacing overrides the
   Standard target length but not any hat's role.
- Pass the ledger, not raw history, between rounds.
- Every layer applies its named pressure dimension. If agents find no new
   evidence, record `NO NEW EVIDENCE` and test the decision against that
   dimension using only existing facts; do not manufacture novelty.
- Keep sources with claims when available; otherwise mark `UNVERIFIED`.
