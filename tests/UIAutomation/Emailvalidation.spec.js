  import { test, expect } from '@playwright/test';
  const EmailGenerator = require('../../tests/JavascriptBasics/genRandom-email'); 
  test('Validate the forgot password functionality', async ({ page }) => {
    let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    await page.goto(baseURL);
  
    await page.getByText('Forgot your password?').click();
   // Calling EmailGenerator function return valur from tests\JavascriptBasics\genRandom-email.js
    
    const generator = new EmailGenerator();
    const email = generator.generateRandomEmailAddress();
    console.log(email);


    await page.getByPlaceholder('Username').fill(email)

    await page.getByRole('button',{name:'Reset Password'}).click();
    //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))

    await expect(page.locator('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]')).toHaveText('Reset Password link sent successfully')
})