const { test, expect } = require('@playwright/test');

test('OrangeHRM Login - Validate Login Page', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Enter credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // 3. Validate successful login by checking for a dashboard element
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});
