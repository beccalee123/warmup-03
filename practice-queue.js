let queue = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

let q = new queue.Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.enqueue(10);

function traverse(queue){
  let item = null;
  while(item = queue.dequeue()){
    console.log(item);
  }
}

traverse(q);