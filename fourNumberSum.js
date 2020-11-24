function fourNumberSum(array, targetSum) {
  let hash = {}
  let correctSumsHash = {}

  const loadHash = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let n = 0; n < array.length; n++) {
        if (i === n) {continue}
        const thisPair = [Math.min(array[i], array[n]), Math.max(array[i], array[n])]
        const diff = targetSum - (array[i] + array[n])

        if (hash.hasOwnProperty(diff) && hash[diff].filter((pair) => {
            return (pair.toString() == thisPair.toString())
          }).length === 0) {
          hash[diff].push(thisPair)
        } else {
          hash[diff] = [thisPair]
        }
      }
    }
  }

  loadHash(array)
  
  for (const key in hash) {
    if (key * 2 <= targetSum && hash.hasOwnProperty(targetSum - key)) {
      for (const thisPair of hash[key]) {
        for (const otherPair of hash[targetSum - key]) {
          const bothPairs = [...thisPair, ...otherPair].sort()
          const bothPairsKey = bothPairs.join('')          
          if (!correctSumsHash.hasOwnProperty(bothPairsKey)) {
            if ( otherPair[1] != thisPair[1] && 
              otherPair[1] != thisPair[0] && 
              otherPair[0] != thisPair[1] && 
              otherPair[0] != thisPair[0]) { 
                correctSumsHash[bothPairsKey] = bothPairs 
            }
          }
        }         
      }
    } 
  }

  return Object.values(correctSumsHash)
}

const array = [7, 6, 4, -1, 1, 2]
const targetSum = 16

const winningQuads = fourNumberSum(array, targetSum)
console.log(winningQuads)

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
