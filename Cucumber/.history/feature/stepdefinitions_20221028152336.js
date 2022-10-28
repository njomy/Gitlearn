const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let firstNum;
let secNum;
let result;

Given('Take numbers {int} and {int}', function (first ,second) {
    firstNum = first;
    secNum = second;
});
When('Add number {int} and {int}', function (first ,second) {
   
});
Then('Value should be {int', function (first ,second) {
   
});

