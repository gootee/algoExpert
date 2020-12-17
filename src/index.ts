class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number, parent: BinaryTree | null = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

export function iterativeInOrderTraversal(tree: BinaryTree, callback: (node: BinaryTree) => void) {
  let thisNode: BinaryTree | null = tree
  let previousNode: BinaryTree | null = null

  while (thisNode) {
    if (previousNode === thisNode.parent) {
      previousNode = thisNode
      if (thisNode.left) {
        thisNode = thisNode.left
      } else {
        callback(thisNode)
        thisNode = thisNode.right ? thisNode.right : thisNode.parent
      }
    } else if (previousNode === thisNode.left) {
      callback(thisNode)
      previousNode = thisNode
      thisNode = thisNode.right ? thisNode.right : thisNode.parent
    } else {
      previousNode = thisNode
      thisNode = thisNode.parent
    }
  }
}

const root = new BinaryTree(1)
root.left = new BinaryTree(2, root)
root.left.left = new BinaryTree(4, root.left)
root.left.left.right = new BinaryTree(9, root.left.left)
root.right = new BinaryTree(3, root)
root.right.left = new BinaryTree(6, root.right)
root.right.right = new BinaryTree(7, root.right)

const array: number[] = []
function testCallback(tree: BinaryTree | null) {
  if (tree === null) return
  array.push(tree.value)
}

iterativeInOrderTraversal(root, testCallback)

console.log(`callbacks: ${array}`)
