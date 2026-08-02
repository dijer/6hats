# Golden Output Template (6hats)

Use this as canonical output shape for orchestrated runs.

## Language and style

- Keep one language across headings, body, and lists.
- Keep emoji prefixes on hat labels.
- Continue Next is the only interactive checkbox block.

## Round transcript skeleton

```text
🔵 Blue (frame): <topic/scope/done>

### Round 1 — Baseline
🔵 Blue (round frame): <pressure focus>
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
- [ ] Run another N rounds
- [ ] Use custom input text and run another N rounds
```

Optional hint variant:

```text
Blue Hint A: <new pressure angle>
Blue Hint B: <new tightened requirement>

- [ ] Run another N rounds
- [ ] Run another N rounds with Blue Hint A
- [ ] Run another N rounds with Blue Hint B
- [ ] Use custom input text and run another N rounds
```

If no useful hints, omit Blue Hint A/B and omit hint-based options.

If user selects custom input, ask follow-up:

```text
Reply format (send in your next message):
Input text: <constraint/new info/focus>
```

`N` equals total rounds from most recent completed run.
