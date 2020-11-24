const permutationHelper = (array, currentPermutation, allPerms) => {
  if (!array.length && currentPermutation.length) {
    allPerms.push(currentPermutation)
  } else {
    for (let i=0; i<array.length; i++) {
      const theRest = array.slice(0,i).concat(array.slice(i+1))
      const subject = array[i]
      permutationHelper(theRest, currentPermutation.concat(subject), allPerms)
    }
  }
}

const getPermutations = (array) => {
  let allPerms = []

  permutationHelper(array, [], allPerms)

  return allPerms
}



























// const permutationsHelper = (array, currentPerm, perms) => {
//   if (!array.length && currentPerm.length) {
//     perms.push(currentPerm);
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       const newArray = array.slice(0, i).concat(array.slice(i + 1));
//       const newPermutation = currentPerm.concat(array[i]);
//       permutationsHelper(newArray, newPermutation, perms);
//     }
//   }
// };

// function getPermutations(arr) {
//   const permutations = [];

//   permutationsHelper(arr, [], permutations);

//   return permutations;
// }

console.log(getPermutations([1, 2, 3]));