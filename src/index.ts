import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([4, 10, 2, 0, -5, 21, -8, 1]);
const arr = new Sorter(numbers);
arr.sort();
console.log(numbers.data);
