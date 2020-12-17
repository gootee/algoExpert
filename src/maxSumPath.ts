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

export function maxPathSum(tree: BinaryTree) {
  const getMaxPath = (node: BinaryTree): number => {
    const leftSum: number = node.left ? getMaxPath(node.left) : 0
    const rightSum: number = node.right ? getMaxPath(node.right) : 0
    maxPathValue = Math.max(maxPathValue, node.value + leftSum + rightSum)
    return Math.max(node.value + Math.max(leftSum, rightSum), 0)      
  }

  let maxPathValue: number = Number.NEGATIVE_INFINITY
  getMaxPath(tree)
  return maxPathValue
}

const theInserts = [2, 3, 4, 5, 6, 7]
// const theInserts = [2, -1]
const test = new BinaryTree(1).insert(theInserts);
const maxPath = maxPathSum(test)
console.log(`max path = ${maxPath}`)