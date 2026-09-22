# Experience Lab

`/lab` is an isolated proving ground for high-risk or uncertain creative-development ideas. Use it to resolve a specific uncertainty before committing to production integration. Record the question, evidence, costs, and decision in the [experience-spike template](../docs/decisions/EXPERIENCE_SPIKE_TEMPLATE.md).

**No experimental feature enters production solely because it looks impressive. It must demonstrate enough project-specific value to justify its complete system cost.**

## Rules

- A lab experiment answers one clearly stated question.
- Do not build full page sections in `/lab`.
- Do not treat successful rendering as sufficient proof.
- Experiments must test relevant desktop/mobile behavior.
- Experiments must consider reduced motion where applicable.
- Experiments must expose meaningful performance or accessibility risks.
- Experimental code does not automatically graduate into production.
- Production code should be rewritten/integrated cleanly rather than blindly copied from a prototype when appropriate.

## Categories

These directories live under `/lab`:

- `/animation` — motion and interaction experiments.
- `/typography` — typographic behavior and rendering experiments.
- `/shaders` — shader and advanced-rendering experiments.
- `/scroll` — scroll behavior and choreography experiments.
- `/experimental` — other uncertain creative-development ideas.
