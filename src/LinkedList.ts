class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: null | Node = null;

  get length(): number {
    let count = 0;
    let node = this.head;
    while (node) {
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
      throw new Error('Index out of bounds');
    }
    let i = 0;
    let node: Node | null = this.head;
    while (node) {
      if (idx === i) return node;
      i++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(left: number, right: number): boolean {
    if (this.length < 2) {
      throw new Error('List length is too short');
    }
    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    const temp = this.at(left);
    this.at(left).data = this.at(right).data;
    this.at(right).data = temp.data;
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
