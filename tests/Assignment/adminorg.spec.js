import { test, expect } from '@playwright/test';

test('Admin Organization', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*dashboard\/index/);
  console.log('✅ Login successful');

  for (let i = 1; i <= 8; i++) {
    // Step 2: Navigate to Admin > Add User
    await page.click('a:has-text("Admin")');
    await expect(page.locator('h6:has-text("Admin")')).toBeVisible();

    await page.click('button:has-text("Add")');

    // Step 3: Fill User Details
    // Select User Role (ESS)
    await page.locator("div.oxd-select-text-input").first().click();
    await page.locator('div[role="option"]:has-text("ESS")').click();

    // Employee Name (dynamic autocomplete)
    const input = page.locator('input[placeholder="Type for hints..."]');
    // Fill with a valid employee name (e.g., "Paul Collings")
await input.fill('Paul Collings');

// Wait for suggestions and select the first one
const suggestions = page.locator('div[role="option"]');
await expect(suggestions.first()).toBeVisible();
await suggestions.first().click();
    /*await input.fill('mahmoud  kotb'); // partial query to trigger suggestions

    // Wait for all suggestions to appear
    const suggestions = page.locator('div[role="option"]');
    await expect(suggestions.first()).toBeVisible();*/

    // Pick a random suggestion from the list
    /*const count = await suggestions.count();
    const randomIndex = Math.floor(Math.random() * count);
    await suggestions.nth(randomIndex).click();*/

    // Select Status (Enabled)
    await page.locator('div.oxd-select-text-input').nth(1).click();
    await page.locator('div[role="option"]:has-text("Enabled")').click();

    // Username (unique per loop)
    const username = `autouser${i}`;
    console.log(`🆕 Creating user: ${username}`);
    await page.locator('input.oxd-input[autocomplete="off"]').nth(0).fill(username);

    // Password + Confirm Password
    const password = `Pass@1234${i}`;
    await page.locator('input.oxd-input[autocomplete="off"]').nth(1).fill(password);
    await page.locator('input.oxd-input[autocomplete="off"]').nth(2).fill(password);

    // Step 4: Save user
    await page.locator('button[type="submit"].oxd-button--secondary:has-text("Save")').click();

    // Step 5: Verify success message dynamically
    //await expect(page.locator('div[role="alert"]')).toContainText('Success');

   
  }
});
//