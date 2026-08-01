# 6hats

[![skills.sh](https://skills.sh/b/dijer/6hats)](https://skills.sh/dijer/6hats)

An agent skill that facilitates structured discussions using Edward de Bono's
**Six Thinking Hats** methodology: White (facts), Red (intuition), Yellow
(benefits), Black (risks), Green (creativity), Blue (process/synthesis).

## Install

```bash
npx skills add dijer/6hats
```

## Usage

Trigger it by asking your agent to run a "6 hats" / "six thinking hats"
discussion on a topic:

> Run 6 hats on: should we migrate our monolith to microservices?
> Rounds: 2

The agent will:

1. Frame the topic (Blue).
2. Run each hat once per round, in fixed order (White → Red → Yellow →
   Black → Green), with a Blue review after each round.
3. Produce a final Blue synthesis: a conclusion + a concrete takeaway
   checklist.
4. Offer to run more rounds, optionally with a new requirement/constraint.

See [SKILL.md](SKILL.md) for the full instructions the agent follows.

## Verifying it works

[evals/](evals/) has repeatable pressure-scenario prompts + checklists for
manually confirming the skill holds up (round order, hat separation,
synthesis shape, continuation behavior). See [evals/README.md](evals/README.md).

## License

[MIT](LICENSE)
