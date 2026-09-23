import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// Automated accessibility testing is a regression detector, not File 08 acceptance.
test("root route has no serious or critical automated violations", async ({ page }) => {
  const response = await page.goto("/", { waitUntil: "load" });
  expect(response?.status()).toBe(200);
  await expect(page.locator("main")).toHaveCount(1);

  const results = await new AxeBuilder({ page }).analyze();
  const seriousViolations = results.violations.filter((violation) =>
    violation.impact === "serious" || violation.impact === "critical",
  );
  expect(seriousViolations, "serious/critical axe violations").toEqual([]);
});

test("keyboard focus and reduced-motion mode remain usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "load" });
  await expect(page.locator("main")).toBeVisible();

  const controls = page
    .locator(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    .filter({ visible: true });
  if ((await controls.count()) > 0) {
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus-visible");
    await expect(focused.first()).toBeVisible();
  }
});

test("root route remains usable at a narrow reflow width", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/", { waitUntil: "load" });
  await expect(page.locator("main")).toBeVisible();
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow, "320 CSS-pixel reflow should not scroll sideways").toBeLessThanOrEqual(1);
});
