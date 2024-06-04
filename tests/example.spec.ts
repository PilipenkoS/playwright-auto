import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

await page.goto('https://www.google.ru/');
await page.getByLabel('Найти').click();
await page.getByLabel('Найти').fill('лучшие настольные игры');
await page.getByLabel('Поиск в Google').first().click();
const page1Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'Топ-30' }).click();
const page1 = await page1Promise; 
await page1.locator('a').filter({ hasText: 'Властелин колец: Странствия в Средиземье' }).click();
await page1.getByRole('link', { name: 'Правила', exact: true }).click();

});
