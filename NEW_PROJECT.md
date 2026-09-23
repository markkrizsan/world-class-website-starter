# START A NEW WEBSITE PROJECT

This repository is a production operating system, not a pre-designed website theme. Do not begin by choosing visual patterns or building sections.

Purpose → Strategy Vector → Governing Laws → Relevant Specialist Systems → `PROJECT_WEBSITE_SPEC.md` → References / Art Direction → Patterns only when needed → Vertical Slice → Production → Verification → Launch Candidate → File 13 Acceptance

## 1. Create the Project

Create a new repository from `markkrizsan/world-class-website-starter` using GitHub's template workflow, then clone it. That workflow starts an unrelated Git history. Until template mode is enabled, copy the starter into a new repository without its `.git` history. Use the package manager declared in `package.json` (`pnpm`) and the pinned Node version. Run `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm typecheck`, `pnpm lint`, `pnpm build`, and `pnpm test:ci` to confirm the development server and browser QA infrastructure. Install Playwright browsers when absent.

## 2. Establish the Project Brief

Before material design/build work, define the A0 Project Brief. Resolve or visibly mark unknown: what is being built; business objective; primary audience and user objective; primary CTA/action; required content and functionality; brand requirements; technical and business constraints; timeline; supported environments; available assets/content; and major unknowns. Do not invent project facts.

## 3. Initialize PROJECT_WEBSITE_SPEC.md

Use `PROJECT_WEBSITE_SPEC.md` as the persistent resolved project contract, not chat history. Record project state, Strategy Vector, audience/job, business/page objective, primary action, IA, narrative, conversion, visual direction, typography/grid/media, interaction/motion, responsive strategy, engineering architecture, performance/accessibility requirements, complexity decisions, acceptance criteria, and assumptions/exceptions. Update it when consequential upstream decisions change.

## 4. Resolve Strategy Vector

For a new site, redesign, major page, or material strategic change, use `docs/os/02_STRATEGY_VECTOR_AND_ROUTER.md`. Understand purpose and Strategy Vector before selecting visual or interaction patterns. If routing is unclear, use `docs/os/00_OS_MANIFEST_ROUTER.md`; load only relevant specialist modules.

## 5. Strategy / IA / Narrative / Conversion

Use `docs/os/03_STRATEGY_IA_NARRATIVE_CONVERSION_COPY_OS.md` where relevant. Resolve audience, hierarchy, narrative, proof, conversion logic, and content priorities sufficiently that visual design need not invent them.

## 6. Reference Lock

For reference-led work, use `docs/references/REFERENCE_LOCK_TEMPLATE.md`, then `docs/forensics/REFERENCE_FORENSICS_TEMPLATE.md`. When appropriate, one primary reference owns major composition/experience logic; give supporting references explicit responsibilities. Do not average references into aesthetic adjectives or copy proprietary identity, assets, copy, or trademarks.

## 7. Art Direction + Assets

Use `docs/art-direction/ART_DIRECTION_TEMPLATE.md` and `docs/art-direction/ASSET_PLAN_TEMPLATE.md`. Resolve the intended visual world before broad implementation. Important surfaces need real or approved representative assets; generic placeholders must not determine art direction.

## 8. Keyframes / Figma

Use `docs/art-direction/KEYFRAME_APPROVAL_TEMPLATE.md` and, when useful, `docs/art-direction/FIGMA_HANDOFF_TEMPLATE.md`. Figma is optional. Use it when explicit design approval materially reduces visual uncertainty; browser-native art-direction prototypes are also valid.

## 9. Experience Spikes

For costly/risky behavior, use `lab/README.md`, `docs/decisions/EXPERIENCE_SPIKE_TEMPLATE.md`, and `docs/os/09_COMPLEXITY_ROI_OS.md`. Prototype advanced scroll choreography, WebGL/shaders, unusual navigation, canvas rendering, page transitions, or learned interaction models before architecture hardens. Complexity must earn its total system cost.

## 10. Vertical Slice

When cross-system failure would be expensive, prove one production-quality slice before broad production using `docs/acceptance/VERTICAL_SLICE_GATE.md`. Include real or production-representative content, typography, assets, responsive behavior, interactions, semantics, and integrity requirements. A desktop mockup is insufficient. For reference-led work, also use `docs/acceptance/REFERENCE_FIDELITY_GATE.md`. Begin broad production only after the required gate passes.

## 11. Production

Implement through the application scaffold. Preserve the project spec, approved art direction, responsive intent, interaction contracts, semantics, performance, and accessibility. Use the least powerful technology that preserves the intended value. Route upstream problems backward rather than silently redesigning.

## 12. Browser Verification

Use `docs/acceptance/BROWSER_QA_PROTOCOL.md`. Run typecheck, lint, build, browser QA, and accessibility regression; run visual regression once approved baselines exist. Visual regression protects approved work, not design quality. Never update snapshots just to make CI green.

## 13. Launch Candidate

When implementation is sufficiently complete and File 08 requirements pass, prepare `docs/acceptance/LAUNCH_CANDIDATE_HANDOFF_TEMPLATE.md`. Launch Candidate does **not** mean Launch Ready.

## 14. Final Acceptance

Use `docs/acceptance/LAUNCH_ACCEPTANCE_PROTOCOL.md` and `docs/acceptance/FINAL_ACCEPTANCE_REPORT_TEMPLATE.md`. Major final delivery and any premium, elite, best-in-class, world-class, or launch-ready claim require File 13 L3 Full Acceptance QA. Hard-gate failures cannot be averaged away.

## 15. Completion

Complete the project only at its accepted state. `LAUNCH READY` means it responsibly satisfies defined release obligations. `WORLD-CLASS STANDARD MET` is a separate, higher gate. Neither follows from source code, CI, Lighthouse, axe, screenshots, reference prestige, animation, expensive technology, or enthusiasm alone.
