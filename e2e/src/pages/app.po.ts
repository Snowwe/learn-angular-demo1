import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl);
    }

    getButtonText(btnID: string) {
        return element(by.css('app-toolbar button#' + btnID)).getText();
    }

    getCountToolbarButtons() {
        return element.all(by.css('app-toolbar button')).count();
    }

    getCountMenuButtons() {
        return element.all(by.css('.mat-menu-content button')).count();
    }

    clickBtn(btnID: string) {
        const btn = element(by.css('app-toolbar button#' + btnID));
        return btn.click();
    }
}
