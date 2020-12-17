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

type leftMostRightMost = [BinaryTree, BinaryTree]

const connectNodes = (leftNode: BinaryTree, rightNode: BinaryTree): void => {
  leftNode.right = rightNode
  rightNode.left = leftNode
}

const flattenNode = (node: BinaryTree): leftMostRightMost => {
  let leftMost: BinaryTree
  let rightMost: BinaryTree

  if (node.left) {
    const [leftLeftMost, leftRightMost] = flattenNode(node.left)
    connectNodes(leftRightMost, node)
    leftMost = leftLeftMost
  } else {
    leftMost = node
  }

  if (node.right) {
    const [rightLeftMost, rightRightMost] = flattenNode(node.right)
    connectNodes(node, rightLeftMost)
    rightMost = rightRightMost
  } else {
    rightMost = node
  }

  return [leftMost, rightMost]
}

export function flattenBinaryTree(root: BinaryTree): BinaryTree {
  const [leftMost, rightMost]: leftMostRightMost = flattenNode(root)
  return leftMost
}

const root = new BinaryTree(1)
root.left = new BinaryTree(2)
root.right = new BinaryTree(3)
root.left.left = new BinaryTree(4)
root.left.right = new BinaryTree(5)
root.right.left = new BinaryTree(6)
root.left.right.left = new BinaryTree(7)
root.left.right.right = new BinaryTree(8)

const leftMostNode = flattenBinaryTree(root)
// console.log(leftMostNode)
// const leftToRightToLeft = getLeftToRightToLeft(leftMostNode);
// const expected = [4, 2, 7, 5, 8, 1, 6, 3, 3, 6, 1, 8, 5, 7, 2, 4];
