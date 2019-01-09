'use strict';

const sq = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

// Process a Queue in the correct order

let queue = new sq.Queue();

queue.enqueue('Buddy');
queue.enqueue('Hank');
queue.enqueue('Leo');

console.log(queue.peek().value);

while(queue.peek() !== null){
  queue.dequeue();
  console.log(queue.peek());

}