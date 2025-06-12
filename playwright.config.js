// @ts-check
const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  timeout: 30 * 1000, // Default timeout for each test
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  reporter: "html", // Use HTML reporter
  use: {
    browserName: "chromium", // Default browser
    headless: true, // Run tests in headless mode
    screenshot: "on",
    trace: "on", // Retain trace files on failure
    video: "on", // Record video of each test
  },
};

module.exports = config;
