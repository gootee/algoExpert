function binarySearch(array, target) {
  const binaryHelper = (startIndex, length) => {
    if (length < 1) { return -1 }

    const medIndex = startIndex + Math.max(0, Math.floor(length/2) - 1)
    const medValue = array[medIndex]

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