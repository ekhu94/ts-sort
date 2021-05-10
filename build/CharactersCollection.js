"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var chars = this.data.split('');
        var temp = chars[leftIdx];
        chars[leftIdx] = chars[rightIdx];
        chars[rightIdx] = temp;
        this.data = chars.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
