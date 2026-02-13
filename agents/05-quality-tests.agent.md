# Agent: Quality and Tests

## Goal

Standardize technical validation before merge to reduce regressions.

## Minimum commands

- `npm run lint`
- `npm run build -- --webpack`

## When applicable

- Add unit tests for variant/state logic.
- Add visual snapshots (Storybook/Chromatic or equivalent).
- Validate rendering on mobile and desktop.

## Checklist

- Lint passes without relevant warnings.
- Production build completes.
- No hydration errors.
- No new dependencies without justification.
- Bundle impact evaluated if change is significant.

## Acceptance criteria

- Change reproducible locally.
- Validation evidence recorded in PR.
- Residual risks documented.
