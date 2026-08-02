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
- [ ] Interactive checkboxes appear only in **Continue Next**.
- [ ] Continue Next uses fixed-`N` options from the most recent completed run,
      plus custom input with the same `N`.
- [ ] If Blue has strong suggestions, Continue Next includes `Blue Hint A/B`
      lines and hint-based options. If not, both hint lines and hint-based
      options are omitted.
- [ ] If custom input is selected, the next turn asks for:
      `Input text: <constraint/new info/focus>`.
