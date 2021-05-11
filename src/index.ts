import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([20, 6, 12, -29, 5, 30, -7, 0, 3]);
numbers.sort();
console.log(numbers);

const string = new CharactersCollection('xOppRhishMqiisnAshg');
string.sort();
console.log(string.data);

const linkedList = new LinkedList();
linkedList.add(7);
linkedList.add(30);
linkedList.add(-12);
linkedList.add(0);
linkedList.add(4);
linkedList.add(-28);
linkedList.add(17);
linkedList.add(104);
linkedList.add(21);
linkedList.add(-3);

linkedList.sort();
linkedList.print();
