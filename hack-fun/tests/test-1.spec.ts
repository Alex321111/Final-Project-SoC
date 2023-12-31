import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('quin27@hotmail.co.uk');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('scampi');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Community chat' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('img', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Community chat' }).click();
  await page.getByPlaceholder('Type your message here...').click();
  await page.getByPlaceholder('Type your message here...').click();
  await page.getByPlaceholder('Type your message here...').fill('hello again');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('navigation').locator('div').filter({ hasText: 'HomeCommunity chatTeam' }).locator('div').nth(4).click();
});