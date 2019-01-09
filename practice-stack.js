'use strict';

const sq = require('../../data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');

// Process a Stack in the correct order

let stack = new sq.Stack();

stack.push('Leo');
stack.push('Hank');
stack.push('Buddy');

console.log(stack.peek().value);

stack.pop();
console.log(stack.peek().value);

stack.pop();
console.log(stack.peek().value);
