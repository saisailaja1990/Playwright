import { test, expect } from '@playwright/test';

test('Radiobuttons with alert text capture', async ({ page }) => {
  const baseURL = "https://www.dummyticket.com/dummy-ticket-for-visa-application/";
  await page.goto(baseURL);

  const radiobuttons = [
    'input[id="product_549"]',
    'input[id="product_550"]',
    'input[id="product_551"]',
    'input[id="product_3186"]',
    'input[id="product_7441"]',
  ];

  for (const selector of radiobuttons) {
    const radioButton = page.locator(selector);

    // Check the radio button
    await radioButton.check();
    await expect(radioButton).toBeChecked();

    // Wait for the alert message to appear
    const messageLocator = page.locator('.woocommerce-message');
    await expect(messageLocator).toBeVisible();

    // Get the ::before and ::after pseudo-element content
    const [beforeText, domText, afterText] = await Promise.all([
      page.evaluate(() => {
        const el = document.querySelector('.woocommerce-message');
        return window.getComputedStyle(el, '::before').getPropertyValue('content').replace(/^"|"$/g, '');
      }),
      messageLocator.textContent(),
      page.evaluate(() => {
        const el = document.querySelector('.woocommerce-message');
        return window.getComputedStyle(el, '::after').getPropertyValue('content').replace(/^"|"$/g, '');
      }),
    ]);

    // Combine all into a full message
    const fullMessage = `${beforeText} ${domText?.trim() || ''} ${afterText}`.trim();
    console.log(`| Message: "${fullMessage}"`);
  }

  console.log('All radiobuttons checked and messages captured.');
});
