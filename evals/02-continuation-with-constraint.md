# Scenario 02 — Continuation with a new constraint

## Prompt

Part A:

```
Run 6 hats, 1 round, on: should we open a physical retail store in
addition to our online shop?
```

Part B (send after the synthesis + continuation offer arrives):

```
Yes, run 1 more round. New constraint: assume we only have a $20k budget.
```

## Checklist

- [ ] Part A runs exactly 1 round and ends with a Blue synthesis +
      continuation offer (per scenario 01's synthesis checks).
- [ ] Part A continuation offer includes a compact **Continue Next** block
      with exactly four options: repeat `N`, two dynamic focused continuations,
      and `Custom focus`.
- [ ] Options 2 and 3 contain the actual text of two distinct follow-up focuses
      derived from Part A's uncertainty, dissent, evidence debt, reversal
      conditions, or unresolved takeaways; no generic `Blue Hint A/B` labels.
- [ ] When a structured question tool is available, the agent invokes it with
      the same four single-select choices; the user is not left with display-only
      Markdown checkboxes.
- [ ] `N` in options 1-3 equals the total rounds from the most recent completed
      run.
- [ ] The plain-text fallback uses numbered options and does not ask users to
      type text inside option labels (no inline `<enter ...>` placeholders).
- [ ] If `Custom focus` is selected, the agent asks for separate `Focus:` and
      `Rounds:` fields and uses the supplied positive integer instead of `N`.
- [ ] Part B's round is labeled **Round 2**, not Round 1 — numbering
      continues from the previous run.
- [ ] Part B switches to orchestrated mode because the discussion now has more
      than one total round; the completed first round is reused as Baseline.
- [ ] The transition creates a retrospective `BOOTSTRAPPED` checkpoint and
      provenance-preserving ledger from the visible Part A transcript; Part A
      is not rerun.
- [ ] Because round 2 is the final selected round, a Post Verifier checks its
      pressure packet, completed hats, Blue review, and ledger before synthesis.
- [ ] The $20k budget constraint is reflected in *every* hat's
      contribution in round 2 (not just mentioned once by Blue).
- [ ] The free-text constraint from Part B is treated as user-provided input
      with provenance preserved (not rewritten into a different constraint).
- [ ] Blue's one-line round-2 process frame and review explicitly name the new
      constraint without adding a new argument before White.
- [ ] Round 2 still ends with a Blue review before the final synthesis;
      Blue review is not skipped just because round 2 is the last round.
- [ ] The round-2 synthesis supersedes the round-1 conclusion, includes
      confidence + main uncertainty, and updates the takeaways in light
      of the budget constraint rather than just appending a second,
      disconnected conclusion.
