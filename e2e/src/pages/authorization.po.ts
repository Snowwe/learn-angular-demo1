import { browser, by, element } from 'protractor';

export class AuthorizationPo {
    viewLoginFormTitle() {
        return element(by.css('.authForm mat-toolbar span')).getText();

    }

    getInputText(inputID: string) {
        return element(by.id(inputID)).getAttribute('value');
    }

    setInputValue(inputID: string, value: string) {
        const elem = element(by.id(inputID));
        elem.click();
        return elem.sendKeys(value);
    }

    getLocalStorageInfo(key: string) {
        return browser.executeScript(`return localStorage.getItem("${key}");`);
    }
}
