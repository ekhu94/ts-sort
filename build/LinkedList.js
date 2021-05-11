"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var count = 0;
            var node = this.head;
            while (node) {
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
            throw new Error('Index out of bounds');
        }
        var i = 0;
        var node = this.head;
        while (node) {
            if (idx === i)
                return node;
            i++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (left, right) {
        if (this.length < 2) {
            throw new Error('List length is too short');
        }
        return this.at(left).data > this.at(right).data;
    };
    LinkedList.prototype.swap = function (left, right) {
        var leftNode = this.at(left);
        var rightNode = this.at(right);
        var temp = this.at(left).data;
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
}());
exports.LinkedList = LinkedList;
