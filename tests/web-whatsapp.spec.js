import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 }, // Set a large viewport for better visibility
});

test('WhatsApp Web automation', async ({ page }) => {
  // Navigate to WhatsApp Web
  await page.goto('https://web.whatsapp.com/');
  
  // Wait for the user to scan the QR code (adjust timeout if needed)
  console.log("Waiting for QR code scan...");
  await page.waitForTimeout(15000);
  
  // Adjust zoom level to fit all elements on the screen
  await page.evaluate(() => {
    document.body.style.zoom = '0.8'; // Zoom out to 80%
  });
  
  // Select the contact "Mohit Bhirani Gadarwada"
  const contact = page.getByText('Mohit Bhirani Gadarwada');
  await contact.scrollIntoViewIfNeeded(); // Ensure the contact is visible
  await contact.click();
  
  // Open the menu
  const menuButton = page.locator('div').filter({ hasText: /^new-chat-outlinemenu$/ }).getByLabel('Menu');
  await menuButton.scrollIntoViewIfNeeded(); // Ensure the menu is visible
  await menuButton.click();

  // Attempt to log out
  const logoutButton = page.getByRole('button', { name: 'Log out' });
  await logoutButton.scrollIntoViewIfNeeded(); // Ensure the log out button is visible
  await logoutButton.click();

  // Cancel the logout action
  const cancelButton = page.getByRole('button', { name: 'Cancel' });
  await cancelButton.scrollIntoViewIfNeeded(); // Ensure the cancel button is visible
  await cancelButton.click();

  // Take a screenshot for debugging or confirmation (optional)
  await page.screenshot({ path: 'final_state.png', fullPage: true });

  console.log("Automation completed successfully!");
});
