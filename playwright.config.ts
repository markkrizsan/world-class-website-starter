import { defineConfig, devices } from "@playwright/test";

const externalBaseURL =
  process.env.PLAYWRIGHT_TEST_BASE_URL ?? process.env.BASE_URL;
const baseURL = externalBaseURL ?? "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  outputDir: "test-results",
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox-desktop", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit-desktop", use: { ...devices["Desktop Safari"] } },
    { name: "chromium-mobile", use: { ...devices["Pixel 7"] } },
  ],
  ...(externalBaseURL
    ? {}
    : {
        webServer: {
          command: "pnpm start --port 3100",
          url: baseURL,
          timeout: 60_000,
          reuseExistingServer: false,
        },
      }),
});
