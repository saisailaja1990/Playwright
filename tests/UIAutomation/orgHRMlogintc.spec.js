const { test, expect } = require('@playwright/test');

const credentials = [
  { username: 'Admin', password: 'admin123', valid: true },
  { username: 'Admin', password: 'wrong123', valid: false },
  { username: 'test', password: 'admin123', valid: false },
  { username: 'test@test', password: 'admin123', valid: false },
  { username: '152445', password: 'admin123', valid: false },
  //{ username: '', password: 'admin123', valid: false },
];

for (const user of credentials) {

  test(`Login Test - Username: "${user.username}" Password: "${user.password}"`, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Login' }).click();

    if (user.valid) {

      // Verify successful login
      await expect(
        page.getByRole('heading', { name: 'Dashboard', level: 6 })
      ).toBeVisible();

      console.log(`✅ Login successful with ${user.username}`);

      // Logout
      await page.locator('.oxd-userdropdown-name').click();
      await page.getByRole('menuitem', { name: 'Logout' }).click();

      // Verify returned to login page
      await expect(page).toHaveURL(/login/);

      console.log('✅ Logout successful');

    } else {

      // Verify invalid login
      await expect(page.getByText('Invalid credentials')).toBeVisible();

      console.log(`❌ Invalid login verified for ${user.username}`);
    }
  
});
}
