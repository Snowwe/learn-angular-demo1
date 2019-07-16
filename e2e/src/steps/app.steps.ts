import { Before, BeforeAll, Given, setDefaultTimeout, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

BeforeAll( function() {
  setDefaultTimeout(100 * 1000);
});

Before(function() {
    page = new AppPage();
});

Given('I am on the home page', async function() {
    await page.navigateTo();
});

When('I do nothing', () => {});

When('I click {string} button', async function(btnId: string) {
    await page.clickBtn(btnId);
});

Then('I should see the button {string} title {string}', async function(btnId: string, btnValue: string) {
    expect(await page.getButtonText(btnId)).to.equal(btnValue);
});
