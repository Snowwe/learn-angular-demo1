import { by, element } from 'protractor';

export class AuthorizationPo {
    viewLoginFormTitle() {
        return element(by.css('.authForm mat-toolbar span')).getText();
    }
}
