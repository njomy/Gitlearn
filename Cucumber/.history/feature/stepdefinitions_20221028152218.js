const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let firstNum;
let secNum;
let result;

Given('Take numbers {int} and {int}', function (first ,second) {
    firstNum = first;
    secNum = second;
});
When('Add number 5 and 3', function (first ,second) {
    firstNum = first;
    secNum = second;
});
Given('Take numbers {int} and {int}', function (first ,second) {
    firstNum = first;
    secNum = second;
});

