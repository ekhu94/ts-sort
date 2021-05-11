"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var count = 1;
            var node = this.head;
            while (node.next) {
                count++;
                node = node.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (num) {
        if (!this.head) {
            this.head = new Node(num);
            return;
        }
        var node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(num);
    };
    LinkedList.prototype.at = function (idx) {
        if (!this.head) {
            throw new Error('Index is not valid');
        }
        var i = 0;
        var node = this.head;
        while (node) {
            if (i === idx)
                return node;
            i++;
            node = node.next;
        }
        throw new Error('Index is not valid');
    };
    LinkedList.prototype.compare = function (left, right) {
        return this.at(left).data > this.at(right).data;
    };
    LinkedList.prototype.swap = function (left, right) {
        var leftNode = this.at(left);
        var rightNode = this.at(right);
        var temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
