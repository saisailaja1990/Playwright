const { test, expect } = require('@playwright/test');

test('Handling auto suggetion in googlesearch', async ({ page }) => {
    await page.goto('https://www.google.com/'); 
    await page.getByRole('button', { name: 'Godkänn alla' }).click();
    await page.locator('#input').fill('iphone');

});
