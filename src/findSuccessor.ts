export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree): BinaryTree | null {
  const inOrderNodes: BinaryTree[] = []
  const inOrderTraversal = (findNode: BinaryTree | null): void => {
    if (findNode === null) return
    inOrderTraversal(findNode.left)
    inOrderNodes.push(findNode)
    inOrderTraversal(findNode.right)
  }

  inOrderTraversal(tree)
  const index: number = inOrderNodes.findIndex((findNode) => findNode === node)
  if (index > -1 && inOrderNodes.length > index + 1) {
    return inOrderNodes[index + 1]
  } else {
    return null
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;
const node = root.left.right;
// const expected = root;
const actual: BinaryTree | null = findSuccessor(root, node);
if (actual) {
  console.log(actual.value)
} else {
  console.log('null')
}
