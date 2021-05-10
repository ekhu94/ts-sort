interface Sortable {
  length: number;
  compare(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { collection } = this;
    for (let i = collection.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (collection.compare(j, j + 1)) {
          collection.swap(j, j + 1);
        }
      }
    }
  }
}
