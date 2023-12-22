import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('quin27@hotmail.co.uk');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('scampi');
  await page.getByRole('button', { name: 'Log in' }).click();
  expect(page.getByRole('heading', { name: 'Hackathon' })).toBeVisible();
  await page.getByRole('link', { name: 'Community chat' }).click();
  expect(page.getByRole('button', { name: 'Send' }));
  await page.getByRole('link', { name: 'Home' }).click();
  expect(page.getByRole('link', { name: 'Read more 🚀' }));
  await page.getByRole('button', { name: 'Sign Up' }).click();
  expect(page.getByText('You have signed up !'));
  await page.getByRole('img', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Community chat' }).click();
  expect(page.getByRole('button', { name: 'Send' }));
  await page.getByPlaceholder('Type your message here...').click();
  await page.getByPlaceholder('Type your message here...').click();
  await page.getByPlaceholder('Type your message here...').fill('hello again');
  await page.getByRole('button', { name: 'Send' }).click();
  expect(page.locator('li').filter({ hasText: 'quinnlizzy12/21/2023, 3:05:34' }).getByRole('paragraph').nth(2));
  await page.getByRole('navigation').locator('div').filter({ hasText: 'HomeCommunity chatTeam' }).locator('div').nth(4).click();
});
