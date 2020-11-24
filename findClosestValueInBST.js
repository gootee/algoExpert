function findClosestValueInBst(root, target) {
  const checkNode = (node, currentWinner) => {
    const checkDistance = (currentNode) => {
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

  let overallWinner = {
    node: null,
    distance: Number.POSITIVE_INFINITY,
  }
  
  checkNode(root, overallWinner)

  return overallWinner.node.value ? overallWinner.node.value : null
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
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