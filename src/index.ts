import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([4, 10, 2, 0, -5, 21, -8, 1]);
numbers.sort();
console.log(numbers.data);

const string = new CharactersCollection('xaaYCbQos');
string.sort();
console.log(string.data);

const linkedList = new LinkedList();
linkedList.add(20);
linkedList.add(4);
linkedList.add(-120);
linkedList.add(59);
linkedList.add(-34);

linkedList.sort();
linkedList.print();
