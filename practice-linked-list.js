'use strict';

const ll = require('../../data-structures-and-algorithms/code-challenges/linkedList/linked-list.js')

//Iterate a linked list, printing out the values

let list = new ll.LinkedList();
list.append('Becca');
list.append('Buddy');
list.append('Hank');

let current = list.head;
while(current.next){
  console.log(current.value);
  current = current.next;
}

console.log(current.value);