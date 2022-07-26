import { devices } from "@playwright/test";
import { devices as replayDevices } from "@replayio/playwright";

// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  projects: [
    {
      name: "replay-firefox",
      use: { ...replayDevices["Replay Firefox"] as any },
    },
    // {
    //   name: "replay-chromium",
    //   use: { ...replayDevices["Replay Chromium"] as any },
    // },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chromium"] },
    // },
  ],
};

module.exports = config;