const {test,expect } = require('@playwright/test');
const path = require('path');

test('test Demo', async ({ page }) => {
  // Go to login page and login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for the dashboard to load
  await page.waitForSelector('nav >> text=Admin');

  // Navigate to Admin > Job > Job Titles
  await page.click('nav >> text=Admin');
  await page.click('text=Job');
  await page.click('text=Job Titles');
  await page.waitForLoadState('networkidle');

  // Click on the "Add" button
  await page.click('button:has-text("Add")');
   /* await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();*/
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('AutomationEngineer');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation & Manual Testing: \nSelenium Web Driver using JAVA, \nSelenium IDE, Test NG & POM, BDD With Cucumber Framework  MAVEN\nCypress with page object model using Java script is in progress.\nIntegrati');
/*  await page.getByText('Browse').click();
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation & Manual Testing: \nSelenium Web Driver using JAVA, \nSelenium IDE, Test NG & POM, BDD With Cucumber Framework  MAVEN\nCypress with page object model using Java script is in progress.\nIntegration Testing :\nREST  API testing using POSTMAN, Swagger, Exposure with JSON, Using Different Methods and performing CRUD operations on endpoints\nWriting test cases and postman assertions with JavaScript\nRunning collection with multiple instances\nMocking APIs\nNewman for CI/CD with Jenkins-Scheduling, email notifications, Build run\nGenerating html reports with Newman \nAPI Automation testing with REST Assured library- JAVA\n \n\n\nProgramming Skills: Core Java \nOperating Systems: Windows \nCoding Platforms: Eclipse, IntelliJ \nDatabase: Basic Knowledge in MY SQL Server with SQL \nPackages: Microsoft Office\n Others: Git, Git Hub, Jenkins \nProject Management tool: JIRA, Confluence, Xray\n\nTesting tools(Manual+ Automation)-2021-\n       Mind Q Systems Pvt Lt\n37 out of 40\nThe ISTQB® Foundation Level Agile Tester (CTFL-AT)');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation & Manual Testing: \nSelenium Web Driver using JAVA, \nSelenium IDE, Test NG & POM, BDD With Cucumber Framework  MAVEN\nCypress with page object model using Java script is in progress.\nIntegration Testing :\nREST  API testing using POSTMAN, Swagger, Exposure with JSON, Using Different Methods and performing CRUD operations on endpoints\nWriting test cases and postman assertions with JavaScript\nRunning collection with multiple instances\nMocking APIs\nNewman for CI/CD with Jenkins-Scheduling, email notifications, Build run\nGenerating html reports with Newman \nAPI Automation testing with REST Assured library- JAVA\n \n\n\nProgramming Skills: Core Java \nOperating Systems: Windows \nCoding Platforms: Eclipse, IntelliJ \nDatabase: Basic Knowledge in MY SQL Server with SQL \nPackages: Microsoft Office\n Others: Git, Git Hub, Jenkins \nProject Management tool: JIRA, Confluence, Xray\n\n\nThe ISTQB® Foundation Level Agile Tester (CTFL-AT)');
  await page.getByText('Browse').click();*/

  // Fill in Job Title and Description
  //const textbox = await page.locator("input.oxd-input.oxd-input--active");

  // fill text
  //await textbox.fill("qa engineer");
 /* await page.fill('input[placeholder="Job Title"]', 'Test Job');
   const textarea = await page.locator("textarea[placeholder='Type description here']");

  // type text into the textarea
  await textarea.fill("Job filled text");*/
  //clerawait page.locator('textarea[placeholder="Type description here"]', 'This is a test description');
console.log("Hello");
  // Upload the file by targeting the hidden input[type="file"]
  const filePath = path.resolve('tests/uploadFiles/demo.pdf'); // Replace with your actual file
  await page.setInputFiles('input[type="file"]', filePath);

  // Optional: Fill in Note
  await page.fill('textarea[placeholder="Add note"]', 'Uploaded via Playwright');

  // Save the form
  await page.click('button:has-text("Save")');

  // Wait and close
  await page.waitForTimeout(10000);
})