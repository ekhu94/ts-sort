import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  get length(): number {
    if (!this.head) return 0;
    let count = 1;
    let node = this.head;
    while (node.next) {
      count++;
      node = node.next;
    }
    return count;
  }

  add(num: number): void {
    if (!this.head) {
      this.head = new Node(num);
      return;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(num);
  }

  at(idx: number): Node {
    if (!this.head) {
      throw new Error('Index is not valid');
    }
    let i = 0;
    let node: Node | null = this.head;
    while (node) {
      if (i === idx) return node;
      i++;
      node = node.next;
    }
    throw new Error('Index is not valid');
  }

  compare(left: number, right: number): boolean {
    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    let leftNode = this.at(left);
    let rightNode = this.at(right);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
