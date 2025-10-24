import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('');
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Ramraju');
  await page.getByText('-- Select --').click();
  await page.locator('form i').nth(1).click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();

  // ...existing code...
await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Ramraju');

// Wait for the suggestion list to appear
await expect(page.getByRole('listbox')).toBeVisible();

// Select the first suggestion (or a specific one)
await page.getByRole('option', { name: /Ramraju/i }).click();
// ...existing code...


//  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
 // await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Ramraja');
  await page.locator('#app div').filter({ hasText: 'Add UserUser RoleESSEmployee' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('');
  await page.getByRole('heading', { name: 'Add User' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('kob');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('option', { name: 'Kob Kobbery Kobbers' }).click();
  await page.locator('form i').nth(1).click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
  await page.getByRole('textbox').nth(2).fill('Ramraju');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Ramraju@143');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Ramraju@143');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Ramraju');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Kob');
  await page.getByText('Kob Kobbery Kobbers').click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('cell', { name: '' }).locator('i').click();
  await page.getByRole('button', { name: ' Delete Selected' }).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Ramraju');
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Kob');
  await page.getByRole('listbox').click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();
  
  
});