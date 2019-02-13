'use strict';

let q = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

let queue = new q.Queue();

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(10);

function traverse(queue){
  let item = null;
  while(item = queue.dequeue()){
    console.log(item);
  }
}

traverse(queue);
