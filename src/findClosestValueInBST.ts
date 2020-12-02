class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

type Winner = {
  node: BST | null;
  distance: number
}

export function findClosestValueInBst(root: BST, target: number) : number | null {
  const checkNode = (node:BST|null, currentWinner: Winner) => {
    const checkDistance = (currentNode: BST) => {
      const distance = Math.abs(currentNode.value - target)
      if (distance < currentWinner.distance) {
        currentWinner.node = currentNode
        currentWinner.distance = distance
      }
    }

    if (node) {
      if (target === node.value) {
        currentWinner.node = node
        currentWinner.distance = 0
        return node
      } else if (target < node.value) {
        if (node.left) {
          checkDistance(node.left)
          checkNode(node.left, currentWinner)
        } else {
          return null
        }
      } else {
        if (node.right) {
          checkDistance(node.right)
          checkNode(node.right, currentWinner)
        } else {
          return null
        }
      }
    }    
  }

  let overallWinner: Winner = {
    node: new BST(Number.NEGATIVE_INFINITY),
    distance: Number.POSITIVE_INFINITY,
  }
  
  checkNode(root, overallWinner)

  return overallWinner.node && overallWinner.node.value ? overallWinner.node.value : null
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

const closestNodeID = findClosestValueInBst(root, 12)
console.log(closestNodeID)

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;