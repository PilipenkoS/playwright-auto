import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {

      await page.goto('https://www.google.ru/');
      await page.getByLabel('Найти').click();
      await page.getByLabel('Найти').fill('погода россия');
      const page1Promise = page.waitForEvent('popup');
      await page.getByRole('link', { name: 'погода в России Gismeteo' }).click();
      const page1 = await page1Promise;
      await page1.locator('div').filter({ hasText: /^Воронежская область$/ }).getByRole('link').click();
      await page1.getByRole('link', { name: 'Воронеж (городской округ)', exact: true }).click();
      await page1.getByRole('link', { name: 'Воронеж', exact: true }).click();
      await page1.getByRole('link', { name: 'Завтра', exact: true }).click();
      await page1.getByRole('link', { name: '3 дня' }).click();
      await page1.getByRole('link', { name: 'дней' }).click();
      await page1.locator('body').click();
      await page1.getByRole('link', { name: 'Сейчас' }).click();
    });    
