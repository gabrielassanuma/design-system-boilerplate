# Design System Governance Agents

This directory standardizes how the design system evolves without losing consistency across projects.

## How to use

1. Start with `00-design-system-orchestrator.agent.md`.
2. Run agents in numeric order.
3. Record decisions in PRs/commits using the "Decision log" section suggested by each agent.
4. Do not skip `08-consistency-guardian.agent.md` before merge/release.

## Recommended order

- `00-design-system-orchestrator.agent.md`
- `01-product-principles.agent.md`
- `02-design-tokens.agent.md`
- `03-components.agent.md`
- `04-accessibility.agent.md`
- `05-quality-tests.agent.md`
- `06-docs-storybook.agent.md`
- `07-release-versioning.agent.md`
- `08-consistency-guardian.agent.md`

## Conventions

- Every agent output includes: context, decisions, checklist, and risks.
- No subjective decisions without objective criteria.
- Every visual change must reference its source token.
- Every component API change must include a migration strategy.
- All repository-facing content must be written in English.
