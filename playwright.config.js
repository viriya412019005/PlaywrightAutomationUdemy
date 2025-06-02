// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 40 * 1000, // Default timeout for each test
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  reporter: 'html', // Use HTML reporter
  use: {
    browserName: 'chromium', // Default browser
    headless: true, // Run tests in headless mode
    trace: 'on-first-retry',
  },
};

module.exports = config;
