class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { collection } = this;
    for (let i = collection.length - 1; i > 0; i--) {
      let j = 0;
      while (j < i) {
        if (collection[j] > collection[j + 1]) {
          let temp = collection[j];
          collection[j] = collection[j + 1];
          collection[j + 1] = temp;
        }
        j++;
      }
    }
  }
}

const arr = new Sorter([5, 10, -3, 8, 4, 0, 2]);
arr.sort();
console.log(arr.collection);
