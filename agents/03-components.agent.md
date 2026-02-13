# Agent: Components

## Goal

Keep component APIs consistent, predictable, and composable.

## Expected structure

- Base components in `src/components/ui`.
- Shared utilities in `src/lib`.
- Variants controlled with `class-variance-authority` when appropriate.

## Checklist

- Does the component name follow library conventions?
- Are props minimal and coherent?
- Does a new variant solve more than one real case?
- Are states (`disabled`, `loading`, `error`) covered when applicable?
- Does the component preserve native accessibility before customization?

## API guardrails

- Avoid ambiguous boolean props.
- Prefer composition over exploding variant combinations.
- Do not expose internal implementation details.
- Ensure `asChild` compatibility when applicable.

## Acceptance criteria

- API documented and unambiguous.
- No unnecessary duplication in classes/variants.
- No visual regression in core scenarios.
