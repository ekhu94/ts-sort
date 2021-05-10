export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const chars = this.data.split('');
    const temp = chars[leftIdx];
    chars[leftIdx] = chars[rightIdx];
    chars[rightIdx] = temp;
    this.data = chars.join('');
  }
}
