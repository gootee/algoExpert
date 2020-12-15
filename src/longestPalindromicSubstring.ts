export function longestPalindromicSubstring(string: string): string {
  const array: string[] = string.split('')
  let longestStartIndex: number = -1
  let longestLength: number = 0

  const checkLongest = (length: number, leftIndex: number): void => {
    if (length > longestLength) {
      longestLength = length
      longestStartIndex = leftIndex          
    }
  }

  for (let index = 0; index < array.length; index++) {
    for (let n = 0; n < array.length; n++) {
      const leftIndex: number = index - n
      const rightIndex: number = index + n 

      if (leftIndex >= 0 && array[leftIndex] === array[rightIndex]) {
        checkLongest(1 + (2 * n), leftIndex)
      } else {
        break
      }
    }

    for (let n = 0; n < array.length; n++) {
      const leftIndex: number = index - n
      const rightIndex: number = index + n + 1

      if (rightIndex <= array.length - 1 && array[leftIndex] === array[rightIndex]) {
        checkLongest(2 * (n + 1), leftIndex)
      } else {
        break
      }
    }
  }
  return array.slice(longestStartIndex, longestStartIndex + longestLength).join('')
}

// const subjectString = 'abaxyzzyxf'
const subjectString = "abcdefghfedcbaa"
const test = longestPalindromicSubstring(subjectString)
console.log(test)