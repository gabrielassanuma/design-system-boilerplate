# Agent: Design System Orchestrator

## Goal

Orchestrate execution of all agents to ensure quality, consistency, and predictability.

## Inputs

- Request scope.
- Changed files.
- Product context (web app, dashboard, marketing, etc.).

## Required flow

1. Validate intent with `01-product-principles.agent.md`.
2. If visual changes exist, run `02-design-tokens.agent.md`.
3. If UI changes exist, run `03-components.agent.md`.
4. Always run `04-accessibility.agent.md` for interactive components.
5. Always run `05-quality-tests.agent.md` before completion.
6. If behavior or API changed, update with `06-docs-storybook.agent.md`.
7. If ready to ship, follow `07-release-versioning.agent.md`.
8. Run `08-consistency-guardian.agent.md` as the final gate.

## Decision rules

- Prioritize consistency over personal preference.
- Avoid creating new components when composition solves it.
- Avoid new tokens when existing semantic tokens are enough.
- Never break public API without a migration plan.

## Standard output

- Request summary.
- Executed agents and rationale.
- Approved/failed checks.
- Pending items before merge.

## Decision log

- `Context:`
- `Decision:`
- `Alternatives considered:`
- `Impact:`
