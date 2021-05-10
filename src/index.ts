class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { collection } = this;
    for (let i = collection.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (collection instanceof Array) {
          if (collection[j] > collection[j + 1]) {
            const temp = collection[j];
            collection[j] = collection[j + 1];
            collection[j + 1] = temp;
          }
        }

        if (typeof collection === 'string') {
        }
      }
    }
  }
}

const arr = new Sorter([5, 10, -3, 8, 4, 0, 2]);
arr.sort();
console.log(arr.collection);
