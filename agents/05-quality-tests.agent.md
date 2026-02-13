# Agent: Quality and Tests

## Goal

Standardize technical validation before merge with a risk-based policy that keeps MVP velocity high.

## Baseline commands (always required)

- `npm run lint`
- `npm run typecheck`
- `npm run build -- --webpack`

## Risk-based test policy

- Add tests when changes introduce or modify:
  - Stateful behavior (filters, sorting, pagination, async states).
  - Keyboard interactions or focus management.
  - Conditional rendering logic and variant resolution.
  - Shared primitives reused across multiple screens/products.
- Unit tests are optional for thin wrappers around stable primitives when no custom logic is added.
- Visual snapshots (Storybook/Chromatic or equivalent) are recommended for major visual updates, optional for small MVP iterations.

## MVP guardrails

- Keep test scope proportional to risk and reuse impact.
- Prefer a few high-value tests over broad low-signal coverage.
- Do not block MVP delivery for low-risk cosmetic changes.

## Checklist

- Lint passes without relevant warnings.
- Typecheck passes without errors.
- Production build completes.
- No hydration errors.
- No new dependencies without justification.
- Bundle impact evaluated if change is significant.
- If tests were skipped, risk rationale is explicitly documented.

## Acceptance criteria

- Change reproducible locally.
- Validation evidence recorded in PR.
- Residual risks documented.
