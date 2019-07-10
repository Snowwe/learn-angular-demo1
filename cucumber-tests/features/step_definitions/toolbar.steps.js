// const HomePO = require('cucumber-tests/features/pages/home.po.js');
// const chai = require('chai');

const assert = require('assert');
const {
  Given,
  When,
  Then
} = require('cucumber');
// const browser = require('@angular/platform-browser');
const browser = require('protractor');
// const browser1 = require('@angular/platform-browser-dynamic');

// const assert = require('assert');
// const {
//   Given,
//   When,
//   Then
// } = require('cucumber');
// const webdriver = require('selenium-webdriver')
// const browser= require('@angular/platform-browser')

// import {
//   expect
// } from 'chai';
// import { defineSupportCode} from 'cucumber';
// import {
//   AppPage
// } from './app.po';


// defineSupportCode(({
//   Given,
//   When,
//   Then,
//   Before
// }) => {
// let po: AppPage;

// Before(() => {
//   app = new AppPage();
// });
// create po

Given('I view the homepage',
  () => {
    console.log(browser.params);
    // console.log(browser1)
    browser.get(browser.params.env.hostname);
  });

// When('I type {string} into the search input field',
//   (text: string) => app.enterSearchInput(text));

// Then('I should see some results in the search overlay',
//   () => app.getSearchResultItems()
//     .then(elems => expect(elems.length).to.be.greaterThan(0)));

// });


// const home = new HomePO();
//
// When(`I click on the Menu button`,  (callback) => {
//   home
//     .clickMenuBtn()
//     .then(callback);
// });
// Given('today is {string}', function (givenDay) {
//   this.today = givenDay;
// });

// When('I ask whether it/'s Friday yet', function () {
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



// Given('I view the homepage', function (callback) {
// //   console.log(global.browser)
//   console.log(this.browser)
//   this.browser.get(this.browser.params.env.hostname).then(callback);
//   //    browser.get(browser.params.env.hostname).then(callback);
//   //   const elem = document.getElementsByTagName('button');
//   return console.log(elem);
// });



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
