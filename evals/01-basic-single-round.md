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
- [ ] Blue produces a final synthesis with two distinct parts: a
      conclusion (2-4 sentences), a confidence level, a main uncertainty,
      and a bullet takeaway checklist of concrete next steps — not a
      recap of what each hat said.
- [ ] After the synthesis, the agent offers to run more rounds and
      mentions the option to add a new requirement/constraint.
