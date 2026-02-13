# Design System Boilerplate

Boilerplate to accelerate MVP delivery with a solid design system foundation using Next.js + shadcn/ui, with emphasis on consistency, accessibility, and fast iteration.

## Purpose

This project is meant to be cloned/forked and reused across multiple MVPs so teams do not restart from zero for:

- tokens and theming (light/dark)
- reusable base components
- navigation and layout patterns
- quality governance with agents

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- class-variance-authority (`cva`) for variants

## How To Use This Boilerplate

### 1. Create A New Project From This Repo

Use this repository as a template/fork for each new MVP.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run In Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### 4. Core Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build -- --webpack
```

## Project Structure

```text
src/
  app/
    globals.css                 # global tokens, theme, and utilities
    page.tsx                    # design system showcase/base page
    layout.tsx
  components/
    ui/                         # base design system primitives
    navigation/                 # navigation/layout patterns
  lib/
    utils.ts                    # cn() utility
agents/                         # governance and decision workflow
```

## Recommended Workflow For A New MVP

### 1. Define Visual Identity Through Tokens

Edit `src/app/globals.css`:

- semantic colors (`--primary`, `--muted`, `--destructive`, etc.)
- typography (`--font-sans-ui`, `--font-mono-ui`)
- radius, borders, and surface tokens

Avoid hardcoded colors directly in components; prefer semantic tokens.

### 2. Build Layouts With Existing Patterns

Use blocks from `src/components/navigation` as your baseline:

- app shell
- topbar
- sidebar desktop/mobile
- command palette

### 3. Reuse/Extend Base Components

Components live in `src/components/ui`. Prioritize:

- composition instead of creating one-off variants
- simple and predictable APIs
- preserving native accessibility behavior

### 4. Add New Components With shadcn

```bash
npm exec shadcn add <component-name>
```

Example:

```bash
npm exec shadcn add tooltip
```

## Quality: Risk-Based Policy (MVP-Friendly)

Required baseline for every change:

- `npm run lint`
- `npm run typecheck`
- `npm run build -- --webpack`

Unit tests are required when there is real risk:

- stateful logic (filtering, pagination, sorting, async states)
- keyboard/focus interactions
- critical conditional rendering
- shared primitives reused across multiple screens/products

For low-risk cosmetic updates, prioritize speed with minimal validation evidence.

## Governance Agents

The `agents/` directory defines evolution rules to avoid design system drift.

- main entry point: `agents/00-design-system-orchestrator.agent.md`
- full flow: `agents/README.md`
- final gate: `agents/08-consistency-guardian.agent.md`

## Contribution Conventions

- every visual change must reference tokens
- every component API change must include a migration strategy
- avoid increasing complexity without clear reuse value
- all repository-facing content (code comments, docs, agent files, UI copy defaults) must be in English

## Deploy

Recommended default deployment platform: Vercel.

- build command: `npm run build`
- start command: `npm run start`

This project also runs on any platform that supports Next.js.
