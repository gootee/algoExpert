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

export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (tree) { 
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (tree) { 
    array.push(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  }
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (tree) { 
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }
  return array;
}

const root = new BST(10)
root.left = new BST(5)
root.left.left = new BST(2)
root.left.left.left = new BST(1)
root.left.right = new BST(5)
root.right = new BST(15)
root.right.right = new BST(22)
const inOrder: number[] = inOrderTraverse(root, [])
// [1, 2, 5, 5, 10, 15, 22]
const preOrder: number[] = preOrderTraverse(root, [])
//[10, 5, 2, 1, 5, 15, 22]
const postOrder: number[] = postOrderTraverse(root, [])
//[1, 2, 5, 5, 22, 15, 10]
