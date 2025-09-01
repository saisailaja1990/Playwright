const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
//const fetch = require('node-fetch'); // for simulating IoT API calls

const DEVICE_URL = "http://192.168.1.50";

test('IoT dashboard end-to-end workflow', async ({ page, context, tmpDir }) => {

  // ---------------- Step 1: Configure Device ----------------
  await page.goto(`${DEVICE_URL}/config`);

  await page.fill('#temp-threshold', '30');
  await page.click('button#save');

  await expect(page.locator('text=Configuration saved successfully')).toBeVisible();

  // ---------------- Step 2: Simulate Sensor Event ----------------
  // Assumes IoT device has a test API endpoint
  await fetch(`${DEVICE_URL}/api/simulate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ temperature: 35 })
  });

  // ---------------- Step 3: Verify Dashboard Update ----------------
  await page.goto(`${DEVICE_URL}/dashboard`);

  const getTemp = async () => {
    const value = await page.innerText('#temperature-value');
    return parseFloat(value);
  };

  const tempBefore = await getTemp();
  console.log(`Initial temp: ${tempBefore}`);

  let tempAfter = tempBefore;
  for (let i = 0; i < 10; i++) {
    await page.waitForTimeout(2000);
    tempAfter = await getTemp();
    if (tempAfter !== tempBefore) break;
  }

  expect(tempAfter).toBeGreaterThanOrEqual(35);

  // Check threshold alert
  await expect(page.locator('text=Temperature threshold exceeded!')).toBeVisible();

  // ---------------- Step 4: Generate and Verify Report ----------------
  await page.goto(`${DEVICE_URL}/reports`);

  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('button#generate-report')
  ]);

  const filePath = path.join(tmpDir, await download.suggestedFilename());
  await download.saveAs(filePath);

  // Validate downloaded report content
  const reportContent = fs.readFileSync(filePath, 'utf-8');
  expect(reportContent).toContain('35');
});
