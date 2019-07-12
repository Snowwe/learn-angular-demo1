import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given('I am on the home page', async () => {
    await page.navigateTo();
});

When('I do nothing', () => {});

When('I click {string} button', async (btnId: string) => {
    await page.clickBtn(btnId);
});

Then('I should see the button {string} title {string}', async (btnId: string, btnValue: string) => {
    expect(await page.getButtonText(btnId)).to.equal(btnValue);
});

Then('I should see {int} buttons', async (count: number) => {
    expect(await page.getCountToolbarButtons()).to.equal(count);
});

Then('I should see {int} buttons in menuList', async (count: number) => {
    expect(await page.getCountMenuButtons()).to.equal(count);
});

When('I click menu button', async () => {
    expect(await page.clickButton()).to.equal('menu');
    // какая проверка должна быть?
});

Then('I see links', async () => {
    // console.log(await page.getLinks());
    expect(await page.getLinks()).to.equal('');
});
