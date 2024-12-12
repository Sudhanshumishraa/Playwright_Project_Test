import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.locator('i').first().click();
  await page.getByText('Try different image').click();
  await page.getByLabel('Amazon', { exact: true }).click();
  await page.getByLabel('Open All Categories Menu').click();
  await page.getByRole('link', { name: 'Amazon Music' }).click();
  await page.getByRole('link', { name: 'Amazon Music Unlimited' }).click();
  await page.getByRole('link', { name: 'Amazon Music homepage' }).click();
});