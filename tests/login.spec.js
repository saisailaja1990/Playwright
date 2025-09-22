const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { getTestData } = require('../utils/excelUtils');


const loginData = getTestData('Login'); // Adjust sheet name as needed

loginData.forEach((data, index) => {
  test(`OrangeHRM Login - Validate Login for user: ${data.Username} [${index}]`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(data.Username, data.Password);

    if (data.ExpectedResult === 'Success') {
      await loginPage.assertLoginSuccess();
    } else {
      await loginPage.assertLoginFailure();
    }
  });
  });

