'use strict';

const ll = require('../../data-structures-and-algorithms/code-challenges/linkedList/linked-list.js');

//iterate a linked list, printing out the values

let list = new ll.LinkedList();

list.append('Leo');
list.append('Milo');
list.append('Buddy');
list.append('Hank');

let current = list.head;

while(current.next){
  console.log(current.value);
  current = current.next;
}
console.log(current.value);
