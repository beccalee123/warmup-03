'use strict';

const fir = require('../../data-structures-and-algorithms/code-challenges/tree/tree.js');

let tree = new fir.BinaryTree();
let a = new fir.Node(12);
let b = new fir.Node(30);
let c = new fir.Node(6);
let d = new fir.Node(1);
let e = new fir.Node(15);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
tree.root = a;

//traverse a binary tree, printing out the values as you visit each node
//breadth first

// need to revisit

//depth-first: pre-order
function traversePre(tree){
  let _walk = (node) => {
    console.log(node.value);
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}
  };
  _walk(this,root);
  return;
}

traversePre(tree);

//depth-first: in-order
function traversePre(tree){
  let _walk = (node) => {
    if(node.left){_walk(node.left);}
    console.log(node.value);
    if(node.right){_walk(node.right);}
  };
  _walk(this,root);
  return;
}

//depth-first: post-order
function traversePre(tree){
  let _walk = (node) => {
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}
    console.log(node.value);
  };
  _walk(this,root);
  return;
}