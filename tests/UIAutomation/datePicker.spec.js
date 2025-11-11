import { test, expect } from '@playwright/test';

/**
 * Fully automatic date picker selector with auto-detected navigation
 * Works for readonly inputs with custom calendars
 * @param {Page} page - Playwright page object
 * @param {string} inputSelector - selector for the readonly input
 * @param {string} targetDateStr - "DD MMM YYYY", e.g., "13 Nov 2025"
 */
async function selectDateAutoDetect(page, inputSelector, targetDateStr) {
  const [dayStr, monthStr, yearStr] = targetDateStr.split(' ');
  const targetDate = new Date(`${monthStr} ${dayStr}, ${yearStr}`);

  // Open the calendar
  await page.click(inputSelector);

  // Wait for the calendar to render days
  await page.locator('div.dateInnerCell').first().waitFor();

  // Auto-detect the month/year header
  const headerLocator = page.locator('div').filter({ hasText: /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/ }).first();

  // Auto-detect next/prev buttons by relative position
  const nextBtn = headerLocator.locator('xpath=following-sibling::*').first();
  const prevBtn = headerLocator.locator('xpath=preceding-sibling::*').first();

  // Navigate to the correct month/year
  while (true) {
    const headerText = (await headerLocator.textContent()).trim();
    const [currentMonthStr, currentYearStr] = headerText.split(' ');
    const currentDate = new Date(`${currentMonthStr} 1, ${currentYearStr}`);

    if (currentDate.getFullYear() === targetDate.getFullYear() &&
        currentDate.getMonth() === targetDate.getMonth()) {
      break;
    }

    if (currentDate < targetDate) {
      await nextBtn.click();
    } else {
      await prevBtn.click();
    }
  }

  // Click the target day
  await page.locator(`div.dateInnerCell >> text=${parseInt(dayStr)}`).first().click();

  // Log the selected value
  const selectedDate = await page.inputValue(inputSelector);
  console.log('Selected date:', selectedDate);
}

test('Select any departure date automatically without specifying selectors', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/'); // Replace with your URL
     // Wait a few seconds for cookie modal (if it appears)
  const cookieButton = page.locator('button:has-text("ACCEPT")'); // or "Accept", check actual text
  if (await cookieButton.count() > 0) {
    await cookieButton.click();
    console.log('Cookie popup dismissed');
  }
  await selectDateAutoDetect(page, '#departure', '13 Nov 2025');

  const departureValue = await page.inputValue('#departure');
  expect(departureValue).toContain('13 Nov 2025');
});
