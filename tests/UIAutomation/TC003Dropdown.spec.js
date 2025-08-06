import {test,expect} from '@playwright/test';   
test('Dropdown selection ', async ({ page }) => {
  const baseURL = "https://sebgroup.com/career/who-are-we/career-at-seb/find-your-new-job/our-vacant-positions";

  await page.goto(baseURL);
  await page.locator('#onetrust-accept-btn-handler').click();
  //await page.locator('button:has-text("Accept All Cookies")').click();

  //await context.clearCookies();

  //await page.context().clearCookies();
  

  //await page.locator('span.ngg-dropdown-default-trigger').nth(0).click();




  })
