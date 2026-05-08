# contentrx-action-test

Test fixture for the ContentRX GitHub Action.

## What's inside

A mock SaaS frontend with intentionally varied copy across:

- `src/components/Buttons.tsx` — primary, destructive, navigation CTAs
- `src/components/ErrorMessages.tsx` — alert / error patterns
- `src/components/EmptyStates.jsx` — zero-state copy
- `src/pages/SignIn.tsx` — form labels, placeholders
- `src/pages/Pricing.tsx` — marketing + FAQ
- `public/maintenance.html` — plain HTML

The strings are a mix of clean copy and copy that should surface findings — generic CTAs, "Click here", trailing periods on UI labels, em dashes, jargon ("utilize", "leverage", "world-class"), error messages that blame the user, etc.

## To run the action against a PR

1. Push this repo to GitHub.
2. Add `CONTENTRX_API_KEY` as a repository secret (Settings → Secrets and variables → Actions).
3. Make any change in `src/` or `public/` and open a PR.
4. The workflow at `.github/workflows/contentrx.yml` runs on `pull_request` and posts a sticky comment with the engine's findings.

## Workflow config notes

- `fail-on: none` keeps the check advisory-only — the comment lands but the run never blocks merge. Switch to `review` once the team has triaged the initial backlog.
- The action lives in a subdirectory of the main contentRX repo (`thenewforktimes/ContentRX/github-action@main`) until it splits to its own public repo. Pin to a SHA once the action is on the Marketplace.
- `paths:` is set to match the workflow `paths:` filter so the action only checks files that triggered the run.
