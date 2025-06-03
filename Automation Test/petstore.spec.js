const { test, expect } = require('@playwright/test');

test('Petstore homepage loads and displays categories', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // Example checks
  await expect(page).toHaveTitle(/JPetStore/);
  await expect(page.locator('a[href*="FISH"]').first()).toBeVisible();
  await expect(page.locator('a[href*="DOGS"]').first()).toBeVisible();
});