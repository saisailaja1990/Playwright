const { test, expect } = require('@playwright/test');

test('OrangeHRM Login - Validate Login Page', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Enter credentials
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Validate successful login by checking for the Dashboard heading
  await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
});
