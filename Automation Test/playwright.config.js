// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 180000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});