import { AuthorizationPo } from '../pages/authorization.po';
import { Before, BeforeAll, setDefaultTimeout, Then, When } from 'cucumber';
import { expect } from 'chai';
import { takeScreenshot } from '../../screenshot';

let login: AuthorizationPo;

Before(function() {
    login = new AuthorizationPo();
});

BeforeAll( function() {
    setDefaultTimeout(100 * 1000);
});

Then('I should see login form title {string}', async function(title: string) {
    expect(await login.viewLoginFormTitle()).to.equal(title);
});

Then('I should see in login form input {string} with {string}', async function(inputID: string, currentValue: string) {
    expect(await login.getInputText(inputID)).to.contains(currentValue);
    await takeScreenshot(this);
});

When('I enter in input {string} {string}', async function(inputID: string, value: string) {
    await login.setInputValue(inputID, value);
});

Then('I get info from LocalStorage by key {string} {string}', async function(key: string, value: string) {
    expect(await login.getLocalStorageInfo(key)).to.equal(value);
});
