const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let firstNum;
let secNum;
let result;

Given('Take numbers {int} and {int}', function (first ,second) {
    firstNum = first;
    secNum = second;
});
When('Add both numbers', function () {
   result=firstNum+secNum;
});
Then('Value should be{int}', function (expectResult) {
   assert(result === expectResult,"Addition i")
   
});

