type Permutation = number[]

export function getPermutations(array: number[]) {
  let allPerms: Permutation[] = []

  permutationHelper(array, [], allPerms)

  return allPerms
}

const permutationHelper = (array: number[], currentPermutation: number[], allPerms: Permutation[]) => {
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

console.log(getPermutations([1, 2, 3]))