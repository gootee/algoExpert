class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const getBranchSum = (node, sums) => {
    let subNodes = false
    if (node.left) {
      subNodes = true
      let localSums = []
      getBranchSum(node.left, localSums)
      for (let i=0; i<localSums.length; i++) {
        sums.push(parseInt(localSums[i]) + parseInt(node.value))
      }
    }   

    if (node.right) {
      subNodes = true
      let localSums = []
      getBranchSum(node.right, localSums)
      for (let i=0; i<localSums.length; i++) {
        sums.push(parseInt(localSums[i]) + parseInt(node.value))
      }
    } 

    if (!subNodes) {
      sums.push(parseInt(node.value))
    }
  }

  let sums = []
  getBranchSum(root, sums)
  return sums
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.left.right.left = new BinaryTree(10);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

// let root = new BinaryTree(0);
// root.right = new BinaryTree(1);
// root.right.right = new BinaryTree(10);
// root.right.right.right = new BinaryTree(100);

const branchSumsArr = branchSums(root)
console.log(branchSumsArr)

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
