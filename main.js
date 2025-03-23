import { LinkedList } from "./LinkedList.js";


const list = new LinkedList();



list.append("dog");



console.log(list.toString());

list.pop();

console.log(list.toString());

list.prepend("tiger");

console.log(list.toString());

console.log(list.at(2));

console.log(list.contains('hamster'));

console.log(list.find('cat'));

list.removeAt(3);

console.log(list.toString());

list.insertAt('lion', 1);

console.log(list.toString());
