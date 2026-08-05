# Scenario 10 — Multilingual consistency under mid-run language switch

## Prompt

```
Run 6 hats, 2 rounds, on: should we open-source our internal design system?

Constraint: respond in English.
```

Then, after Round 1's Blue review appears, send this as the next message
**before** Round 2 completes:

```
Continue, but switch to the requested language from this point.
Do not mix languages inside the same artifact.
```

This scenario tests the single-language presentation invariant under a genuine
mid-run language switch. Honoring a clean language change is fine; mixing
languages inside one artifact is the failure the invariant guards against.

## Checklist

### Language consistency

- [ ] Within any single delivered artifact (a round transcript or the final
      synthesis), headings, hat labels, and body use **one** language
      consistently — not a mix.
- [ ] When the user requests a switch, the agent either continues cleanly in the
      newly requested language for the remaining output, or asks once which
      language to standardize on; it does not interleave two languages.
- [ ] The prompt itself may request a language switch, but the agent keeps each
      artifact in one language and does not blend languages for brevity.
- [ ] Hat labels stay translated consistently with the chosen language and keep
      their emoji prefixes (`🔵/⚪/🔴/🟡/⚫/🟢`).

### Protocol still intact

- [ ] Hat order stays White → Red → Yellow → Black → Green across both rounds.
- [ ] Both rounds run with Blue frame and Blue review; round headings and
      separators remain present.
- [ ] The language switch does not cause a hat to be skipped, merged, or
      reordered.
- [ ] The final synthesis (or Decision Brief) is delivered in one language with
      all required sections and the standard continuation block.
