# Contributing to FluxBoard

Thanks for taking the time to contribute!

## Commit Style

We use Conventional Commits.

Examples:

- `feat(auth): add OAuth login`
- `fix(api): handle 500 on users endpoint`
- `chore(deps): bump next to 15.x`

## Branching

- `main`: stable
- `develop`: integration
- Feature branches: `feat/<short-description>`
- Fix branches: `fix/<short-description>`

Open PRs from `feat/*` or `fix/*` → `develop`.

## PR Checklist

- Lint passes: `npm run lint`
- Types pass: `npm run typecheck`
- Tests pass: `npm run test`
- Build passes: `npm run build`
- Include screenshots for UI changes

You can run all checks locally via: `npm run ci`.

## Pre-commit

Husky + lint-staged format your changes, and Commitlint validates messages.
