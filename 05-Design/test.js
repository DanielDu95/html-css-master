class TreeNode {
  val;
  left;
  right;
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

function levelOrder(root) {
  const queue = [root];
  const list = [];
  while (queue.length) {
    let node = queue.shift();
    list.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return list;
}

function preOrder(root) {
  const list = [];

  function order(root) {
    if (root === null) return;
    list.push(root.val);
    order(root.left);
    order(root.right);
  }
  order(root);
  return list;
}

console.log(preOrder(n1));

function inOrder(root) {
  const list = [];

  function order(root) {
    if (root === null) return;

    order(root.left);
    list.push(root.val);
    order(root.right);
  }
  order(root);
  return list;
}

function postOrder(root) {
  const list = [];

  function order(root) {
    if (root === null) return;

    order(root.left);
    order(root.right);
    list.push(root.val);
  }
  order(root);
  return list;
}
