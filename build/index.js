"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([4, 10, 2, 0, -5, 21, -8, 1]);
var arr = new Sorter_1.Sorter(numbers);
arr.sort();
console.log(numbers.data);
