# REFERENCE FORENSICS

These templates are evidence tools, not moodboards. Their purpose is to prevent abstracting a real reference into generic aesthetic adjectives before implementation.

## Reference

* Name
* URL
* Date inspected
* Viewports inspected

## Evidence Classes

Use:

* OBSERVED
* DOCUMENTED
* INFERRED — HIGH / MEDIUM / LOW
* HYPOTHESIZED

Never present inference as measured fact.

## 1. Composition

Record:

* viewport dimensions
* page/section heights
* content width
* outer margins
* alignment anchors
* column relationships
* empty-space ratio
* dominant object
* visual hierarchy
* section cadence

## 2. Typography

Record:

* font family where identifiable
* fallback
* weight
* width
* optical characteristics
* font size
* line height
* tracking
* measure
* line breaks
* alignment
* hierarchy relationships

## 3. Imagery / Media

Record:

* media role
* subject
* crop
* focal point
* aspect ratio
* treatment
* lighting
* contrast
* texture
* compositing
* responsive asset changes
* video behavior if applicable

## 4. Color / Materiality

Record:

* background
* text
* accents
* surfaces
* borders
* shadows
* grain
* texture
* blend/compositing behavior
* material impression

## 5. Navigation / UI

Record:

* navigation structure
* persistent vs contextual controls
* hover states
* focus states
* active states
* overlays
* menus
* interaction feedback
* reversal/escape behavior

## 6. Motion

For every consequential motion:

* trigger
* element
* start state
* end state
* distance/change
* duration
* easing
* sequencing
* scroll relationship
* interruption/reversal
* mobile transformation
* reduced-motion equivalent
* confidence level

## 7. Technical Observations

Where inspectable:

* DOM vs canvas/WebGL
* rendering approach
* animation libraries
* smooth-scroll behavior
* image/video delivery
* font loading
* responsive implementation clues
* noteworthy browser behavior

Do not guess technology from appearance alone.

## 8. Responsive Transformation

Compare desktop and mobile:

* PRESERVE
* RECOMPOSE
* REORDER
* REPLACE
* COLLAPSE
* SIMPLIFY
* REMOVE

Record what value survives even when geometry changes.

## 9. Quality Drivers

Identify the 3–7 things that most strongly create the perceived quality of the reference.

Avoid vague words such as:

* premium
* cinematic
* clean
* modern

Translate them into concrete causes.

## 10. Reproduction Risks

Record:

* asset-quality dependencies
* typography dependencies
* unusual technical requirements
* responsive risks
* accessibility risks
* performance risks
* areas where superficial imitation would look cheap

## 11. Implementation Implications

Record what the project would need to reproduce the reference’s professional quality class:

* assets
* typography
* layout
* motion
* engineering
* responsive work
* experimental prototypes

## 12. Unknowns

Anything not actually verified belongs here.
