const { test, expect } = require('@playwright/test');

test('Step 2: Product Search', async ({ page }) => {
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

    // /////////////////////////////////////////////////////
    // // Step 2: Product Search
    // /////////////////////////////////////////////////////
    
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.click('a[href*="FISH"]');
await expect(page.locator('h2').filter({ hasText: /fish/i })).toBeVisible();
    console.log('✅ Navigated to Fish category');
    
    // Angelfish
    await page.click('a[href*="productId=FI-SW-01"]');
    await expect(page.locator('td', { hasText: 'EST-1' })).toBeVisible();
    await page.click('a[href*="itemId=EST-1"]');
    await expect(page.locator('td', { hasText: 'Large Angelfish' })).toBeVisible(); 
    console.log('✅ Angelfish (Large) verified');
    await page.goBack(); await page.goBack();

    await page.click('a[href*="productId=FI-SW-01"]');
    await page.click('a[href*="itemId=EST-2"]');
    await expect(page.locator('td', { hasText: 'Small Angelfish' })).toBeVisible(); 
    console.log('✅ Angelfish (Small) verified');
    await page.goBack(); await page.goBack();

    // Tiger Shark
    await page.click('a[href*="productId=FI-SW-02"]');
    await expect(page.locator('td', { hasText: 'EST-3' })).toBeVisible();
    await page.click('a[href*="itemId=EST-3"]');
    await expect(page.locator('td', { hasText: 'Toothless Tiger Shark' })).toBeVisible(); 
    console.log('✅ Tiger Shark verified');
    await page.goBack(); await page.goBack();

    // Koi
    await page.click('a[href*="productId=FI-FW-01"]');
    await page.click('a[href*="itemId=EST-4"]');
    await expect(page.locator('td', { hasText: 'Spotted Koi' })).toBeVisible(); 
    console.log('✅ Spotted Koi verified');
    await page.goBack(); await page.goBack();

    await page.click('a[href*="productId=FI-FW-01"]');
    await page.click('a[href*="itemId=EST-5"]');
    await expect(page.locator('td', { hasText: 'Spotless Koi' })).toBeVisible(); 
    console.log('✅ Spotless Koi verified');
    await page.goBack(); await page.goBack();

    // Goldfish
    await page.click('a[href*="productId=FI-FW-02"]');
    await page.click('a[href*="itemId=EST-20"]');
    await expect(page.locator('td', { hasText: 'Adult Male Goldfish' })).toBeVisible(); 
    console.log('✅ Male Goldfish verified');
    await page.goBack(); await page.goBack();

    await page.click('a[href*="productId=FI-FW-02"]');
    await page.click('a[href*="itemId=EST-21"]');
    await expect(page.locator('td', { hasText: 'Adult Female Goldfish' })).toBeVisible(); 
    console.log('✅ Female Goldfish verified');
    await page.goBack(); await page.goBack();

    // Navigate to Dogs Category
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.click('a[href*="categoryId=DOGS"]');
    await expect(page.locator('h2', { hasText: 'Dogs' })).toBeVisible();
    console.log('✅ Navigated to Dogs category');
    
    // Bulldog
    await page.click('a[href*="productId=K9-BD-01"]');
    await page.click('a[href*="itemId=EST-6"]');
    await expect(page.locator('td', { hasText: 'Male Adult Bulldog' })).toBeVisible();
    console.log('✅ Male Bulldog verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=K9-BD-01"]');
    await page.click('a[href*="itemId=EST-7"]');
    await expect(page.locator('td', { hasText: 'Female Puppy Bulldog' })).toBeVisible();
    console.log('✅ Female Bulldog verified');
    await page.goBack(); await page.goBack();
    
    // Poodle
    await page.click('a[href*="productId=K9-PO-02"]');
    await page.click('a[href*="itemId=EST-8"]');
    await expect(page.locator('td', { hasText: 'Male Puppy Poodle' })).toBeVisible();
    console.log('✅ Poodle verified');
    await page.goBack(); await page.goBack();
    
    // Dalmation
    await page.click('a[href*="productId=K9-DL-01"]');
    await page.click('a[href*="itemId=EST-9"]');
    await expect(page.locator('td', { hasText: 'Spotless Male Puppy Dalmation' })).toBeVisible();
    console.log('✅ Spotless Dalmation verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=K9-DL-01"]');
    await page.click('a[href*="itemId=EST-10"]');
    await expect(page.locator('td', { hasText: 'Spotted Adult Female Dalmation' })).toBeVisible();
    console.log('✅ Spotted Dalmation verified');
    await page.goBack(); await page.goBack();
    
    // Golden Retriever
    await page.click('a[href*="productId=K9-RT-01"]');
    await page.click('a[href*="itemId=EST-28"]');
    await expect(page.locator('td', { hasText: 'Adult Female Golden Retriever' })).toBeVisible();
    console.log('✅ Golden Retriever verified');
    await page.goBack(); await page.goBack();
    
    // Labrador Retriever
    await page.click('a[href*="productId=K9-RT-02"]');
    await page.click('a[href*="itemId=EST-22"]');
    await expect(page.locator('td', { hasText: 'Adult Male Labrador Retriever' })).toBeVisible();
    console.log('✅ Labrador Male 1 verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=K9-RT-02"]');
    await page.click('a[href*="itemId=EST-23"]');
    await expect(page.locator('td', { hasText: 'Adult Female Labrador Retriever' })).toBeVisible();
    console.log('✅ Labrador Female 1 verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=K9-RT-02"]');
    await page.click('a[href*="itemId=EST-24"]');
    await expect(page.locator('td', { hasText: 'Adult Male Labrador Retriever' })).toBeVisible();
    console.log('✅ Labrador Male 2 verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=K9-RT-02"]');
    await page.click('a[href*="itemId=EST-25"]');
    await expect(page.locator('td', { hasText: 'Adult Female Labrador Retriever' })).toBeVisible();
    console.log('✅ Labrador Female 2 verified');
    await page.goBack(); await page.goBack();
    
    // Chihuahua
    await page.click('a[href*="productId=K9-CW-01"]');
    await page.click('a[href*="itemId=EST-26"]');
    await expect(page.locator('td', { hasText: 'Adult Male Chihuahua' })).toBeVisible();
    console.log('✅ Male Chihuahua verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=K9-CW-01"]');
    await page.click('a[href*="itemId=EST-27"]');
    await expect(page.locator('td', { hasText: 'Adult Female Chihuahua' })).toBeVisible();
    console.log('✅ Female Chihuahua verified');
    await page.goBack(); await page.goBack();

    // Navigate to Cats Category
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.click('a[href*="categoryId=CATS"]');
    await expect(page.locator('h2', { hasText: 'Cats' })).toBeVisible();
    console.log('✅ Navigated to Cats category');
    
    // Manx
    await page.click('a[href*="productId=FL-DSH-01"]');
    await page.click('a[href*="itemId=EST-14"]');
    await expect(page.locator('td', { hasText: 'Tailless Manx' })).toBeVisible();
    console.log('✅ Tailless Manx verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=FL-DSH-01"]');
    await page.click('a[href*="itemId=EST-15"]');
    await expect(page.locator('td', { hasText: 'With tail Manx' })).toBeVisible();
    console.log('✅ With Tail Manx verified');
    await page.goBack(); await page.goBack();
    
    // Persian
    await page.click('a[href*="productId=FL-DLH-02"]');
    await page.click('a[href*="itemId=EST-16"]');
    await expect(page.locator('td', { hasText: 'Adult Female Persian' })).toBeVisible();
    console.log('✅ Persian Female verified');
    await page.goBack(); await page.goBack();
    
    await page.click('a[href*="productId=FL-DLH-02"]');
    await page.click('a[href*="itemId=EST-17"]');
    await expect(page.locator('td', { hasText: 'Adult Male Persian' })).toBeVisible();
    console.log('✅ Persian Male verified');
    await page.goBack(); await page.goBack();

    // Navigate to Reptiles Category
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.click('a[href*="categoryId=REPTILES"]');
    await expect(page.locator('h2', { hasText: 'Reptiles' })).toBeVisible();
    console.log('✅ Navigated to Reptiles category');

    // Rattlesnake
    await page.click('a[href*="productId=RP-SN-01"]');
    await expect(page.locator('td', { hasText: 'EST-11' })).toBeVisible();
    await page.click('a[href*="itemId=EST-11"]');
    await expect(page.locator('td', { hasText: 'Venomless Rattlesnake' })).toBeVisible(); 
    console.log('✅ Venomless Rattlesnake product detail verified');
    await page.goBack(); await page.goBack();

    await page.click('a[href*="productId=RP-SN-01"]');
    await expect(page.locator('td', { hasText: 'EST-12' })).toBeVisible();
    await page.click('a[href*="itemId=EST-12"]');
    await expect(page.locator('td', { hasText: 'Rattleless Rattlesnake' })).toBeVisible(); 
    console.log('✅ Rattleless Rattlesnake product detail verified');
    await page.goBack(); await page.goBack();

    // Iguana
    await page.click('a[href*="productId=RP-LI-02"]');
    await expect(page.locator('td', { hasText: 'EST-13' })).toBeVisible();
    await page.click('a[href*="itemId=EST-13"]');
    await expect(page.locator('td', { hasText: 'Green Adult Iguana' })).toBeVisible(); 
    console.log('✅ Iguana product detail verified');
    await page.goBack(); await page.goBack();

    // Navigate to Birds Category
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.click('a[href*="categoryId=BIRDS"]');
    await expect(page.locator('h2', { hasText: 'Birds' })).toBeVisible();
    console.log('✅ Navigated to Birds category');

    // Amazon Parrot
    await page.click('a[href*="productId=AV-CB-01"]');
    await expect(page.locator('td', { hasText: 'EST-18' })).toBeVisible();
    await page.click('a[href*="itemId=EST-18"]');
    await expect(page.locator('td', { hasText: 'Adult Male Amazon Parrot' })).toBeVisible(); 
    console.log('✅ Amazon Parrot product detail verified');
    await page.goBack(); await page.goBack();

    // Finch
    await page.click('a[href*="productId=AV-SB-02"]');
    await expect(page.locator('td', { hasText: 'EST-19' })).toBeVisible();
    await page.click('a[href*="itemId=EST-19"]');
    await expect(page.locator('td', { hasText: 'Adult Male Finch' })).toBeVisible(); 
    console.log('✅ Finch product detail verified');
    await page.goBack(); await page.goBack();
});
