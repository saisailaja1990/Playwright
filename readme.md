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

await Promise.all([
	this.page.waitForNaviagation({waitUntil:"networkidle"})
])// script used to load a page full

Here's what a complete, production-ready Playwright workflow actually looks like 👇

📝 Write clean Playwright + TypeScript test scripts
🏗️ Design a scalable Page Object Model (POM)
⚙️ Set up multiple environment configurations (QA / UAT / Production)
📊 Configure reporting, traces, screenshots & retry logic
🚀 Enable parallel execution for faster feedback loops
🔄 Integrate seamlessly with GitHub Actions / Jenkins
🧪 Trigger automated test runs inside QA pipelines
📈 Analyse reports and investigate failures systematically
✅ Validate every deployment before it moves forward
🔥 Run production smoke tests post-release
🎯 Release with full confidence - every single time

Yaml file content to run web browser UI Automation 

name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
permissions:
  contents: write
  issues: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24.x'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests (with reporters from config)
        run: npx playwright test tests/APIautomation/APIFileUpload.spec.js
      - name: List Allure results
        run: ls -R allure-results || echo "No allure-results found!"

      - name: Install Allure CLI
        run: npm install -g allure-commandline --save-dev

      - name: Generate Allure report
        run: allure generate ./allure-results --clean -o ./allure-report

      - name: Upload Allure report as artifact
        uses: actions/upload-artifact@v4
        with:
          name: allure-report
          path: ./allure-report
      - name: Deploy Allure Report to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./allure-report
