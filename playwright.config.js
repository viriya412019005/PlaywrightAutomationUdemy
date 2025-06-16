// @ts-check
const { devices } = require("@playwright/test");

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    headless: false,
    screenshot: "on",
    trace: "on",
    video: "on",
  },
  projects: [
    {
      name: "Chrome (System)",
      use: {
        browserName: "chromium",
        channel: "chrome", // Pakai Google Chrome dari device
      },
    },
    // {
    //   name: "Firefox (System)",
    //   use: {
    //     browserName: "firefox", // Pakai Firefox stable
    //   },
    // },
  ],
};

module.exports = config;
