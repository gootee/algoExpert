// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function binaryTreeDiameter(tree: BinaryTree): number {
  let maxDiameter: number = 0

  const getNodeDiameter = (node: BinaryTree): number => {
    const leftHeight: number = node.left ? getNodeDiameter(node.left) : 0
    const rightHeight: number = node.right ? getNodeDiameter(node.right) : 0
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight)
    return 1 + Math.max(leftHeight, rightHeight)
  }

  getNodeDiameter(tree)

  return maxDiameter;
}

const root = new BinaryTree(1)
root.left = new BinaryTree(3)
root.left.left = new BinaryTree(7)
root.left.left.left = new BinaryTree(8)
root.left.left.left.left = new BinaryTree(9)
root.left.right = new BinaryTree(4)
root.left.right.right = new BinaryTree(5)
root.left.right.right.right = new BinaryTree(6)
root.right = new BinaryTree(2)

const actual = binaryTreeDiameter(root)
console.log(`tree diameter = ${actual}`)
