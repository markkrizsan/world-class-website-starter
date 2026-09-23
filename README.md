# World-Class Website Starter

A brand-neutral production system for creating distinct website projects. It is not a website theme or a finished design.

## **START A NEW PROJECT → [NEW_PROJECT.md](NEW_PROJECT.md)**

`PROJECT_WEBSITE_SPEC.md` is each project's current contract. `docs/os/` is the authoritative Website OS. `AGENTS.md` governs agent behavior, and `.agents/skills/website-os/SKILL.md` routes Codex through the relevant modules. Use `NEW_PROJECT.md` for the canonical startup sequence. Figma is optional.

The repository includes a neutral Next.js scaffold, GitHub Quality CI, Playwright browser and accessibility checks, and Vercel deployment support through the Next.js application. Vercel project linkage is per project; previews require connecting the new repository to Vercel. Visual regression baselines activate only after a project target is approved.

Use Node 24 and pnpm 12.5.1 as declared in `package.json`:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
pnpm test:ci
```

Install the Playwright browsers if the test runner requests them. The neutral starter intentionally skips visual snapshot tests until an approved project baseline exists.
