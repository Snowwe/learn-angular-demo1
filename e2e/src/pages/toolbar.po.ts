import { by, element } from 'protractor';

export class ToolbarPo {
    getCountToolbarButtons() {
        return element.all(by.css('app-toolbar button')).count();
    }

    getCountMenuButtons() {
        return element.all(by.css('.mat-menu-content button')).count();
    }
}
