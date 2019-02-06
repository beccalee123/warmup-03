'use strict';

let bt = require('../../data-structures-and-algorithms/code-challenges/tree/tree.js');

function preOrder(tree){
  let results = [];

  let _walk = (node) => {
    results.push(node.value);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);

  return results;
}

function postOrder(tree){
  let results = [];

  let _walk = (node) => {
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);

  return results;
};

function inOrder(tree){
  let results = [];

  let _walk = (node) => {
    if(node.left) _walk(node.left);
    results.push(node.value);
    if(node.right) _walk(node.right);
  }
  _walk(tree.root);

  return results;
}

function levelOrder(tree){
  let results = [];
  let nodeQueue = [];

  nodeQueue.push(tree.root);

  while(nodeQueue.length){
    let current = nodeQueue.shift();
    results.push(current.value);
    if(current.left) nodeQueue.push(current.left);
    if(current.right) nodeQueue.push(current.right);
  }
  return results;
}

let one = new bt.Node(1);
let two = new bt.Node(2);
let three = new bt.Node(3);
let four = new bt.Node(4);
let five = new bt.Node(5);
let six = new bt.Node(6);
let seven = new bt.Node(7);
let eight = new bt.Node(8);
let nine = new bt.Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const testTree = new bt.BinaryTree(one);

console.log(preOrder(testTree));
console.log(inOrder(testTree));
console.log(postOrder(testTree));
console.log(levelOrder(testTree)); 