const { test, expect } = require('@playwright/test');

test('Step 4: Checkout Process (Ship to Different Address)', async ({ page }) => {
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

    /////////////////////////////////////////////////////
    // Step 4: Checkout Process (Ship to Different Address) 
    /////////////////////////////////////////////////////

    console.log(`// Step 4: Checkout Process (Ship to Different Address)
        `);

        const categories = [
            //Fish
            { categoryId: 'FISH', productId: 'FI-SW-01', itemId: 'EST-1', itemDesc: 'Large Angelfish' },
            { categoryId: 'FISH', productId: 'FI-SW-01', itemId: 'EST-2', itemDesc: 'Small Angelfish' },
            { categoryId: 'FISH', productId: 'FI-SW-02', itemId: 'EST-3', itemDesc: 'Toothless Tiger Shark' },
            { categoryId: 'FISH', productId: 'FI-FW-01', itemId: 'EST-4', itemDesc: 'Spotted Koi' },
            { categoryId: 'FISH', productId: 'FI-FW-01', itemId: 'EST-5', itemDesc: 'Spotless Koi' },
            { categoryId: 'FISH', productId: 'FI-FW-02', itemId: 'EST-20', itemDesc: 'Adult Male Goldfish' },
            { categoryId: 'FISH', productId: 'FI-FW-02', itemId: 'EST-21', itemDesc: 'Adult Female Goldfish' },
          
            // Dogs
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
          
            // Cats
            { categoryId: 'CATS', productId: 'FL-DSH-01', itemId: 'EST-14', itemDesc: 'Tailless Manx' },
            { categoryId: 'CATS', productId: 'FL-DSH-01', itemId: 'EST-15', itemDesc: 'With tail Manx' },
            { categoryId: 'CATS', productId: 'FL-DLH-02', itemId: 'EST-16', itemDesc: 'Adult Female Persian' },
            { categoryId: 'CATS', productId: 'FL-DLH-02', itemId: 'EST-17', itemDesc: 'Adult Male Persian' },
          
            // Reptiles
            { categoryId: 'REPTILES', productId: 'RP-SN-01', itemId: 'EST-11', itemDesc: 'Venomless Rattlesnake' },
            { categoryId: 'REPTILES', productId: 'RP-SN-01', itemId: 'EST-12', itemDesc: 'Rattleless Rattlesnake' },
            { categoryId: 'REPTILES', productId: 'RP-LI-02', itemId: 'EST-13', itemDesc: 'Green Adult Iguana' },
          
            // Birds
            { categoryId: 'BIRDS', productId: 'AV-CB-01', itemId: 'EST-18', itemDesc: 'Adult Male Amazon Parrot' },
            { categoryId: 'BIRDS', productId: 'AV-SB-02', itemId: 'EST-19', itemDesc: 'Adult Male Finch' }
          ];

          for (const { categoryId, productId, itemId, itemDesc } of categories) {
            await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
            await page.click(`a[href*="categoryId=${categoryId}"]`);
            await page.click(`a[href*="productId=${productId}"]`);
          
            // Add to cart
            const row = page.locator(`tr:has(td:has-text("${itemId}"))`);
            await expect(row).toBeVisible();
            await row.locator(`a[href*="addItemToCart=&workingItemId=${itemId}"]`).click({ timeout: 5000 });
            await expect(page.locator('td', { hasText: itemId })).toBeVisible();
            console.log(`:🐶 Added ${itemId} (${itemDesc}) to cart`);
          
            // Proceed to Checkout
            await page.click('a.Button[href*="newOrderForm"]');
            await page.check('input[name="shippingAddressRequired"]');
            await page.click('input[name="newOrder"]'); // Continue to Shipping
          
            // Fill in shipping address with random values
            await page.fill('input[name="order.shipAddress1"]', `Random Street ${Math.floor(Math.random() * 1000)}`);
            await page.fill('input[name="order.shipCity"]', 'TestCity');
            await page.fill('input[name="order.shipState"]', 'TS');
            await page.fill('input[name="order.shipZip"]', '12345');
            await page.fill('input[name="order.shipCountry"]', 'Testland');
            await page.click('input[name="newOrder"]'); // Continue to Confirm
          
            // Extract Billing and Shipping address blocks as text
            const billingBlock = await page.locator('text=Billing Address').locator('xpath=..').evaluate((el) => {
              const rows = [];
              let sibling = el.nextElementSibling;
              while (sibling && !sibling.innerText.includes('Shipping Address')) {
                rows.push(sibling.innerText.trim());
                sibling = sibling.nextElementSibling;
              }
              return rows.join('\n');
            });
          
            const shippingBlock = await page.locator('text=Shipping Address').locator('xpath=..').evaluate((el) => {
              const rows = [];
              let sibling = el.nextElementSibling;
              while (sibling) {
                rows.push(sibling.innerText.trim());
                sibling = sibling.nextElementSibling;
              }
              return rows.join('\n');
            });
          
            // Assert that shipping is different from billing
            expect(shippingBlock).not.toEqual(billingBlock);
            console.log('✅ Verified Shipping ≠ Billing address');
          
            await page.click('a.Button[href*="confirmed=true"]'); // Confirm Order
            await expect(page.locator('li', { hasText: 'Thank you, your order has been submitted.' })).toBeVisible();
            console.log(`📄 Checkout complete for ${itemId}`);
          
            // Add again from detail page
            await page.goto(`https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=${itemId}`);
            await page.waitForSelector(`a.Button[href*="addItemToCart=&workingItemId=${itemId}"]`, { timeout: 5000 });
            await page.click(`a.Button[href*="addItemToCart=&workingItemId=${itemId}"]`);
            await expect(page.locator('td', { hasText: itemId })).toBeVisible();
            console.log(`🐶 Re-added ${itemId} from detail page`);
          
            // Repeat checkout steps again
            await page.click('a.Button[href*="newOrderForm"]');
            await page.check('input[name="shippingAddressRequired"]');
            await page.click('input[name="newOrder"]'); // Continue to Shipping
          
            await page.fill('input[name="order.shipAddress1"]', `Another Rd ${Math.floor(Math.random() * 1000)}`);
            await page.fill('input[name="order.shipCity"]', 'SecondCity');
            await page.fill('input[name="order.shipState"]', 'SC');
            await page.fill('input[name="order.shipZip"]', '67890');
            await page.fill('input[name="order.shipCountry"]', 'Mockland');
            await page.click('input[name="newOrder"]');
          
            const billingAddr2 = await page.locator('text=Billing Address').locator('xpath=..').evaluate((el) => {
              const rows = [];
              let sibling = el.nextElementSibling;
              while (sibling && !sibling.innerText.includes('Shipping Address')) {
                rows.push(sibling.innerText.trim());
                sibling = sibling.nextElementSibling;
              }
              return rows.join('\n');
            });
          
            const shippingAddr2 = await page.locator('text=Shipping Address').locator('xpath=..').evaluate((el) => {
              const rows = [];
              let sibling = el.nextElementSibling;
              while (sibling) {
                rows.push(sibling.innerText.trim());
                sibling = sibling.nextElementSibling;
              }
              return rows.join('\n');
            });
          
            expect(shippingAddr2).not.toEqual(billingAddr2);
            console.log('✅ Verified Shipping ≠ Billing address');
          
            await page.click('a.Button[href*="confirmed=true"]'); // Confirm Order
            await expect(page.locator('li', { hasText: 'Thank you, your order has been submitted.' })).toBeVisible();
            console.log(`✅ Finished test for ${itemDesc}\n`);
          }
          
});
