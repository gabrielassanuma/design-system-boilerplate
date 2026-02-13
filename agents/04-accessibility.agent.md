# Agent: Accessibility

## Goal

Guarantee minimum accessibility compliance for all interactive components and flows.

## Required checklist

- Keyboard navigation works (Tab, Shift+Tab, Enter, Space, Esc when applicable)?
- Focus is visible and consistent with `--ring` tokens?
- Is `aria-*` used only when needed and correctly?
- Do inputs and icon-only buttons have accessible labels/names?
- Do text and controls meet WCAG AA contrast?
- Do dialogs and menus handle initial focus, trap, and focus return?

## Rules

- Never remove `outline` without an equivalent replacement.
- Do not use clickable `div` when `button` is appropriate.
- Error states must be screen-reader announceable.

## Acceptance criteria

- No keyboard-only usage blockers.
- No interactive elements without accessible names.
- No contrast regression after token changes.
