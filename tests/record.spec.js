import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://eadminadminuat.cylsys.com/');
  await expect(page).toHaveTitle('E-Admin'); // Verify the title of the login page

  // Enter login credentials
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('vishaljha@mailinator.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Vishal@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Verify title after login
  await expect(page).toHaveTitle('E-Admin');

  // Navigate to Travel Management
  await page.getByRole('button', { name: 'Travel Management' }).click();
  await expect(page).toHaveTitle('E-Admin'); // Verify title

  // Navigate to Courier Service
  await page.getByRole('button', { name: 'Courier Service' }).click();
  await expect(page).toHaveTitle('E-Admin'); // Verify title

  // Navigate to Outward Courier
  await page.getByRole('link', { name: 'Outward Courier' }).click();
  await expect(page).toHaveTitle('E-Admin'); // Verify title

  // Add a new outward courier
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.locator('input[type="date"]').first().fill('2024-12-11');
  await page.getByPlaceholder('Enter Employee Code').click();
  await page.getByPlaceholder('Enter Employee Code').fill('kirti');
  await page.getByLabel('Official or Personal').selectOption('Official');
  await page.getByPlaceholder('Enter Courier Weight').click();
  await page.getByPlaceholder('Enter Courier Weight').fill('50');
  await page.getByLabel('Courier Account Code').selectOption('080614');
  await page.getByLabel('Courier Co. Name').selectOption('Blue Dart');
  await page.getByLabel('Type Of Parcel').selectOption('Doc');
  await page.getByLabel('Courier Type').selectOption('Speed-Post');
  await page.getByPlaceholder('Enter Pin Code').click();
  await page.getByPlaceholder('Enter Pin Code').fill('4');
  await page.getByText('- Gadarwara,MP').click();
  await page.getByLabel('Reason').selectOption('Lost Shipment');
  await page.getByRole('button', { name: 'Save' }).click();

  // Add a new employee record
  await page.getByPlaceholder('Enter Employee Code').click();
  await page.getByPlaceholder('Enter Employee Code').fill('11');
  await page.getByRole('button', { name: 'Save' }).click();

  // Add delivery time
  await page.locator('input[type="date"]').nth(1).fill('2024-12-21');
  await page.locator('div').filter({ hasText: /^Delivery Time$/ }).nth(1).click();
  await page.locator('input[type="time"]').click();
  await page.locator('input[type="time"]').fill('12:00');

  // Fill recipient details
  await page.getByPlaceholder('Enter Recipient Name').click();
  await page.getByPlaceholder('Enter Recipient Name').fill('demo');
  await page.getByLabel('Courier Status').selectOption('Pending');
  await page.getByPlaceholder('Enter Return Courier AWB No').click();
  await page.getByPlaceholder('Enter Return Courier AWB No').fill('1212');
  await page.getByRole('button', { name: 'Save' }).click();

  // Fill consignee details
  await page.getByPlaceholder('Enter Consignee Name').click();
  await page.getByPlaceholder('Enter Consignee Name').fill('fvdf');
  await page.getByPlaceholder('Enter Consignee\'s Company Name').click();
  await page.getByPlaceholder('Enter Consignee\'s Company Name').fill('dfv');
  await page.getByPlaceholder('Enter AirWay Bill No.').click();
  await page.getByPlaceholder('Enter AirWay Bill No.').fill('fvdf');
  await page.getByRole('button', { name: 'Save' }).click();

  // Upload a file
  await page.locator('input[type="file"]').click();
});
