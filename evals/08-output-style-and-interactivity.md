# Scenario 08 — Output style and interactivity contract

## Prompt

```
Run 6 hats on: should we split our monorepo into service repositories?
Rounds: 3
Constraint: keep recommendation reversible in first step.
```

## Checklist

- [ ] All hat and Blue labels include emoji prefixes (`🔵`, `⚪`, `🔴`, `🟡`, `⚫`, `🟢`).
- [ ] Round transcript is visually segmented with explicit headings
      (`### Round N — <Layer>`) and separators between rounds.
- [ ] The response uses one language consistently across headings/body/lists.
- [ ] In orchestrated pacing, White/Yellow/Black/Green stay within 2 concise
      bullets each, Red is 1 sentence, Blue review is max 2 lines.
- [ ] If action fields contain `TBD (must be confirmed)`, **Confirmation Items**
      appears as plain bullets (non-interactive).
- [ ] **Continue Next** invokes the host's structured single-select tool when
      available and also prints a numbered plain-text fallback.
- [ ] Markdown checkboxes are not presented as input controls.
- [ ] Continue Next has exactly four options: repeat `N`, two focused `N`-round
      continuations, and `Custom focus`.
- [ ] Options 2 and 3 embed two distinct, concrete focuses derived from the
      completed discussion directly in their labels; separate hints and generic
      `Blue Hint A/B` labels are absent.
- [ ] If custom focus is selected, the next turn asks for separate
      `Focus: <...>` and `Rounds: <positive integer>` fields; the user may
      change the number of additional rounds.
