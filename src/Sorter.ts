interface Sortable {
  length: number;
  compare(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(left: number, right: number): boolean;
  abstract swap(left: number, right: number): void;

  sort(): void {
    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
