// Hooks
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log("Login to OrangeHRM application");

  const baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  await page.goto(baseURL);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  expect(page.url().includes('dashboard')).toBeTruthy();

  console.log('Login successful');
});

test.afterEach(async ({ page }) => {
  console.log("Logout from OrangeHRM application");

  await page.locator('.oxd-userdropdown-img').click();
  await page.locator('a[href="/web/index.php/auth/logout"]').click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  expect(page.url().includes('login')).toBeTruthy();

  console.log('Logout successful');
});

// Test senerios for Assignment - Aug 6th Hooks
test('1.Validate dashboard contains dashboard text in URL', async ({ page }) => {
  // Since login is already done in beforeEach, just validate
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
    console.log('User is on Dashboard page & validation successful');
});
test('2.Validate Admin page contains Admin text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
  await expect(page).toHaveURL(/admin/);
    const currentUrl = page.url();
  expect(currentUrl.includes('admin')).toBeTruthy()
    console.log('User is in Admin page & validation successful');
    // Step 2: Loop to create 10 users
  for (let i = 1; i <= 10; i++) {
    // Navigate to Admin > Add User
    await page.click('a:has-text("Admin")');
    await page.click('button:has-text("Add")');

    // Fill form
    // Step 2: Wait for and click the "ESS" option
    await page.click("div.oxd-select-text-input");
    await page.click("div[role='option']:has-text('ESS')");
    //await page.locator('div[role="combobox"]').nth(0).click(); // User Role
    //await page.locator('div[role="option"]:has-text("ESS")').click();

    await page.fill('input[placeholder="Type for hints..."]', 'Rahul  Das');
    await page.waitForTimeout(1000);
    await page.locator('div[role="option"]').first().click();

    const username = `autouser${i}`;
    const password = 'Pass@1234';

    await page.fill('input[name="username"]', username);
    await page.locator('div[role="combobox"]').nth(1).click(); // Status
    await page.locator('div[role="option"]:has-text("Enabled")').click();

    await page.fill('input[name="password"]', password);
    await page.fill('input[name="confirmPassword"]', password);

    await page.click('button:has-text("Save")');
    await page.waitForTimeout(2000);

    // ✅ Verification: search for created user
    await page.fill('input[placeholder="Username"]', username);
    await page.click('button:has-text("Search")');
    await page.waitForTimeout(2000);

    // Expect the username to appear in the results table
    const result = page.locator(`//div[text()="${username}"]`);
    await expect(result).toBeVisible();

    // Clear search before next iteration
    await page.click('button:has-text("Reset")');
    await page.waitForTimeout(1000);
  }
  console.log('10 users created successfully');
    
});
test('3.Validate PIM page contains PIM text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
  await expect(page).toHaveURL(/pim/);
    const currentUrl = page.url();
  expect(currentUrl.includes('pim')).toBeTruthy()
    console.log('User is in PIM page & validation successful');
});
test('4.Validate Leave page contains Leave text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/leave/viewLeaveModule"]').click();
  await expect(page).toHaveURL(/leave/);
    const currentUrl = page.url();
  expect(currentUrl.includes('leave')).toBeTruthy()
    console.log('User is in Leave page & validation successful');
});
test('5.Validate Time page contains Time text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/time/viewTimeModule"]').click();
  await expect(page).toHaveURL(/time/);
    const currentUrl = page.url();
  expect(currentUrl.includes('time')).toBeTruthy()
    console.log('User is in Time page & validation successful');
});
test('6.Validate Recruitment page contains Recruitment text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
  await expect(page).toHaveURL(/recruitment/);
    const currentUrl = page.url();
  expect(currentUrl.includes('recruitment')).toBeTruthy()
    console.log('User is in Recruitment page & validation successful');
});
test('7.Validate My Info page contains My Info text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/pim/viewMyDetails"]').click();
  await expect(page).toHaveURL(/pim/);
    const currentUrl = page.url();
  expect(currentUrl.includes('pim')).toBeTruthy()
    console.log('User is in My Info page & validation successful');
});
test('8.Validate Performance page contains Performance text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/performance/viewPerformanceModule"]').click();
  await expect(page).toHaveURL(/performance/);
    const currentUrl = page.url();
  expect(currentUrl.includes('performance')).toBeTruthy()
    console.log('User is in Performance page & validation successful');
});
test('9.Validate Directory page contains Directory text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/directory/viewDirectory"]').click();
  await expect(page).toHaveURL(/directory/);
    const currentUrl = page.url();
  expect(currentUrl.includes('directory')).toBeTruthy()
    console.log('User is in Directory page & validation successful');
});
test('10.Validate Maintenance page contains Maintenance text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/maintenance/viewMaintenanceModule"]').click();
  await expect(page).toHaveURL(/maintenance/);
    const currentUrl = page.url();
  expect(currentUrl.includes('maintenance')).toBeTruthy()

    console.log('User is in Maintenance page & validation successful');
    await page.locator('button[type="button"]').click();
});
    test('11.Validate Buzz page contains Buzz text in URL', async ({ page }) => {
        await page.locator('a[href="/web/index.php/buzz/viewBuzz"]').click();
        await expect(page).toHaveURL(/buzz/);
        const currentUrl = page.url();
        expect(currentUrl.includes('buzz')).toBeTruthy()
        console.log('User is in Buzz page & validation successful');
    });
test('12.validate claim page contains claim text in URL', async ({ page }) => {
  await page.locator('a[href="/web/index.php/claim/viewClaimModule"]').click();
  await expect(page).toHaveURL(/claim/);
  const currentUrl = page.url();
  expect(currentUrl.includes('claim')).toBeTruthy()
  console.log('User is in Claim page & validation successful');
})