export function findThreeLargestNumbers(array: number[]) {
  let threeHighest: [number, number, number] = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]

  for (const num of array) {
    for (let index = 2; index >= 0; index--) {
      if (threeHighest[index] < num) {
        if (index > 0 ) { 
          if (index === 2 && threeHighest[1] != null) { threeHighest[0] = threeHighest[1]}
          threeHighest[index - 1] = threeHighest[index] 
        }
        threeHighest[index] = num
        break
      }
    }
  }

  return threeHighest
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))

exports.findThreeLargestNumbers = findThreeLargestNumbers;