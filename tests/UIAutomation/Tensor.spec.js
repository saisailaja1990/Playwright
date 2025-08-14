import { test, expect } from "@playwright/test";

const baseUrl =
  "https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.17164&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false";

test.describe("TensorFlow Playground Automation", () => {
  test.beforeEach(async ({ page }) => {
    // Avoid repeated navigation to baseUrl before each test
    await page.goto(baseUrl);
  });

  test("Full workflow: report initial/final test loss and modify settings", async ({
    page,
  }) => {
    // Report initial test loss
    const initialLoss = await page
      .locator("text=Test loss")
      .first()
      .textContent();
    console.log("Initial Test Loss:", initialLoss);
    expect(initialLoss).toBeDefined();
    /*
    // Change dataset to exclusive
    console.log("Changing dataset to Exclusive or");
    await page
      .getByTitle("Exclusive or")
      .locator("canvas")
      .click({ position: { x: 17, y: 22 } });

    // Change noise to 5 percent
    console.log("Setting noise to 5%");
    await page.getByRole("slider", { name: "Noise:" }).fill("5");
    expect(page.getByRole("slider", { name: "Noise:" })).toHaveValue("5");


    // Select two more features
    console.log("Selecting two more features");
    await page
      .locator("#canvas-xSquared canvas")
      .click({ position: { x: 16, y: 17 } });
    await page
      .locator("#canvas-ySquared canvas")
      .click({ position: { x: 13, y: 12 } });
    expect(page.locator("#canvas-xSquared canvas")).toBeVisible();
    expect(page.locator("#canvas-ySquared canvas")).toBeVisible();

    // Remove two neurons
    console.log("Removing two neurons");
    await page.getByRole("button", { name: "remove" }).first().click();
    await page.getByRole("button", { name: "remove" }).nth(1).click();
    // expect(page.locator(".neuron")).toHaveCount(2);

    // Change learning rate to 0.1
    console.log("Changing learning rate to 0.1");
    await page.locator("#learningRate").selectOption("0.1");
    expect(page.locator("#learningRate")).toHaveValue("0.1");
*/
    // Run the simulation
    console.log("Starting the simulation");
    await page.locator('#play-pause-button').click();

    //expect(page.getByRole("button", { name: "pause" })).toBeVisible();

    // Wait for epoch to progress (add a wait or check for a condition if possible)
    // await page.waitForTimeout(8000);
     await page.waitForFunction(() => {
  const el = document.querySelector("#iter-number");
  if (!el) return false;
  const raw = el.textContent?.trim().replace(/,/g, "") ?? "0";
  const value = parseInt(raw, 10);
  return !isNaN(value) && value > 300;
}); // Adjust as needed
    //await page.locator('#id="iter-number"').to("000,350");

    // Pause simulation
    console.log("Pausing the simulation");
    await page.getByRole("button", { name: "pause" }).click();
    // Ensure the simulation is paused
    //expect(page.getByRole("button", { name: "play_arrow" })).toBeVisible();

    // Check if the test loss has changed
   /* console.log("Checking if test loss has changed");
    const updatedLoss = await page
      .locator("text=Test loss")
      .first()
      .textContent();
    console.log("Updated Test Loss:", updatedLoss);

    // Report final test loss
    const finalLoss = await page
      .locator("text=Test loss")
      .first()
      .textContent();
    console.log("Final Test Loss:", finalLoss);
    expect(finalLoss).toBeDefined();*/
  });
});