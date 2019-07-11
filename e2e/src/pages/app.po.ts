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
    clickButton() {
        // console.log(element(by.css('firstToolbar')).element(by.tagName('button')));
        return element(by.css('firstToolbar')).element(by.tagName('button'));
        // .click()
        // .then(() => {
        //     element(by.tagName('button')).getText();
        // });
    }
    getLinks() {
        // return element(by.css('app-toolbar'))
        //      .element(by.css('div'))
        //     .element(by.className('.test-mat-menu'))
        //     // .element(by.tagName('button'))
        //     .getText();
        // .element(by.css('div'))
        // // .element(by.tagName('mat-menu'))
        // .element(by.css('button'))
        // .count();

        return (
            element(by.tagName('mat-menu'))
                // .element(by.tagName('button'))
                .getText()
        );
    }
    // getMenu() {
    //     return element(by.tagName('mat-menu'));
    // }
}
