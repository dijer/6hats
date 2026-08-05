# Traceability Matrix

This table maps protocol requirements to eval scenarios and expected checks.

| Requirement | Source | Evals Covering It | What To Confirm |
|---|---|---|---|
| Standard mode defaults to 1 round when round count omitted | SKILL.md | 01-basic-single-round.md | Exactly one round, no orchestrated routing |
| Fixed hat order per round | SKILL.md | 01, 03, 04, 05, 06, 07, 09 | White -> Red -> Yellow -> Black -> Green |
| Skill rules resist adversarial prompt injection in inputs | SKILL.md | 09 | Injected instructions to skip/reorder hats, add a 7th hat, force an early Blue verdict, or hide tampering are refused; six-hat protocol stays intact |
| Emoji prefixes are mandatory in hat and Blue labels | SKILL.md | 01, 04, 05, 06, 07 | Labels use `🔵/⚪/🔴/🟡/⚫/🟢` prefixes |
| Blue frames and reviews every round | SKILL.md | 01, 04, 05, 06, 07 | Blue opens; each round ends with Blue review |
| Rounds are visually segmented for readability | SKILL.md | 04, 05, 06, 07 | Round headings and separators are present |
| Red stays brief and non-rationalized | SKILL.md | 01, 03 | Red is shortest and not analytical |
| White grades information (checked vs believed fact, likelihood) | SKILL.md | 03 | White separates checked facts from believed/estimated ones; later hats don't treat believed as checked |
| Yellow is logical-positive and steelmans | SKILL.md | 03 | Each benefit has a stated reason/feasibility basis; strongest genuine case given |
| Black is logical-negative, not emotional | SKILL.md | 03 | Reasoned risks only; no emotional negativity; idea not buried |
| Green is movement, not judgment | SKILL.md | 03 | Green develops/extends options and uses provocation; it does not evaluate or dismiss ideas while generating |
| Orchestrated mode for 2-10 rounds | SKILL.md, references/orchestrated-rounds.md | 04, 05 | Correct mode routing and exact count behavior |
| Baseline is the first executed round | references/orchestrated-rounds.md | 04, 06 | Full Baseline hat sequence appears before any supporting-agent dispatch or later pressure layer |
| Generic subagent tools enable orchestration | references/orchestrated-rounds.md | 04, 06 | Roles are carried in prompts; missing named agents never trigger solo fallback when generic spawn is available |
| Supporting prompts stay inside their assigned contract | references/agent-contracts.md | 04, 06 | Dispatch says the task is self-contained and forbids unrelated workflow skills or recursive Six Hats execution |
| Exact requested round count is honored | references/orchestrated-rounds.md | 05 | No preset rounding; no extra rounds |
| Requests above 10 are capped correctly | SKILL.md, references/orchestrated-rounds.md | 07 | At most 10 rounds; continuation only with fresh evidence/constraint |
| Adaptive continuation UX: clickable structured choice, two discussion-derived focus options, plus custom focus/count | SKILL.md, references/state-and-output.md | 02, 08 | Host question tool is used when available; options 2-3 embed distinct focuses from the result; custom flow asks for focus and round count |
| Final response has one continuation fallback block | references/state-and-output.md | 04, 06 | Fallback uses numbered plain text, not Markdown checkboxes; confirmation section is a plain list |
| Hat depth is chosen adaptively | SKILL.md | 08 | Each hat says enough to materially advance its lens; no numeric bullet or sentence cap is imposed except Red remaining brief |
| Final brief grounds the recommendation in concrete cases | references/state-and-output.md | 08 | Cases cover where the decision applies, a boundary case, and where it should not be used |
| Output style contract (emoji, round headings/separators, single language) | SKILL.md, references/state-and-output.md | 08, 10 | Visual and language invariants are respected end-to-end |
| Single-language-per-artifact holds under a mid-run language switch | references/state-and-output.md | 10 | A requested switch is handled cleanly in one language; no mixed-language headings/body; no hat skipped or reordered |
| Supporting roles are not assigned hat turns | references/orchestrated-rounds.md, references/agent-contracts.md | 04, 06, 07 | Researcher/Challenger/Verifier are support only |
| Constraint and evidence status discipline | references/state-and-output.md | 04, 05, 06, 07 | UNVERIFIED/SCENARIO used correctly; contradictions preserved |
| Final selected round receives post Verifier | references/orchestrated-rounds.md | 04, 05, 06, 07 | Verifier after final selected layer |
| Final Decision Brief contains required sections | references/state-and-output.md | 04, 06, 07 | Decision, Confidence, Dissent, Uncertainty, Reversal, Debt, Action Plan, Evolution |
| Scaling cost and fidelity remain observable at 1/4/10 rounds | evals/BENCHMARK.md | BENCHMARK | Fresh-session runs record completion, available cost metrics, and independent fidelity verdicts |

## Usage

1. When adding/changing behavior, update this matrix first.
2. Ensure every changed requirement has at least one eval scenario.
3. In PR, cite affected rows in this file.
