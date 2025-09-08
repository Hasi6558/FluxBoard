# FluxBoard

A Next.js app using React, TypeScript, Tailwind CSS, Redux Toolkit, Zod, and Vitest.

[CI Status Badge Placeholder]

## Quickstart

- Install: `npm install`
- Develop: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Test: `npm run test`
- Format: `npm run format`
- Build: `npm run build`
- Start: `npm run start`

## Scripts

- `dev`: Run the Next.js dev server
- `build`: Build the app
- `start`: Start the production server
- `lint`: Run ESLint
- `typecheck`: TypeScript type checks
- `test`: Run Vitest tests
- `format`: Prettier formatting
- `ci`: Lint, typecheck, test, and build

## Tech Stack

- Framework: Next.js 15, React 19, TypeScript
- Styles: Tailwind CSS 4
- State: Redux Toolkit, React Redux
- Validation: Zod
- Lint/Format: ESLint, Prettier, EditorConfig
- Tests: Vitest, Testing Library, JSDOM
- Git hooks: Husky, lint-staged, Commitlint

## Branch Model

- `main`: Stable, production-ready
- `develop`: Integration branch
- Feature branches: `feat/<short-description>`
- Fix branches: `fix/<short-description>`

Create PRs from `feat/*` or `fix/*` into `develop`.

## CI

- GitHub Actions workflow runs on push to `main`/`develop` and PRs to `develop`.
- Steps: install → lint → typecheck → test → build → upload `.next` artifact.

Workflow file: `.github/workflows/ci.yml`.
