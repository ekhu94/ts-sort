"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var collection = this.collection;
        for (var i = collection.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (collection[j] > collection[j + 1]) {
                    var temp = collection[j];
                    collection[j] = collection[j + 1];
                    collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
var arr = new Sorter([5, 10, -3, 8, 4, 0, 2]);
arr.sort();
console.log(arr.collection);
