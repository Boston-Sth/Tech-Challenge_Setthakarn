const { test, expect } = require('@playwright/test');

test('Step 1: User Registration and Login', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

    /////////////////////////////////////////////////////
    // Step 1: User Registration and Login
    /////////////////////////////////////////////////////
    
    await page.click('text=Sign In');
    await page.click('text=Register Now!');

    const uniqueUsername = `user${Date.now()}`;
    const password = 'password123';

    await page.fill('input[name="username"]', uniqueUsername);
    await page.fill('input[name="password"]', password);
    await page.fill('input[name="repeatedPassword"]', password);

    await page.fill('input[name="account.firstName"]', 'John');
    await page.fill('input[name="account.lastName"]', 'Doe');
    await page.fill('input[name="account.email"]', 'john@example.com');
    await page.fill('input[name="account.phone"]', '1234567890');
    await page.fill('input[name="account.address1"]', '123 Main St');
    await page.fill('input[name="account.city"]', 'City');
    await page.fill('input[name="account.state"]', 'State');
    await page.fill('input[name="account.zip"]', '12345');
    await page.fill('input[name="account.country"]', 'Country');

    await page.selectOption('select[name="account.languagePreference"]', 'english');
    await page.selectOption('select[name="account.favouriteCategoryId"]', 'DOGS');
    await page.check('input[name="account.listOption"]');
    await page.check('input[name="account.bannerOption"]');
    await page.click('input[name="newAccount"]');

    await expect(page).toHaveURL('https://petstore.octoperf.com/actions/Catalog.action');
    console.log(`// Step 1: User Registration and Login
        `);
    console.log(`✅ Registered as ${uniqueUsername}
        `);

      
});
