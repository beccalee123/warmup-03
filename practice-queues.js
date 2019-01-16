'use strict';

const sq = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

// process a stack in the correct order

let q = new sq.Queue();

q.enqueue('Leo');
q.enqueue('Milo');
q.enqueue('Buddy');
q.enqueue('Hank');

console.log(q.peek().value);

while(q.peek() !== null){
  q.dequeue();
  console.log(q.peek());
}
