"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var collection = this.collection;
        for (var i = collection.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (collection.compare(j, j + 1)) {
                    collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
