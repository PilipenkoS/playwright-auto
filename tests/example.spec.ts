import { test, expect } from '@playwright/test';
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();



await page.goto('https://www.google.ru/');
await page.getByLabel('Найти').fill('Погода воронеж');
await page.getByLabel('Поиск в Google').first().click();
await page.getByLabel('Найти').click();
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Погода в Воронеже Gismeteo' }).click();
  const page1 = await page1Promise;
await page1.getByRole('link', { name: 'Завтра', exact: true }).click();
await page1.getByRole('link', { name: '3 дня' }).click();
await page1.getByRole('link', { name: 'дней' }).click();
await page1.getByRole('link', { name: 'недели' }).click();
await page1.getByRole('link', { name: 'Месяц' }).click();
await page1.getByRole('link', { name: 'Радар' }).click();
await page1.getByRole('link', { name: 'Сейчас' }).click();

});
