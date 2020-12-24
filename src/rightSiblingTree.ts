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

export function rightSiblingTree(root: BinaryTree) {
  processNode(root, null, null)
  return root;
}

const processNode = (node: BinaryTree | null, parentNode: BinaryTree | null, isLeft: boolean | null) => {
  if (node === null) return
  const {left, right} = node

  processNode(left, node, true)

  if (parentNode === null) {
    node.right = null
  } else if (isLeft) {
    node.right = parentNode.right
  } else {
    if (parentNode.right === null) {
      node.right = null
    } else {
      node.right = parentNode.right.left
    }
  }

  processNode(right, node, false)
}


  // {"id": "1", "left": "2", "right": "3", "value": 1},
  // {"id": "3", "left": "6", "right": "7", "value": 3},
  // {"id": "7", "left": "14", "right": "15", "value": 7},
  // {"id": "15", "left": null, "right": null, "value": 15},
  // {"id": "14", "left": null, "right": null, "value": 14},
  // {"id": "6", "left": "12", "right": "13", "value": 6},
  // {"id": "13", "left": null, "right": null, "value": 13},
  // {"id": "12", "left": null, "right": null, "value": 12},
  // {"id": "2", "left": "4", "right": "5", "value": 2},
  // {"id": "5", "left": "10", "right": "11", "value": 5},
  // {"id": "11", "left": null, "right": null, "value": 11},
  // {"id": "10", "left": null, "right": null, "value": 10},
  // {"id": "4", "left": "8", "right": "9", "value": 4},
  // {"id": "9", "left": null, "right": null, "value": 9},
  // {"id": "8", "left": null, "right": null, "value": 8}



  //#9
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);  
  root.left.right = new BinaryTree(5);
  root.left.right.left = new BinaryTree(10);
  root.left.right.right = new BinaryTree(11);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.left.left = new BinaryTree(12);
  root.right.left.right = new BinaryTree(13);
  root.right.right = new BinaryTree(7);
  root.right.right.left = new BinaryTree(14);
  root.right.right.right = new BinaryTree(15);







  //#1
  // const root = new BinaryTree(1);
  // root.left = new BinaryTree(2);
  // root.right = new BinaryTree(3);
  // root.left.left = new BinaryTree(4);
  // root.left.right = new BinaryTree(5);
  // root.right.left = new BinaryTree(6);
  // root.right.right = new BinaryTree(7);
  // root.left.left.left = new BinaryTree(8);
  // root.left.left.right = new BinaryTree(9);
  // root.left.right.right = new BinaryTree(10);
  // root.right.left.left = new BinaryTree(11);
  // root.right.right.left = new BinaryTree(12);
  // root.right.right.right = new BinaryTree(13);
  // root.right.left.left.left = new BinaryTree(14);

  const mutatedRoot = rightSiblingTree(root);
  const dfsOrder = getDfsOrder(mutatedRoot, []);
  console.log(dfsOrder)
//   const expected = [1, 2, 4, 8, 9, 5, 6, 11, 14, 7, 12, 13, 3, 6, 11, 14, 7, 12, 13];
//   chai.expect(dfsOrder).to.deep.equal(expected);
// });

function getDfsOrder(tree: BinaryTree, values: number[]) {
  values.push(tree.value);
  if (tree.left !== null) {
    getDfsOrder(tree.left, values);
  }
  if (tree.right !== null) {
    getDfsOrder(tree.right, values);
  }
  return values;
}
