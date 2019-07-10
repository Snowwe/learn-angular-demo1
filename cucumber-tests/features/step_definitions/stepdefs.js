const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// import { Given, When, Then } from 'cucumber';
// import * as assert from 'assert';

function isItFriday(today) {
    if (today === 'Friday') {
        return 'TGIF';
    } else {
        return 'Nope';
    }
}

Given('today is {string}', function(givenDay) {
    this.today = givenDay;
});

When(`I ask whether it's Friday yet`, function() {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function(expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});
