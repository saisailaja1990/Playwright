const { test, expect } = require('@playwright/test');

test('Create 10 users in OrangeHRM', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  expect(page.url().includes('dashboard')).toBeTruthy();

  console.log('Login successful');

  // Step 2: Loop to create 10 users
  for (let i = 1; i <= 10; i++) {
    // Navigate to Admin > Add User
    await page.click('a:has-text("Admin")');
    await page.click('button:has-text("Add")');

    // Step 3: Fill User Details
    await page.click("div.oxd-select-text-input");
    await page.click("div[role='option']:has-text('ESS')");

    const input = page.locator('input[placeholder="Type for hints..."]');
  await input.click();
  await input.fill('kotb');

  // Wait for dropdown suggestions to appear
  const options = page.locator('.oxd-autocomplete-option');
  await options.first().waitFor({ state: 'visible', timeout: 5000 });
    
  // 4. Click the first suggestion (or find a specific one)
  await page.waitForTimeout(2000); // Wait for suggestions to load
    await page.keyboard.press('ArrowDown'); // Navigate to the first suggestion
    await page.keyboard.press('Enter'); // Select the suggestion

    // Click the second dropdown
await page.locator('div.oxd-select-text-input').nth(1).click();

// Wait for the dropdown options to appear (optional but recommended)
await page.locator('div[role="listbox"]').waitFor(); 

// Click the option "Enabled"
await page.locator('div[role="option"]', { hasText: 'Enabled' }).click();


    const username = `autouser${i}`;
    console.log(`Creating user: ${username}`);
await page.locator('input.oxd-input[autocomplete="off"]').nth(0).fill(username);
    const password = 'Pass@1234';
    await page.locator('input.oxd-input[autocomplete="off"]').nth(1).fill(password);
    //await page.fill('input[name="password"]', password);
    await page.locator('input.oxd-input[autocomplete="off"]').nth(2).fill(password);
    //await page.fill('input[name="confirmPassword"]', password);

    // Step 4: Save user
     await page.locator('button[type="submit"].oxd-button--secondary', { hasText: 'Save' }).click();
//    await page.click('button:has-text("Save")')

 // Step 6 (optional): Verify user exists in User List
    await page.fill('input[placeholder="Type for hints..."]', username);
    await page.keyboard.press('Enter');
    const row = page.locator('div.oxd-table-row').first();
    await expect(row).toContainText(username);
    

  }
});
