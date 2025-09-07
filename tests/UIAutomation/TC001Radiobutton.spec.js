import { test, expect } from '@playwright/test';

let baseURL = "https://testautomationpractice.blogspot.com/"
test('Checkboxes', async ({ page }) => {

  await page.goto(baseURL);
   // Locate the cookie "Got it" button
  const cookieButton = page.locator('#cookieChoiceDismiss');

  // Check if the button is visible and click it
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
    console.log('Cookie banner dismissed!');
  } else {
    console.log('Cookie banner not visible.');
  }

const checkbox = page.locator('input[id="sunday"]');
await checkbox.waitFor({ state: 'visible' }); // Add this line
//await expect(checkbox).toBeVisible();
await checkbox.check(); // Confirm it's visible
await expect(checkbox).toBeChecked();

  // Uncheck the checkbox

  await checkbox.uncheck();

  await expect(checkbox).not.toBeChecked();

  const weekDays = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday', '#sunday'];
 
  for(const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

    // Uncheck all checkboxes   
  for(const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    }
    //Radio Button
    const radioButtonMale = page.locator('input[id="male"]');
    const radioButtonFemale = page.locator('input[id="female"]');
    await radioButtonMale.check();
    await expect(radioButtonMale).toBeChecked();
    await expect(radioButtonFemale).not.toBeChecked();  
    await radioButtonFemale.check();
    await expect(radioButtonFemale).toBeChecked();
    await expect(radioButtonMale).not.toBeChecked();
    
});
