export function nodeDepths(root: BinaryTree) {
  let depth = 0 

  const addNode = (node: BinaryTree, depth: number) => {
    let nodeDepthTotal: number = 0
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

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
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

exports.nodeDepths = nodeDepths;
