import { LoginPo } from '../pages/login.po';
import { Before, Then } from 'cucumber';
import { expect } from 'chai';

let login: LoginPo;

Before(() => {
    login = new LoginPo();
});

Then('I should see login form title {string}', async (title: string) => {
    expect(await login.viewLoginFormTitle()).to.equal(title);
});
