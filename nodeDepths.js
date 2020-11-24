function nodeDepths(root) {
  let depth = 0 

  const addNode = (node, depth) => {
    let nodeDepthTotal = 0
    if (node.left) {
      nodeDepthTotal += addNode(node.left, depth + 1)
    }
    if (node.right) {
      nodeDepthTotal += addNode(node.right, depth + 1)
    }
    return depth + nodeDepthTotal
  }

  return (addNode(root, depth))
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

const depthTotal = nodeDepths(root)
console.log(depthTotal)

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
