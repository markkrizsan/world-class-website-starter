import { expect, test } from "@playwright/test";

test("root route is usable without browser errors", async ({ page }) => {
  const pageErrors: Error[] = [];
  const consoleErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error));
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  const response = await page.goto("/", { waitUntil: "load" });
  expect(response, "root navigation should complete").not.toBeNull();
  expect(response!.status(), "root route should succeed").toBe(200);
  await expect(page.locator("html[lang]")).toHaveCount(1);
  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("main")).toBeVisible();
  await expect(page).toHaveTitle(/\S/);

  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow, "page should not overflow horizontally").toBeLessThanOrEqual(1);
  expect(pageErrors, "uncaught page errors").toEqual([]);
  expect(consoleErrors, "unexpected console errors").toEqual([]);
});
