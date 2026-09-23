# REFERENCE FIDELITY GATE

Use this approval record when a project has a governing reference or reference set. Follow the authority in `PROJECT_CUSTOM_INSTRUCTIONS.md` and `docs/os/12_BUILD_WORKFLOW_OS.md`; this record checks the applicable reference responsibilities, rather than replacing the project specification or OS acceptance gates. Derive the assigned responsibilities from `docs/references/REFERENCE_LOCK_TEMPLATE.md`, evidence from `docs/forensics/REFERENCE_FORENSICS_TEMPLATE.md`, and approved intent from `PROJECT_WEBSITE_SPEC.md`.

A rendered comparison is required. Words such as “premium,” “editorial,” “cinematic,” “minimal,” “bold,” “luxury,” and “modern” are not evidence of fidelity; identify the observable design or behavior that produces the intended quality. A numerical score cannot bypass a failed gate.

## Gate State

Select exactly one for this review:

- NOT READY
- IN REVIEW
- REVISION REQUIRED
- APPROVED

## Governing Reference

- Primary reference:
- Route/state inspected:
- Viewport/input/environment:
- Reference date/version:
- Primary responsibilities owned by this reference:

## Supporting References

For each supporting reference, record:

- Reference:
- Exact responsibility it owns:
- What it explicitly does NOT own:

Do not average references into a generic aesthetic. Evaluate each only for its assigned responsibility.

## Comparison Scope

- Implementation route:
- Viewport:
- State:
- Browser/device:
- Build/deployment:
- Comparison date:

## Responsibility-by-Responsibility Review

Evaluate only responsibilities assigned in the reference lock. Include these where applicable:

- composition
- hierarchy
- information density
- typography
- scale
- spacing/rhythm
- grid/container behavior
- imagery/media behavior
- color/materiality
- navigation/orientation
- interaction
- motion
- scroll behavior
- transitions
- responsive transformation
- mobile composition
- content/media relationship
- atmosphere or experiential character

For each applicable responsibility, repeat this record. Ground observations in the inspected reference and rendered implementation; distinguish observation from inference.

- RESPONSIBILITY / GOVERNING REFERENCE:
- REFERENCE OBSERVATION:
- IMPLEMENTATION OBSERVATION:
- MATERIAL DIFFERENCE:
- CAUSE:
- INTENTIONAL OR UNINTENTIONAL:
- ACTION REQUIRED:

## Quality-Class Test

Ask against the rendered artifact and explain every material “yes” or require revision:

- Does the implementation feel materially cheaper than the governing reference?
- Has distinctive composition been replaced by standard section stacking?
- Has expressive typography been normalized into ordinary web typography?
- Have real media relationships been replaced by placeholder geometry?
- Has interaction been simplified beyond the value the reference demonstrates?
- Has mobile become a generic stacked version rather than an intentional transformation?
- Has spacing/rhythm lost the reference’s tension, density, or pacing?
- Has the implementation retained only surface decoration while losing structural quality?
- Has a familiar framework/component pattern silently overwritten the reference logic?
- Would an informed side-by-side observer classify these as belonging to clearly different professional quality classes?

## Identity / Originality Boundary

Reference fidelity does NOT mean copying:

- brand identity
- logos
- proprietary copy
- copyrighted imagery
- trademarks
- distinctive branded assets

Record how the implementation preserves quality, mechanism, composition logic, interaction logic, pacing, and sophistication while expressing the current project’s own identity:

## Deviation Register

Classify every material deviation using one of:

- INTENTIONAL / PROJECT-SPECIFIC
- RESPONSIVE NECESSITY
- ACCESSIBILITY / SEMANTIC REQUIREMENT
- PERFORMANCE / RESILIENCE REQUIREMENT
- TECHNICAL CONSTRAINT
- ASSET CONSTRAINT
- UNINTENTIONAL DRIFT

For each deviation, record its responsibility, evidence, cause, classification, decision authority, and required action. Unintentional drift cannot be approved merely because the result is “still nice.”

## Evidence

Link or record appropriate evidence:

- side-by-side screenshots
- screen recordings
- viewport captures
- interaction recordings
- responsive comparisons
- browser inspection
- measured geometry when useful

Do not approve reference fidelity from source code alone.

## Approval Conditions

APPROVED requires all applicable conditions:

- governing reference responsibilities are explicit;
- the implementation was compared against the actual reference;
- major visual and behavioral differences are understood;
- material deviations are intentional or justified;
- project identity remains original;
- no major responsibility has collapsed into generic implementation;
- representative desktop and mobile states pass when both are relevant;
- unresolved drift is not hidden behind subjective language.

Record decision, reviewer, date, evidence links, remaining conditions, and any required upstream `PROJECT_WEBSITE_SPEC.md` update. Any material failure keeps this gate in REVISION REQUIRED regardless of numerical score or unrelated visual strengths.
