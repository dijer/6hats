# Traceability Matrix

This table maps protocol requirements to eval scenarios and expected checks.

| Requirement | Source | Evals Covering It | What To Confirm |
|---|---|---|---|
| Standard mode defaults to 1 round when round count omitted | SKILL.md | 01-basic-single-round.md | Exactly one round, no orchestrated routing |
| Fixed hat order per round | SKILL.md | 01, 03, 04, 05, 06, 07 | White -> Red -> Yellow -> Black -> Green |
| Blue frames and reviews every round | SKILL.md | 01, 04, 05, 06, 07 | Blue opens; each round ends with Blue review |
| Red stays brief and non-rationalized | SKILL.md | 01, 03 | Red is shortest and not analytical |
| Orchestrated mode for 2-10 rounds | SKILL.md, references/orchestrated-rounds.md | 04, 05 | Correct mode routing and exact count behavior |
| Exact requested round count is honored | references/orchestrated-rounds.md | 05 | No preset rounding; no extra rounds |
| Requests above 10 are capped correctly | SKILL.md, references/orchestrated-rounds.md | 07 | At most 10 rounds; continuation only with fresh evidence/constraint |
| Adaptive continuation UX: checkbox-only quick choices plus separate custom-input flow | SKILL.md, references/state-and-output.md | 02 | Continue Next has 1/2/3 + Use custom input; text template appears only in follow-up |
| Supporting roles are not assigned hat turns | references/orchestrated-rounds.md, references/agent-contracts.md | 04, 06, 07 | Researcher/Challenger/Verifier are support only |
| Constraint and evidence status discipline | references/state-and-output.md | 04, 05, 06, 07 | UNVERIFIED/SCENARIO used correctly; contradictions preserved |
| Final selected round receives post Verifier | references/orchestrated-rounds.md | 04, 05, 06, 07 | Verifier after final selected layer |
| Final Decision Brief contains required sections | references/state-and-output.md | 04, 06, 07 | Decision, Confidence, Dissent, Uncertainty, Reversal, Debt, Action Plan, Evolution |

## Usage

1. When adding/changing behavior, update this matrix first.
2. Ensure every changed requirement has at least one eval scenario.
3. In PR, cite affected rows in this file.
