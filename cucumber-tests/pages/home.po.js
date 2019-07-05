const HomepagePageObject = function() {
    this.selectors = {
        MENU_BUTTON: '.e2e-menu-btn',
        PHONE_BUTTON: '.e2e-phone-btn',
        ALARM_BUTTON: '.e2e-alarm-btn',
        MIC_BUTTON: '.e2e-mic-btn',
        CALL_BUTTON: '.e2e-call-btn',
        ACCOUNT_BUTTON: '.e2e-account-btn',
    };

    this.menuButton = browser.$(this.selectors.MENU_BUTTON);
    this.phoneButton = browser.$(this.selectors.PHONE_BUTTON);
    this.alarmButton = browser.$(this.selectors.ALARM_BUTTON);
    this.micButton = browser.$(this.selectors.MIC_BUTTON);
    this.callButton = browser.$(this.selectors.CALL_BUTTON);
    this.accountButton = browser.$(this.selectors.ACCOUNT_BUTTON);
};

HomepagePageObject.prototype.clickMenuBtn = function() {
    return this.menuButton.click();
};

HomepagePageObject.prototype.clickPhoneBtn = function() {
    return this.phoneButton.click();
};

HomepagePageObject.prototype.clickAlarmBtn = function() {
    return this.alarmButton.click();
};

HomepagePageObject.prototype.clickMicBtn = function() {
    return this.micButton.click();
};

HomepagePageObject.prototype.clickCallBtn = function() {
    return this.callButton.click();
};

HomepagePageObject.prototype.clickAccountBtn = function() {
    return this.accountButton.click();
};

module.exports = HomepagePageObject;
