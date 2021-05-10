interface Collection {
  length: number;
  compare(): boolean;
  swap(): void;
}

export class Sorter {
  constructor(public collection: Collection) {}

  sort(): void {
    const { collection } = this;
    for (let i = collection.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (collection[j] > collection[j + 1]) {
          const temp = collection[j];
          collection[j] = collection[j + 1];
          collection[j + 1] = temp;
        }
      }
    }
  }
}
