import { AuthorizationPo } from '../pages/authorization.po';
import { Before, BeforeAll, setDefaultTimeout, Then, When } from 'cucumber';
import { expect } from 'chai';

let login: AuthorizationPo;

BeforeAll(async () => {
    setDefaultTimeout(60 * 1000);
});

Before(() => {
    login = new AuthorizationPo();
});

Then('I should see login form title {string}', async (title: string) => {
    expect(await login.viewLoginFormTitle()).to.equal(title);
});

Then('I should see in login form input {string} with {string}', async (inputID: string, currentValue: string) => {
    expect(await login.getInputText(inputID)).to.contains(currentValue);
});

When('I enter in input {string} {string}', async (inputID: string, value: string) => {
    await login.setInputValue(inputID, value);
});

Then('I get info from LocalStorage by key {string} {string}', async (key: string, value: string) => {
    expect(await login.getLocalStorageInfo(key)).to.equal(value);
});
