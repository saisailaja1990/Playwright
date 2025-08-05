import { test, expect } from '@playwright/test';

let baseURL = "https://www.dummyticket.com/dummy-ticket-for-visa-application/"
test('Radiobuttons', async ({ page }) => {
  await page.goto(baseURL);
 /* const Radiobutton1 = page.locator('input[id="product_549"]');
  await Radiobutton1.check();
  await expect(Radiobutton1).toBeChecked(); 
  // Locate the label by class
const label = page.locator('input[id="product_549"]');

// Extract visible text
const labelText = await label.textContent();

console.log('Label text:', labelText?.trim());
  // Locate the element
const messageLocator = page.locator('.woocommerce-message');

// Get DOM text (inside the div)
const domText = await messageLocator.textContent();

// Get ::before pseudo-element content
const beforeText = await page.evaluate(() => {
  const el = document.querySelector('.woocommerce-message');
  return window.getComputedStyle(el, '::before').getPropertyValue('content').replace(/^"|"$/g, '');
});

// Get ::after pseudo-element content
const afterText = await page.evaluate(() => {
  const el = document.querySelector('.woocommerce-message');
  return window.getComputedStyle(el, '::after').getPropertyValue('content').replace(/^"|"$/g, '');
});

// Combine all into a final message
const fullText = `${beforeText} ${domText?.trim() || ''} ${afterText}`.trim();

console.log('Captured message:', fullText)*/

console.log('test passed');


const radiobutton = ['input[id="product_549"]', 'input[id="product_550"]', 'input[id="product_551"]','input[id="product_3186"]','input[id="product_7441"]',]
  for(const button of radiobutton) {
    const radioButton = page.locator(button);
    await radioButton.check();
    await expect(radioButton).toBeChecked();
  }
  
  
console.log('All radiobuttons checked');
});