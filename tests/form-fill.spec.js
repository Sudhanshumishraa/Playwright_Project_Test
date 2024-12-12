import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form/');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('sudhanshu');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('mishra');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('sm@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('9090909090');
  await page.locator('#dateOfBirthInput').click();
  await page.getByLabel('Choose Monday, December 30th,').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('hi');
  await page.getByText('Hindi', { exact: true }).click();
  await page.getByText('Sports').click();
  await page.getByLabel('Select picture').click();
  await page.getByLabel('Select picture').setInputFiles('.git-for-windows-updater');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('tehsy');
  await page.locator('#state path').click();
  await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
  await page.getByText('Lucknow', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});