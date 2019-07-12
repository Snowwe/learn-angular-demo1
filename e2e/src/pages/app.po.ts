import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl);
    }

    getButtonText(btnID: string) {
        return element(by.css('button#' + btnID)).getText();
    }

    clickBtn(btnID: string) {
        const btn = element(by.css('button#' + btnID));
        return btn.click();
    }
}
