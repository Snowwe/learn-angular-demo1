const HomePO = require('../pages/home.po.js');
//
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
//
const home = new HomePO();
//
// When(`I click on the Menu button`,  (callback) => {
//   home
//     .clickMenuBtn()
//     .then(callback);
// });
// Given('today is {string}', function (givenDay) {
//   this.today = givenDay;
// });

// When('I ask whether it\'s Friday yet', function () {
//   this.actualAnswer = isItFriday(this.today);
// });

// Then('я вижу тулбар', function() {
//     assert.equal(this.actualAnswer);
// });

// const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const expect = chai.expect;
//
// chai.use(chaiAsPromised);

Given('I view the homepage', function(callback) {
    browser.get(browser.params.env.hostname).then(callback);
});

// const steps = function() {
//     this.Given(/^I view the homepage$/, function(callback) {
//         browser.get(browser.params.env.hostname).then(callback);
//     });
//
//     this.When(/^I click on the Start button$/, function(callback) {
//         home.clickStartButton().then(callback);
//     });
//
//     this.Then(/^I should see that the button was clicked$/, function(callback) {
//         expect(home.isResultPresent())
//             .to.eventually.equal(true)
//             .and.notify(callback);
//     });
// };
// module.exports = steps;
