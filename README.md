# World-Class Website Starter

A reusable starter/template for future premium website projects, with a shared production workflow and dedicated spaces for strategy, research, art direction, implementation, experiments, assets, and quality assurance.

Create each individual project from this repository. Develop project-specific websites in those new repositories, rather than directly inside this master starter.

Follow the operating rules in `AGENTS.md`. Complete the blank `PROJECT_WEBSITE_SPEC.md` for each new project before material work begins. This starter includes production documentation and a visually neutral Next.js App Router scaffold; it contains no project-specific website design.

## Local development

Use Node 24 (`nvm use`) and pnpm 12.5.1, as pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm typecheck`, `pnpm lint`, and `pnpm build` to validate the scaffold. Run `pnpm start` after a build to serve the production application.

TypeScript and ESLint are pinned to the latest stable versions supported by the Next.js lint configuration and its plugins. Runtime dependencies are limited to Next.js, React, and React DOM. No external fonts or project-specific UI dependencies are included.
