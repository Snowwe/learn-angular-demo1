import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
// const assert = require('assert');
// const {
//   Given,
//   When,
//   Then
// } = require('cucumber');

// Given('today is {string}', function (givenDay) {
//   this.today = givenDay;
// });

// When('I ask whether it\'s Friday yet', function () {
//   this.actualAnswer = isItFriday(this.today);
// });

Then('я вижу тулбар', function() {
    assert.equal(this.actualAnswer);
});
