import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbers = new NumbersCollection([4, 10, 2, 0, -5, 21, -8, 1]);
// const arr = new Sorter(numbers);
// arr.sort();
// console.log(numbers.data);

const string = new CharactersCollection('xaaYCbQos');
const sorter = new Sorter(string);
sorter.sort();
console.log(string.data);
