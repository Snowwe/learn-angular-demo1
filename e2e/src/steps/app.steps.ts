import { Before, BeforeAll, Given, setDefaultTimeout, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

BeforeAll(async () => {
    setDefaultTimeout(60 * 1000);
});

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
