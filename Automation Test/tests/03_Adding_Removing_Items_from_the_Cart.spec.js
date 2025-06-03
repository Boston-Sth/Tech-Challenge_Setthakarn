const { test, expect } = require('@playwright/test');

test('Step 3: Adding/Removing Items from the Cart', async ({ page }) => {
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
  console.log(`✅ Registered as ${uniqueUsername}`);

  /////////////////////////////////////////////////////
  // Step 3: Adding/Removing Items from the Cart
  /////////////////////////////////////////////////////

  const categories = [
    { categoryId: 'FISH', productId: 'FI-SW-01', itemId: 'EST-1', itemDesc: 'Large Angelfish' },
    { categoryId: 'FISH', productId: 'FI-SW-01', itemId: 'EST-2', itemDesc: 'Small Angelfish' },
    { categoryId: 'FISH', productId: 'FI-SW-02', itemId: 'EST-3', itemDesc: 'Toothless Tiger Shark' },
    { categoryId: 'FISH', productId: 'FI-FW-01', itemId: 'EST-4', itemDesc: 'Spotted Koi' },
    { categoryId: 'FISH', productId: 'FI-FW-01', itemId: 'EST-5', itemDesc: 'Spotless Koi' },
    { categoryId: 'FISH', productId: 'FI-FW-02', itemId: 'EST-20', itemDesc: 'Adult Male Goldfish' },
    { categoryId: 'FISH', productId: 'FI-FW-02', itemId: 'EST-21', itemDesc: 'Adult Female Goldfish' },
    { categoryId: 'DOGS', productId: 'K9-BD-01', itemId: 'EST-6', itemDesc: 'Male Adult Bulldog' },
    { categoryId: 'DOGS', productId: 'K9-BD-01', itemId: 'EST-7', itemDesc: 'Female Puppy Bulldog' },
    { categoryId: 'DOGS', productId: 'K9-PO-02', itemId: 'EST-8', itemDesc: 'Male Puppy Poodle' },
    { categoryId: 'DOGS', productId: 'K9-DL-01', itemId: 'EST-9', itemDesc: 'Spotless Male Puppy Dalmation' },
    { categoryId: 'DOGS', productId: 'K9-DL-01', itemId: 'EST-10', itemDesc: 'Spotted Adult Female Dalmation' },
    { categoryId: 'DOGS', productId: 'K9-RT-01', itemId: 'EST-28', itemDesc: 'Adult Female Golden Retriever' },
    { categoryId: 'DOGS', productId: 'K9-RT-02', itemId: 'EST-22', itemDesc: 'Adult Male Labrador Retriever' },
    { categoryId: 'DOGS', productId: 'K9-RT-02', itemId: 'EST-23', itemDesc: 'Adult Female Labrador Retriever' },
    { categoryId: 'DOGS', productId: 'K9-RT-02', itemId: 'EST-24', itemDesc: 'Adult Male Labrador Retriever' },
    { categoryId: 'DOGS', productId: 'K9-RT-02', itemId: 'EST-25', itemDesc: 'Adult Female Labrador Retriever' },
    { categoryId: 'DOGS', productId: 'K9-CW-01', itemId: 'EST-26', itemDesc: 'Adult Male Chihuahua' },
    { categoryId: 'DOGS', productId: 'K9-CW-01', itemId: 'EST-27', itemDesc: 'Adult Female Chihuahua' },
    { categoryId: 'CATS', productId: 'FL-DSH-01', itemId: 'EST-14', itemDesc: 'Tailless Manx' },
    { categoryId: 'CATS', productId: 'FL-DSH-01', itemId: 'EST-15', itemDesc: 'With tail Manx' },
    { categoryId: 'CATS', productId: 'FL-DLH-02', itemId: 'EST-16', itemDesc: 'Adult Female Persian' },
    { categoryId: 'CATS', productId: 'FL-DLH-02', itemId: 'EST-17', itemDesc: 'Adult Male Persian' },
    { categoryId: 'REPTILES', productId: 'RP-SN-01', itemId: 'EST-11', itemDesc: 'Venomless Rattlesnake' },
    { categoryId: 'REPTILES', productId: 'RP-SN-01', itemId: 'EST-12', itemDesc: 'Rattleless Rattlesnake' },
    { categoryId: 'REPTILES', productId: 'RP-LI-02', itemId: 'EST-13', itemDesc: 'Green Adult Iguana' },
    { categoryId: 'BIRDS', productId: 'AV-CB-01', itemId: 'EST-18', itemDesc: 'Adult Male Amazon Parrot' },
    { categoryId: 'BIRDS', productId: 'AV-SB-02', itemId: 'EST-19', itemDesc: 'Adult Male Finch' }
  ];

  for (const { categoryId, productId, itemId, itemDesc } of categories) {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.click(`a[href*="categoryId=${categoryId}"]`);
    await page.click(`a[href*="productId=${productId}"]`);

    const row = page.locator(`tr:has(td:has-text("${itemId}"))`);
    await expect(row).toBeVisible();

    try {
      await row.locator(`a[href*="addItemToCart=&workingItemId=${itemId}"]`).click({ timeout: 5000 });
    } catch {
      await page.goto(`https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=${itemId}`);
      await page.waitForSelector(`a.Button[href*="addItemToCart=&workingItemId=${itemId}"]`, { timeout: 5000 });
      await page.click(`a.Button[href*="addItemToCart=&workingItemId=${itemId}"]`);
    }

    await expect(page.locator('td', { hasText: itemId })).toBeVisible();
    console.log(`🛒 Added ${itemId} (${itemDesc}) to cart`);

    const cartRow = page.locator(`tr:has(td:has-text("${itemId}"))`);
    await expect(cartRow).toBeVisible();
    await cartRow.locator('a.Button', { hasText: 'Remove' }).click();
    await expect(page.locator('td', { hasText: 'Your cart is empty.' })).toBeVisible();
    console.log(`🗑️ Removed ${itemId} from cart`);

    await page.goto(`https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=${itemId}`);
    await page.waitForSelector(`a.Button[href*="addItemToCart=&workingItemId=${itemId}"]`, { timeout: 5000 });
    await page.click(`a.Button[href*="addItemToCart=&workingItemId=${itemId}"]`);
    await expect(page.locator('td', { hasText: itemId })).toBeVisible();
    console.log(`🛒 Re-added ${itemId} from detail page`);

    const removeButton = page.locator(`a.Button[href*="removeItemFromCart=&workingItemId=${itemId}"]`);
    await expect(removeButton).toBeVisible();
    await removeButton.click();
    console.log(`🗑️ Removed ${itemId} from cart`);
    console.log(`✅ Finished test for ${itemDesc}\n`);
  }
});
