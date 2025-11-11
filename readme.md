How to handle Alerts in Playwright js
// Listen for alert dialogs
  page.on("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); // Accepts the alert
  });

  ** Use Recordnew feature to generate code in js us the following command
  
npx playwright codegen --target javascript 
in  reporter: [
    ['list'],
     ['html', { outputFolder: 'playwright-report', open: 'never' }],
   // ['allure-playwright', { outputFolder: 'allure-results' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],]


    cd path/to/your/playwright-project
git status
git add tests/login.spec.js
git commit -m "Added login flow test using Playwright"
git push origin main

