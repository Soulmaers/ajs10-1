import Team from './Team';
import Char from './Char';

const Char1 = new Char();
const Char2 = new Char();
const Char3 = new Char();

const team = new Team('Alex');
team.add(Char1);
team.add(Char2);
team.add(Char3);

console.log(team);

const iterator = team[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const item of team) {
  console.log(item);
}
