const { test, expect } = require('@playwright/test')

test('get title', async ({ page }) => {
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
    // console.log(test)
})