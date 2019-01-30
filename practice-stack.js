let sq = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

let stack = new sq.Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

function clear(stack){
  while(stack.peek()){
    console.log(stack.pop());
  }
}

clear(stack);