import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

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