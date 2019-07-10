import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl);
    }

    getButtonText() {
        return element(by.css('app-toolbar button i')).getText();
    }
    getCount() {
        return element.all(by.css('app-toolbar button')).count();
    }
}
