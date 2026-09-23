import { expect, test } from "@playwright/test";

// Visual baselines become active only after a project's representative vertical
// slice or equivalent visual target passes the applicable approval gate.
// Remove this skip only after approval; do not baseline the neutral starter.
test.describe.skip("approved visual surfaces", () => {
  test.use({ reducedMotion: "reduce" });

  test("desktop approved state", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium-desktop");
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot("approved-desktop.png", {
      animations: "disabled",
      maxDiffPixelRatio: 0.001,
    });
  });

  test("mobile approved state", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium-mobile");
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot("approved-mobile.png", {
      animations: "disabled",
      maxDiffPixelRatio: 0.001,
    });
  });
});
