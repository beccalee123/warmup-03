'use strict';

const sq = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

// Process a Queue in the correct order

let stack = new sq.Stack();

stack.push('Leo');
stack.push('Milo');
stack.push('Buddy');
stack.push('Hank');

function stackPrint(stack){
  while(stack.top.next){
    console.log(stack.peek());
    stack.pop();
  }
}

stackPrint(stack);