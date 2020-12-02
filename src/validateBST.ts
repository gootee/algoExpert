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

export function validateBst(tree: BST) {
  const validateNode = (node: BST | null, min: number, max: number): boolean => {
		if (node == null) { return true }
    if (node.value < min || node.value >= max) { return false }

    const leftOK: boolean = validateNode(node.left, min, node.value)
    return leftOK && validateNode(node.right, node.value, max)
  }

  return validateNode(tree, -Infinity, Infinity)
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

console.log("validity = " + validateBst(root))

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;