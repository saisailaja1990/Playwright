/*const { test, expect } = require('@playwright/test');

test('OrangeHRM Login - Validate Login Page', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Enter credentials
  const invalidEmails = [
	"test",
	"152445",
	"test@test",
	"#@%*&$$@#.com",
	"email@111.222.333",
	".email@example.com",
	"______@example.com",
  "Admin",
];

for (const email of invalidEmails)	{
  await page.getByRole('textbox', { name: 'Username' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Validate successful login by checking for the Dashboard heading
  await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
}
});*/

const { test, expect } = require('@playwright/test');

test('OrangeHRM Login - Try Until Successful Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const usernamesToTry = [
    "test",
    "152445",
    "test@test",
    "#@%*&$$@#.com",
    "email@111.222.333",
    ".email@example.com",
    "______@example.com",
    "Admin"  // <- the only valid one
  ];

  for (const username of usernamesToTry) {

    console.log(`Trying username: ${username}`);

    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait briefly for possible navigation
    await page.waitForTimeout(1000);

    // Check if login succeeded
    const dashboardVisible = await page
      .getByRole('heading', { name: 'Dashboard', level: 6 })
      .isVisible()
      .catch(() => false);

    if (dashboardVisible) {
      console.log(`Login successful with username: ${username}`);
      expect(dashboardVisible).toBeTruthy();
      return; // Exit the loop & test
    }

    console.log(`Login failed with username: ${username}`);
  }

  // If loop finishes with no success
  throw new Error('Login did not succeed with any username.');
});

