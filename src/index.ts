// This is the class of the input binary tree.
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

export function allKindsOfNodeDepths(root: BinaryTree) {
  type NodeStats = {
    nodesInMyTree: number,
    totalDepth: number,
    accumulatedDepth: number
  }

  const getNodeStats = (node: BinaryTree | null): NodeStats => {
    if (!node) { return {
      nodesInMyTree: 0,
      totalDepth: 0,
      accumulatedDepth: 0
    }}

    const leftNodeStats: NodeStats = getNodeStats(node.left)
    const rightNodeStats: NodeStats = getNodeStats(node.right)
    const totalDepth = leftNodeStats.totalDepth + leftNodeStats.nodesInMyTree + rightNodeStats.totalDepth + rightNodeStats.nodesInMyTree

    return {
      nodesInMyTree: leftNodeStats.nodesInMyTree + rightNodeStats.nodesInMyTree + 1,
      totalDepth: totalDepth,
      accumulatedDepth: leftNodeStats.accumulatedDepth + rightNodeStats.accumulatedDepth + totalDepth
    }
  }

  const stats: NodeStats = getNodeStats(root)
  return stats.accumulatedDepth
}

const root = new BinaryTree(1)
root.left = new BinaryTree(2)
root.left.left = new BinaryTree(4)
root.left.left.left = new BinaryTree(8)
root.left.left.right = new BinaryTree(9)
root.left.right = new BinaryTree(5)
root.right = new BinaryTree(3)
root.right.left = new BinaryTree(6)
root.right.right = new BinaryTree(7)
const actual = allKindsOfNodeDepths(root)
console.log(actual)


