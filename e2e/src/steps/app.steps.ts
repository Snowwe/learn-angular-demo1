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

Then('I should see the button title', async () => {
    expect(await page.getButtonText()).to.equal('menu');
});
Then('I should see {int} buttons', async (count: number) => {
    expect(await page.getCount()).to.equal(count);
});

When('I click menu button', async () => {
    expect(await page.clickButton()).to.equal('menu');
    // какая проверка должна быть?
});

Then('I see links', async () => {
    // console.log(await page.getLinks());
    expect(await page.getLinks()).to.equal('');
});
