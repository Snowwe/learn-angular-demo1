import { AuthorizationPo } from '../pages/authorization.po';
import { Before, Then } from 'cucumber';
import { expect } from 'chai';

let login: AuthorizationPo;

Before(() => {
    login = new AuthorizationPo();
});

Then('I should see login form title {string}', async (title: string) => {
    expect(await login.viewLoginFormTitle()).to.equal(title);
});
