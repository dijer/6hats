# Golden Output Template (6hats)

Use this as canonical output shape for orchestrated runs.

## Language and style

- Keep one language across headings, body, and lists.
- Keep emoji prefixes on hat labels.
- Continue Next is the only continuation-choice block.
- Use the host's structured single-select tool when available; never use
	Markdown checkboxes as input controls.

## Round transcript skeleton

```text
🔵 Blue (frame): <topic/scope/done>

### Round 1 — Baseline
⚪ White: <max 2 bullets in orchestrated>
🔴 Red: <max 1 sentence>
🟡 Yellow: <max 2 bullets>
⚫ Black: <max 2 bullets>
🟢 Green: <max 2 bullets>
🔵 Blue (round review): <max 2 lines>
---

### Round 2 — <Layer>
...
---
```

## Final artifact skeleton

```text
# Decision Brief

## Decision
<clear recommendation + scope>

## Confidence
<Low|Medium|High + rationale>

## Why It Survived Pressure
- <2-4 decisive reasons>

## Strongest Dissent
<best unresolved argument against recommendation>

## Main Uncertainty
<largest remaining unknown>

## Reversal Conditions
- <observable trigger 1>
- <observable trigger 2>

## Evidence Debt
- <UNVERIFIED claim 1>
- <or None material>

## Action Plan
- Owner: <name/role or TBD (must be confirmed)>
- First reversible step: <smallest reversible step>
- Deadline: <date/period or TBD (must be confirmed)>
- Review trigger: <observable trigger>

## Confirmation Items
- Owner: TBD (must be confirmed)
- Deadline: TBD (must be confirmed)
- Review trigger: TBD (must be confirmed)
- Evidence debt: accepted or resolved

## Decision Evolution
- <only materially changing layers>

## Continue Next
1. Run another N rounds
2. Run another N rounds: <focus derived from the main uncertainty or evidence debt>
3. Run another N rounds: <focus derived from the strongest dissent or reversal conditions>
4. Custom focus
```

Options 2 and 3 must contain two distinct, concrete focuses derived from the
completed discussion. Put each focus directly in its option label; do not print
separate hints or generic `Blue Hint A/B` labels.

If the user selects custom focus, ask:

```text
Reply format (send in your next message):
Focus: <constraint/new information/question>
Rounds: <positive integer>
```

`N` equals total rounds from the most recent completed run for options 1-3.
Custom focus uses the new round count supplied by the user.
