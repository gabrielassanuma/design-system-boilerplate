# Agent: Design Tokens

## Goal

Control color, typography, spacing, and radius through semantic and reusable tokens.

## Project scope

- Global tokens in `src/app/globals.css`.
- Avoid magic values inline in components.

## Checklist

- Does an equivalent token already exist?
- Does the token name express semantic intent (not raw color)?
- Is minimum contrast validated for foreground/background?
- Does the token work in light and dark themes?
- Were token changes reflected in showcases/documentation?

## Naming guideline

- Use semantic roles: `--primary`, `--muted-foreground`, `--border`.
- Avoid physical names at consumption layer: `--blue-500`, `--gray-200`.
- If needed, keep raw palette separated from semantic layer.

## Acceptance criteria

- No repeated values without tokens.
- No hardcoded color in `src/components/ui`.
- Light/dark themes remain coherent.

## Decision log

- `Token created/changed:`
- `Reason:`
- `Expected impact:`
