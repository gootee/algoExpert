type Triplet = [number, number, number]

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const winners: Triplet[] = []
  const orderedArr = array.sort((a, b) => { return a < b ? -1 : 1})

  for (let index = 0; index < orderedArr.length; index++) {
    let leftIndex: number = index + 1
    let rightIndex: number = orderedArr.length - 1

    while (leftIndex < rightIndex) {
      const sum = orderedArr[index] + orderedArr[leftIndex] + orderedArr[rightIndex]
      if (sum === targetSum) {
        winners.push([orderedArr[index], orderedArr[leftIndex], orderedArr[rightIndex]])
        leftIndex++
        rightIndex--
      } else {
        if (sum < targetSum) {
          leftIndex++
        } else {
          rightIndex--
        }
      }
    }
  }

  return winners
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))