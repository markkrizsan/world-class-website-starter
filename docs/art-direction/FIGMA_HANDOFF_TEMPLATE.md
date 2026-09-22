# FIGMA HANDOFF

Figma is a visual specification surface, not the permanent project source of truth. The repository and PROJECT_WEBSITE_SPEC remain authoritative.

## Figma File

- File name
- File URL
- Last approved version/date
- Approved by

## Approved Frames

| Frame | Desktop/Mobile | Status | Purpose | Implementation Notes |
| --- | --- | --- | --- | --- |
| | | | | |

## Design Foundations

Record:

- typography
- colors
- spacing relationships
- grid/containers
- surfaces/materiality
- image treatments
- reusable visual primitives
- icon/symbol system

## Implementation Truth

Figma defines approved visual intent.

The production browser determines final behavior, responsiveness, accessibility, performance, and interaction reality.

If implementation constraints require a material design change:

1. identify the conflict;
2. route the decision upstream;
3. update the approved design/spec;
4. do not silently redesign during coding.

## Motion Handoff

For motion implied by static frames, link or record:

- prototype
- recording
- motion contract
- trigger
- start/end state
- timing class
- easing family
- responsive behavior
- reduced-motion behavior

Static Figma frames alone are not sufficient specification for complex motion.

## Asset Handoff

For every major asset:

- file/source
- approved version
- intended crop
- alternate mobile asset
- format
- optimization requirements
- rights/licensing status

## Design-to-Code Verification

Before approving implementation:

- compare browser capture against approved keyframe;
- verify typography;
- verify geometry;
- verify media crop;
- verify spacing;
- verify color/materiality;
- verify responsive transformation;
- record intentional deviations.

## Handoff Rule

Do not treat automatic Figma-to-code output as final production implementation.

Figma provides design context and intent. Production code must still follow the project specification, engineering architecture, accessibility requirements, performance requirements, and browser verification gates.
