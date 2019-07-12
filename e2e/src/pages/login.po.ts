import { by, element } from 'protractor';

export class LoginPo {
    viewLoginFormTitle() {
        return element(by.css('.authForm mat-toolbar span')).getText();
    }
}
