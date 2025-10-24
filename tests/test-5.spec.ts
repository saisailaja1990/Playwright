import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');


  await page.getByRole('link', { name: 'Leave' }).click();
  await page.locator('.oxd-icon.bi-calendar').first().click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('15').click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  await page.getByText('31').click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Scheduled' }).click();
  await page.getByText('Scheduled').click();
  await page.getByText('Scheduled').click();
  await page.getByText('Pending Approval', { exact: true }).click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByText('Rejected').click();
  await page.locator('span').filter({ hasText: 'Rejected' }).locator('i').click();
  await page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
  await page.getByRole('option', { name: 'CAN - Matternity' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('manda');
  await page.getByText('manda akhil user').click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByText('Quality Assurance').click();
  await page.getByRole('cell', { name: '' }).locator('label').click();
  await page.getByRole('table').getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('table').getByRole('button', { name: 'Approve' }).click();
});