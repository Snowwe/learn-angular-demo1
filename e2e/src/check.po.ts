import { browser, by, element } from 'protractor';

export class ClientPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('client-title')).getText() as Promise<string>;
  }
}
