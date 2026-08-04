# Scenario 01 — Basic single round

## Prompt

```
Run 6 hats on: should our team adopt a 4-day work week?
```

(No round count given — tests the default.)

## Checklist

- [ ] Blue opens with a frame (states the topic + what "done" looks like)
      before any other hat speaks.
- [ ] Hat order for the round is exactly White → Red → Yellow → Black →
      Green (no reordering, no skipping).
- [ ] Hat and Blue labels include emoji prefixes (`🔵`, `⚪`, `🔴`, `🟡`, `⚫`, `🟢`).
- [ ] Each hat's contribution stays in its own lens (White has no
      opinions/risks, Red has no justification, Black raises no
      alternatives, Green raises no risk judgments).
- [ ] Only one round runs (no round count was requested, default = 1).
- [ ] The request stays in Standard mode: no orchestrated-mode announcement,
      supporting subagents, pressure layers, or checkpoint ledger appears.
- [ ] Blue produces a final synthesis with a conclusion at the depth needed to
      state its scope and conditions, a confidence level, a main uncertainty,
      and a takeaway checklist of concrete next steps — not a recap of what
      each hat said.
- [ ] The synthesis ends with concrete applicable, boundary, and non-applicable
      cases grounded in actors, conditions, action, and expected outcome.
- [ ] After the synthesis, the agent offers to run more rounds and
      mentions the option to add a new requirement/constraint.
