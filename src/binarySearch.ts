function binarySearch(array: number[], target: number): number {
  const binaryHelper = (startIndex: number, length: number): number => {
    if (length < 1) { return -1 }

    const medIndex: number = startIndex + Math.max(0, Math.floor(length/2) - 1)
    const medValue: number = array[medIndex]

    if (medValue === target) {
      return medIndex
    } else if (medValue < target) {
      return binaryHelper(medIndex + 1, (startIndex + length) - (medIndex + 1)) 
    } else {
      return binaryHelper(startIndex, medIndex - startIndex)
    }
  }

  return binaryHelper(0, array.length)
}

console.log("target index = " + binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))


// Do not edit the line below.
exports.binarySearch = binarySearch;