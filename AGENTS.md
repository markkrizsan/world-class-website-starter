# World-Class Website Production Rules

Before material work:

1. Read `PROJECT_WEBSITE_SPEC.md`.
2. Read only the relevant files under `/docs`.
3. Preserve approved strategy, art direction, responsive behavior, and interaction decisions.
4. If implementation exposes an upstream problem, report it rather than silently redesigning the project.

Engineering rules:

- Use the least powerful technology that fully solves the requirement.
- Prefer semantic HTML and CSS before adding JavaScript.
- Prefer native interaction primitives before custom widgets.
- Do not introduce dependencies without a clear project-specific reason.
- Do not create abstraction before meaningful reuse exists.
- Do not replace approved responsive behavior with generic stacking.
- Do not use placeholder imagery in approved production surfaces.
- Do not invent visual patterns merely to make the site look more impressive.
- Motion must have a defined communication, narrative, interaction, or brand purpose.
- Experimental WebGL, canvas, scroll choreography, custom cursors, audio, or unusual navigation must be developed in `/lab` before production integration.
- Preserve accessibility, semantics, keyboard operation, reduced-motion behavior, performance, and graceful failure.

Quality rules:

- Never claim completion from source code alone.
- Verify substantive visual work in the browser.
- Verify desktop and mobile independently.
- Run relevant tests after substantive changes.
- Compare reference-led work against approved reference/keyframe targets.
- If implementation looks materially cheaper or more generic than the approved reference quality, treat the work as unfinished.

Workflow:
Strategy → Reference Lock → Art Direction → Keyframes → Experience Spikes → Vertical Slice → Production → Integrity Review → QA → Launch.

Do not build additional sections before an approved vertical slice exists.
