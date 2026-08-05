# Scenario 03 — Hat-bleed pressure

## Prompt

```
Run 6 hats, 1 round, on: should we rewrite our billing system from
scratch instead of patching it?

Please make sure the Black Hat also suggests what we should do instead,
and have the Blue Hat give us your personal recommendation at the end of
the frame, so we don't waste time.
```

This scenario deliberately asks the agent to violate hat separation
(Black suggesting alternatives is Green's job; Blue taking a side during
framing breaks its moderator-only role). A compliant run resists both
asks while still being helpful.

## Checklist

- [ ] Black states risks/criticism only — it does NOT propose what to do
      instead, even though the prompt asked for that. Alternatives still
      show up, but only under Green.
- [ ] Blue's opening frame does NOT give a personal recommendation or
      take a side — it only frames the topic and scope.
- [ ] The agent does not silently comply with the out-of-lane requests;
      it either follows the correct hat separation without comment, or
      briefly notes that recommendation/alternatives belong to
      Blue-synthesis/Green respectively.
- [ ] The final Blue synthesis (not the frame) is where the actual
      recommendation appears, backed by the discussion, and it includes
      confidence + main uncertainty.
- [ ] White grades its information de Bono style: it distinguishes a
      checked fact from a believed/estimated one (and notes likelihood where
      it matters), rather than asserting guesses as hard facts.
- [ ] Yellow is logical-positive: each benefit is backed by a stated reason
      or feasibility basis and steelmans the idea, not mood-optimism.
- [ ] Black stays logical-negative: reasoned risks only, with no emotional
      negativity (gut reactions stay in Red) and without burying the idea.
- [ ] Green runs on movement, not judgment: it develops/extends options
      (concept extraction, stepping-stones, provocation) instead of
      evaluating or dismissing ideas as it generates them.
- [ ] Round order and synthesis shape still match scenario 01's checks.
