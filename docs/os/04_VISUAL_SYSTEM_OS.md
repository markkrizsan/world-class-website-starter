# 04 — VISUAL SYSTEM OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A3  
**Dependencies:** `01`, `02`, `03`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC`  
**Hands Off To:** `05_UI_INTERACTION_MOTION_OS.md`, `06_RESPONSIVE_MOBILE_OS.md`  
**Relevant Laws:** G1, G2, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Translate resolved strategic/information hierarchy into a coherent visual system.

Core question:

> How should the user perceive relative importance, relationship, personality, and meaning of information already defined upstream?

Governs composition, grids, containers, spacing, rhythm, density, hierarchy, scale, proportion, typography, measure, color, contrast, imagery, photography, illustration, video/media treatment, cropping, art direction, texture/materiality, brand distinctiveness, repeated visual systems, restraint/expressiveness, premium perception, visual coherence, and responsive implications.

It does not redefine audience, value proposition, section purpose, copy hierarchy, conversion architecture, motion behavior, breakpoints, CSS, or implementation.

## 2. OPERATING PREMISE

Visual design determines what is noticed first, what appears related/important/trustworthy/interactive/emotionally significant, what feels coherent, and what feels generic.

Visual hierarchy is relational. It emerges from relative scale, contrast, grouping, spacing, position, typography, media dominance, and density rather than any one style.

Goal: make meaning visible with distinction and coherence.

## 3. AUTHORITY BOUNDARY

File 03 determines what matters. File 04 determines how strongly those priorities appear and how brand character becomes perceptible.

If visual requirements conflict with upstream hierarchy, identify the conflict; return to File 03 if hierarchy is wrong; otherwise redesign around the correct priority.

## 4. PRIORITY TRANSLATION

Translate File 03 content priorities (`PRIORITY A1–A4`, distinct from AUTHORITY A0–A6):
- PRIORITY A1 — PRIMARY
- PRIORITY A2 — SUPPORTING
- PRIORITY A3 — OPTIONAL
- PRIORITY A4 — DEFERRED

Do not map priority mechanically to font size.

### Hierarchy channels
- H1 Scale
- H2 Contrast
- H3 Position
- H4 Space
- H5 Typographic Difference
- H6 Image Dominance
- H7 Grouping
- H8 Density

Use combinations deliberately.

### Hierarchy Assignment Record

```text
SECTION:
PRIORITY A1:
PRIORITY A2:
PRIORITY A3:
PRIORITY A4:
DOMINANT VISUAL OBJECT:
PRIMARY HIERARCHY CHANNELS:
SECONDARY HIERARCHY CHANNELS:
INTENDED READING ORDER:
GROUPING LOGIC:
POTENTIAL COMPETITORS FOR ATTENTION:
```

A PRIORITY A1 element should normally be visually dominant in its decision context, not necessarily the largest object on the page.

## 5. DIAGNOSTIC HIERARCHY

### Squint test
Reduce detail. What appears first/second? What groups? Are section boundaries visible? Does PRIORITY A1 dominate?

### Grayscale test
Does hierarchy survive without hue?

### Typography-only test
Remove media/surfaces. Does type hierarchy remain understandable?

### Media-removal test
What meaning/evidence/identity/emotion disappears? Decorative media is allowed but must be recognized as such.

## 6. COMPOSITION SYSTEM

Three scales:

**Macro** — relationship between sections, full-width media, major text zones, large empty/occupied regions.

**Meso** — relationships within a section: copy/media/cards/proof/controls.

**Micro** — labels/icons/metadata/buttons/borders/captions/internal spacing.

World-class quality requires coherence across all three.

A size/value is never inherently good. It succeeds relative to content, viewport, neighboring scale, brand, hierarchy, copy length, and media balance.

## 7. GRID PHILOSOPHY

A grid is a system of spatial relationships, not a mandate for twelve equal visible columns.

It should provide repeatable alignment, coherent margins, predictable media/text relationships, component compatibility, and responsive adaptability.

Expression may break the grid when the underlying grid makes the break feel intentional.

### Grid types

**Content/Document Grid** — SaaS/B2B/research/utility/documentation. Stable reading widths, predictable columns, repeatability.

**Editorial Grid** — editorial/luxury/portfolio/cultural. Varied spans, media/text juxtaposition, controlled asymmetry.

**Commerce Grid** — catalog/product families/marketplaces. Repeated modules, comparability, image consistency.

**Modular Story Grid** — campaign/launch/complex product stories. Stable zones with variable contained/full-bleed chapters.

**Spatial/Experiential Grid** — immersive brand/spatial/art-driven experiences. Looser visible alignment with strong underlying anchors. Requires orientation and Complexity ROI.

Select the simplest grid that supports needed expression.

## 8. CONTAINERS

Define semantic classes:
- READING
- CONTENT
- WIDE
- MEDIA
- FULL-BLEED

Do not force all content to the same width.

Reading width should support sustained reading rather than maximum site width.

## 9. SPACING SYSTEM

Spacing communicates relationships. Use a constrained relational system, not independent values per section.

Distinguish:
- internal spacing within conceptual groups
- external spacing between groups

External separation should normally be sufficiently greater than internal separation to preserve grouping.

Vertical rhythm = recurring cadence from heading/paragraph/component/section spacing.

Use stable local relationships plus intentional macro variation.

### Rhythm modes
- TIGHT — comparison/utility/technical density
- MODERATE — balanced marketing/SaaS/commerce
- EXPANSIVE — luxury/editorial/narrative emphasis

These are contextual, not quality levels.

## 10. DENSITY

Density is the amount of meaningful material visible in a region. Dense is not automatically cluttered; sparse is not automatically premium.

Higher density may fit dashboards/data/technical tools/commerce/documentation. Lower density may fit luxury storytelling/focused introductions/editorial emphasis.

False rule rejected: premium = lots of whitespace.

## 11. SCALE & PROPORTION

Use scale to establish priority, section-role contrast, brand character, and tempo.

Create a controlled scale system across display, headings, body, labels, metadata, interface text. Not every semantic level requires a unique size; combine size, weight, spacing, color, family.

### Contrast budget
If everything is emphasized, nothing is. Allocate strongest contrast primarily to PRIORITY A1, important state, critical action, major chapter distinction.

## 12. TYPOGRAPHY SYSTEM

Typography performs:
1. legibility
2. hierarchy
3. brand character
4. rhythm

No family is inherently premium.

Define roles before styling:
- DISPLAY
- H1
- H2
- H3
- LEAD
- BODY
- SMALL BODY
- LABEL
- META
- ACTION
- CAPTION
- DATA/NUMERIC

Create only needed roles.

### Family choice
One family can maximize cohesion/utility. Multiple families are justified when meaningful contrast or editorial character matters. Do not pair serif + sans merely because premium sites often do.

### Display vs body
Display may prioritize identity/composition. Body prioritizes sustained readability. One family can serve both; do not force a stylized display face into long copy.

### Type scale
Use a deliberate system such as modular, optical, role-based, or fluid. Exact ratios are not doctrine.

### Responsive implication
Do not assume proportional downscaling. Flag line wrap, viewport occupancy, content length, and composition-critical type for File 06.

### Measure
For sustained prose, optimize reading comfort. Roughly 75 characters/line is a useful reference, not universal law. Short display copy can depart widely.

### Line height/tracking/alignment
Contextual. Avoid universal ratios. Centered text is strongest for short statements, increasingly fragile with line count. Long-form text should support natural reading direction.

## 13. COLOR SYSTEM

Color jobs:
1. brand expression
2. hierarchy
3. state/function
4. atmosphere

Define roles:
- BRAND
- TEXT
- SURFACE
- INTERACTIVE
- SEMANTIC
- ACCENT

Do not let functional meaning collide with decorative preference.

Accent gains power from scarcity.

Do not let color carry critical meaning alone. File 08 verifies formal contrast/accessibility.

## 14. ART DIRECTION

Art direction is the governing visual idea determining how brand/content should be seen. It is not merely attractive images, grain, or trendy type.

### Visual Thesis

```text
We will express [brand/project quality]
through [visual principle]
so the experience feels [specific result],
while preserving [functional requirement].
```

Inputs: Strategy Vector, audience, product reality, brand history, category conventions, desired differentiation, available media, content density, experiential intensity.

### Art-direction territories
For each:
- Concept
- Emotional Character
- Typographic Character
- Image Character
- Color Character
- Material Character
- Composition Character
- Brand Distinction
- Risks

Evaluate strategic fit, distinctiveness, content fit, system potential, responsive resilience, accessibility resilience, complexity.

## 15. IMAGE ROLE MODEL

Classify major images:
- EXPLANATORY
- PRODUCT
- EVIDENCE
- CONTEXTUAL
- EMOTIONAL
- BRAND
- NAVIGATIONAL
- DECORATIVE

Decorative is allowed but should not masquerade as essential information.

Choose imagery based on relevance, subject clarity, crop flexibility, quality, contextual value, brand consistency, uniqueness, and responsive viability.

## 16. CROPPING

For important images define:
- focal subject
- safe crop region
- acceptable crop loss
- required context
- text overlay
- whether alternate source crops are needed

At each composition check focal subject, context, accidental tension, overlay legibility, and whether the image still performs its role.

## 17. PHOTOGRAPHY / ILLUSTRATION / PRODUCT UI / DIAGRAMS

### Photography
Define subject, distance, lens character, lighting, contrast, palette, environment, human presence, staging, realism, post-processing, crop behavior. “Cinematic” alone is insufficient.

### Illustration
Use for abstraction, explanation, personality, imagined scenes, narrative unity. Define stroke, geometry, detail, perspective, palette, texture, character treatment.

### Product UI
Show workflow/outcome/capability/context rather than endless browser mockups proving software exists. Crop intentionally without falsifying product.

### Diagrams/Data
Prioritize hierarchy, labels, comparability, semantic color, legibility. Decorative complexity must not obscure relationships.

## 18. VIDEO / MEDIA

Video should perform a role static imagery performs less effectively: demonstration, atmosphere, narrative, spatial context, product behavior, testimony.

File 04 defines framing/crop/tone/continuity/subject/aspect/poster relationship. File 05 defines playback behavior. File 08 evaluates performance/accessibility.

Large media attracts attention. Before dominant scale ask whether media is truly PRIORITY A1 or merely atmosphere.

## 19. TEXTURE / MATERIALITY

Texture may communicate tactility, heritage, analog character, luxury, grit, softness, or technical precision. Define where it appears, what it means, how many surface types exist, and how borders/shadows/depth behave.

Random blur/grain/glow/shadow produces noise, not material coherence.

## 20. BRAND DISTINCTIVENESS

Potential carriers:
- type
- color
- photography
- illustration
- composition
- iconography
- language
- graphic motif
- surface
- media
- later motion

Do not depend on logo alone.

### Logo removal test
Would a knowledgeable viewer still plausibly identify the brand/category position?

### Competitor swap test
Could a direct competitor replace logo/name while leaving almost everything unchanged? If yes, distinction is weak.

### Signature device
May be distinctive crop, framing, typographic relation, border, image treatment, illustrative language, composition motif. Valuable when repeatable, recognizable, meaningful, scalable.

## 21. G4 — STABLE SYSTEMS ENABLE EXPRESSIVE VARIATION

Define invariants and variables.

### Invariants
- grid anchors
- typography roles
- CTA treatment
- spacing relationships
- border logic
- color-role logic
- media framing logic

### Variables
- composition
- image scale
- background
- crop
- section density
- accent use
- full-bleed vs contained

A world-class visual system may vary dramatically because deeper rules remain recognizable.

## 22. SECTION VARIATION / CADENCE

Do not make every section the same card-and-copy layout. Do not make every section a new universe.

Classify section visual role:
- ORIENTATION
- EXPLANATION
- COMPARISON
- PROOF
- EMOTION
- TRANSITION
- ACTION

Design page as a sequence of visual states: dense/open, light/dark, text-led/media-led, contained/full-bleed, symmetrical/asymmetrical. Use contrast intentionally, not mechanically.

Across variation preserve several recurring signals such as type roles, margins, image treatment, button system, crop behavior, color roles, corner/border logic.

## 23. FALSE RULES REJECTED

- Premium = minimal
- Premium = lots of whitespace
- Premium = giant serif
- Asymmetry = sophistication
- Visual novelty = quality

Minimal/dense, symmetric/asymmetric, serif/sans, expressive/restrained are context-dependent tools.

## 24. PREMIUM PERCEPTION

Often emerges from specificity, media quality, coherent hierarchy, appropriate restraint, precise alignment, deliberate typography, clear identity, production quality, consistency, polish.

Aesthetic approval cannot substitute for usability.

## 25. RESTRAINT VS EXPRESSIVENESS

Use Strategy Vector:
- Experiential Intensity
- Interaction Novelty
- Brand Expression
- Information Complexity

Restrained fits utility/dense/trust-heavy contexts. Balanced fits strong brand + substantial information. Highly expressive fits experiences where brand/narrative/emotion carry core value.

Expression is not permission for chaos.

## 26. COMPLEXITY GATE

Route to File 09 when visual direction materially increases media production, responsive difficulty, accessibility risk, engineering complexity, or maintenance cost.

## 27. ARCHETYPE ADAPTATIONS

### SaaS/B2B
Prioritize clarity, systematic hierarchy, product UI, credible proof, structured density, distinction without comprehension loss. Avoid generic neon AI gradients and abstract 3D replacing product understanding.

### Ecommerce
Prioritize product imagery, comparability, category recognition, merchandising hierarchy, recurring structures. Avoid editorial art direction obscuring product.

### Luxury/Hospitality
Prioritize art direction, photography, sense of place/material, controlled pacing, distinctive typography, atmosphere. Avoid illegible luxury type, aesthetic silence, generic black/gold styling.

### Editorial/Research
Prioritize measure, typographic hierarchy, chapter distinction, evidence/media integration, readable density.

### Portfolio/Agency
Prioritize distinctive art direction, work imagery, project differentiation, authored composition. Avoid theater overwhelming work evaluation.

### Brand/Guidelines
Prioritize brand expression, systematic demonstration, consistency, visual examples, readable reference structure.

### Public Service/Utility
Prioritize readability, hierarchy, predictable grouping, functional color, legible typography, restrained media.

### Experience-First Campaign
Prioritize concept, art direction, visual chaptering, media integration, memorable composition while preserving semantic clarity, orientation, essential content, responsive viability.

## 28. CONDITIONAL RULES

- Limit the number of visual grammars.
- Let PRIORITY A1 own the strongest local signal.
- Media scale should track media value.
- Dense content needs stronger structure, not automatically more space.
- Sparse design requires higher precision.
- Expression may vary more than system logic.
- Critical identity should not depend on one effect.

## 29. PATTERN FAMILIES

Optional:
- Editorial Split
- Product Stage
- Modular System Grid
- Full-Bleed Chapter
- Dense Technical Editorial

Patterns are never mandatory.

## 30. FAILURE MODES

- Generic Premium
- Everything Is a Card
- Everything Is Large
- Spacing by Vibe
- Decorative Media Dominance
- Typeface as Brand Strategy
- Contrast Collapse
- Component Inconsistency
- Section Slot Machine
- Template Monotony
- False Minimalism
- Moodboard Without System
- Desktop Art-Direction Trap
- Brand Through Decoration

## 31. DIAGNOSTIC TESTS

- Squint
- PRIORITY A1 Dominance
- Grouping
- Grayscale Hierarchy
- Typography-only
- Media Removal
- Logo Removal
- Competitor Swap
- Grid Break
- Density
- Section Cadence
- Crop
- Contrast
- Type Measure
- Scale Inflation
- Style Removal

## 32. RESPONSIVE IMPLICATION RECORD

Classify each consequential visual element:
- MUST PRESERVE
- MAY TRANSFORM
- MAY REMOVE

Record role, desktop purpose, responsive priority, crop/scale/readability risks.

## 33. HANDOFF TO FILE 05

Provide:
- Visual Thesis
- Dominant Brand Character
- Section Visual Roles
- Visual Hierarchy
- Signature Devices
- Media Roles
- Material/Surface Logic
- Stable Visual Invariants
- calm-attention areas
- emphasis-capable areas

Do not prescribe animation.

## 34. HANDOFF TO FILE 06

Provide:
- Critical Hierarchy
- Grid Logic
- Container Classes
- Type Roles
- Composition-Critical Relationships
- Image Focal Points
- Crop Requirements
- Section Density
- Brand Elements that Must Survive
- Desktop-Specific Visual Devices
- Transformable Elements
- Removable Decoration

## 35. PROJECT_WEBSITE_SPEC WRITEBACK

Write/update:
- Visual Thesis
- Art Direction
- Hierarchy translation
- Grid/container
- Spacing/rhythm/density
- Typography
- Color roles
- Media direction
- Materiality
- Brand distinctiveness
- Section system
- Responsive flags
- Open questions

## 36. PRE-INTERACTION ACCEPTANCE GATE

PASS only when:
- PRIORITY A1/A2/A3/A4 visually translate clearly;
- grid/container/spacing/type/color systems exist;
- visual thesis is specific and non-generic;
- sections vary without fragmentation;
- typography remains readable and intentional;
- dominant media has purpose/crop requirements;
- no known critical contrast conflict is baked into art direction;
- identity extends beyond logo;
- desktop art direction has plausible responsive logic;
- `PROJECT_WEBSITE_SPEC` is updated.

## 37. OPERATIONAL WORKFLOW

`Strategy Vector -> File 03 handoff -> PRIORITY A1/A2/A3/A4 -> Visual Thesis -> grid/composition -> containers -> spacing/rhythm/density -> typography -> color -> art direction -> media/crops -> brand carriers -> section variation -> diagnostics -> responsive implications -> PROJECT_WEBSITE_SPEC -> gate -> Files 05/06`

## 38. RED TEAM

Ask whether hierarchy is obvious, whether everything is trying to be important, whether grid serves content, whether whitespace is manufacturing luxury, whether giant type compensates for weak composition, whether color roles conflict, whether media communicates anything useful, whether the site is interchangeable with competitors, whether variation is meaningful or random, and which compositions collapse first under responsive constraints.

## 39. SUCCESS STANDARD

This module succeeds when hierarchy is visibly legible; art direction is specific; typography/grid/color/spacing/media operate as one system; section variation creates rhythm without fragmentation; identity survives beyond logo; premium perception comes from precision rather than cliché; and interaction can now reinforce an already-successful static hierarchy rather than rescue a weak one.
