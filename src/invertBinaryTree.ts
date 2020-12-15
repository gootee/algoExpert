class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

export function invertBinaryTree(tree: BinaryTree | null) {
  if (tree === null) return
  swapLeftAndRight(tree)
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

function swapLeftAndRight(tree: BinaryTree) {
  const oldLeft = tree.left
  tree.left = tree.right
  tree.right = oldLeft
}

const treeArray = [2, 3, 4, 5, 6, 7, 8, 9]
const tree = new BinaryTree(1).insert(treeArray)

invertBinaryTree(tree)
// console.log(tree)