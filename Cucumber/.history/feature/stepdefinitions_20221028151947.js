const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let firstNum;
let secNum;
let result;

Given('Take numbers {int} and ', function (first ,second) {
    firstNum = first;
    secNum = second;
});