How to handle Alerts in Playwright js
// Listen for alert dialogs
  page.on("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); // Accepts the alert
  });
