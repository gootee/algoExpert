function smallestDifference(arrayOne, arrayTwo) {
  const one = arrayOne.sort((a, b) => a - b)
  const two = arrayTwo.sort((a, b) => a - b)
  const oneCount = one.length
  const twoCount = two.length
  let smallestDiff = Number.POSITIVE_INFINITY
  let smallestPair = []
  let oneIndex = 0, twoIndex = 0, letsContinue = true

  while (letsContinue) {
    const diff = Math.abs(one[oneIndex] - two[twoIndex])

    if (diff < smallestDiff) {
      smallestDiff = diff
      smallestPair = [one[oneIndex], two[twoIndex]]
    }

    if (diff === 0) {
      letsContinue = false
    } else {
      if (one[oneIndex] > two[twoIndex]) {
        twoIndex ++
        letsContinue = twoIndex <= twoCount - 1 ? true : false
      } else {
        oneIndex ++
        letsContinue = oneIndex <= oneCount - 1 ? true : false
      }
    }
  }

  return smallestPair
}

const arrOne = [-1, 5, 10, 20, 28, 3]
const arrTwo = [26, 134, 135, 15, 17]

const winnerPair = smallestDifference(arrOne, arrTwo)

console.log(winnerPair)

// Do not edit the line below.
exports.smallestDifference = smallestDifference;