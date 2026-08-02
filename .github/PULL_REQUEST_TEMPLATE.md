## Summary

- What changed?
- Why now?

## 6hats Protocol Checklist

- [ ] Hat order preserved per round: White -> Red -> Yellow -> Black -> Green
- [ ] Blue opens the discussion and closes each round with a review
- [ ] Blue synthesis includes: Conclusion, Confidence, Main uncertainty, Takeaways
- [ ] No hat bleed (roles are not mixed)
- [ ] Requested round count honored exactly (or capped at 10 with correct continuation behavior)
- [ ] Unknown values are labeled UNVERIFIED or SCENARIO (never presented as facts)
- [ ] Confidence is not auto-normalized to match round count
- [ ] Contradictions and strongest dissent are preserved

## Orchestrated Mode Checklist (2-10 rounds)

- [ ] Capability routing is explicit: orchestrated or solo fallback
- [ ] Pre roles are dispatched only when required by the selected pressure layer
- [ ] Post Verifier runs on layers that require it and always on final selected layer
- [ ] One compact checkpoint is emitted per layer
- [ ] Final artifact includes Decision Brief sections from state-and-output reference

## Evidence And Traceability

- [ ] Updated eval checklist items if behavior changed
- [ ] Updated traceability matrix: evals/TRACEABILITY.md
- [ ] Added/updated source references for new claims

## Validation Run

- [ ] Ran at least one relevant eval scenario manually
- [ ] Recorded the 1/4/10 benchmark when orchestration or output contracts changed
- [ ] Ran local docs/link check script: node ./scripts/check-docs.mjs

## Notes

- Owner for follow-up work: TBD (must be confirmed)
- Deadline for follow-up work: TBD (must be confirmed)
