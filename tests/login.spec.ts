import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://www.agustinapascali.com.ar/')
  
  await expect(page).toHaveTitle(/Agustina Pascali/);
});

test('login', async ({ page }) => {
  const EMAIL = process.env.EMAIL as string
  const PASSWORD = process.env.PASSWORD as string

  await page.goto('https://www.agustinapascali.com.ar/')

  await page.locator("button[class='chakra-button css-l9xpxd']").click();


  await page.locator("(//input[@id='email'])[1]").fill(EMAIL);
  await page.locator("(//input[@id='password'])[1]").fill(PASSWORD);
  await page.locator("button[type='submit']").click()

});
