import { arrayOfProducts } from "./arrayOfProducts";

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

export function flattenBinaryTree(root: BinaryTree): BinaryTree {
  const nodeArray: BinaryTree[] = []

  const flattenToArray = (node: BinaryTree) => {
    if (!node) {return}
    if (node.left) { flattenToArray(node.left)}
    nodeArray.push(node)
    if (node.right) { flattenToArray(node.right)}
  }

  const linkArray = () => {
    for (let index = 0; index < nodeArray.length; index++) {
      const thisNode = nodeArray[index]
      const nextNode = index < nodeArray.length - 1 ? nodeArray[index + 1] : null

      if (nextNode) { thisNode.right = nextNode }
      if (index > 0) { thisNode.left = nodeArray[index - 1] }
    }
  }

  flattenToArray(root)
  linkArray()
  return nodeArray[0]
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.left.right.left = new BinaryTree(7);
root.left.right.right = new BinaryTree(8);

const leftMostNode = flattenBinaryTree(root);
console.log(leftMostNode)
// const leftToRightToLeft = getLeftToRightToLeft(leftMostNode);
// const expected = [4, 2, 7, 5, 8, 1, 6, 3, 3, 6, 1, 8, 5, 7, 2, 4];
