// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30 * 1000, // Default timeout for each test
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  reporter: 'html', // Use HTML reporter
  use: {
    browserName: 'chromium', // Default browser
    headless: false, // Run tests in headless mode
    screenshot: 'on',
    trace: 'retain-on-failure', // Retain trace files on failure
  },
};

module.exports = config;
