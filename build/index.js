"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbers = new NumbersCollection([4, 10, 2, 0, -5, 21, -8, 1]);
// const arr = new Sorter(numbers);
// arr.sort();
// console.log(numbers.data);
var string = new CharactersCollection_1.CharactersCollection('xaaYCbQos');
var sorter = new Sorter_1.Sorter(string);
sorter.sort();
console.log(string.data);
