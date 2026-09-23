# Browser QA Protocol

Automated browser evidence feeds the Website OS; it does not replace human inspection, File 08 integrity acceptance, or File 13 L3 Full Acceptance QA. Record findings and exceptions in the current `PROJECT_WEBSITE_SPEC.md` and route failures to the owning system.

## Local change

Run targeted browser verification for the changed behavior. Capture the relevant route, state, viewport, and browser when visual or interactive behavior changes.

## Module change

Run affected browser tests and inspect responsive states. Apply relevant accessibility and performance checks from `docs/os/08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md`.

## Vertical slice

Inspect the actual rendered slice in a browser at representative desktop and mobile states. Exercise interaction and failure states, apply relevant File 08 checks, and run `docs/acceptance/REFERENCE_FIDELITY_GATE.md` when the work is reference-led. Record results in `docs/acceptance/VERTICAL_SLICE_GATE.md` before broad production.

## Launch candidate

Run the full automated suite, inspect the supported browser/device/environment matrix and failure states, compare current approved visual baselines, satisfy the File 08 hard gate, and complete File 13 L3 acceptance through `docs/os/13_SCORECARD_QA_REDTEAM_OS.md`.

Source code review is insufficient for substantive visual work. Passing automated tests does not prove world-class quality. Lighthouse alone, axe alone, and screenshot regression alone are each insufficient. Browser evidence is one input into the larger acceptance system; no numerical result bypasses a failed hard gate.
