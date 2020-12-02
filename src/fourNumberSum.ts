type Pair = [number, number] 

interface Hash {
  [key: number]: Pair[];
}

interface CorrectSum {
  [key: string]: number[]
}

export function fourNumberSum(array: number[], targetSum: number) {
  let hash: Hash = {}
  let correctSumsHash: CorrectSum = {}

  const loadHash = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
      for (let n = 0; n < array.length; n++) {
        if (i === n) {continue}
        const thisPair: Pair = [Math.min(array[i], array[n]), Math.max(array[i], array[n])]
        const diff: number = targetSum - (array[i] + array[n])

        if (hash.hasOwnProperty(diff) && hash[diff].filter((pair) => { return (pair.toString() == thisPair.toString()) }).length === 0) {
          hash[diff].push(thisPair)
        } else {
          hash[diff] = [thisPair]
        }
      }
    }
  }

  loadHash(array)
  
  for (let key in hash) {
    const keyValue: number = parseInt(key)
    if (keyValue * 2 <= targetSum && hash.hasOwnProperty(targetSum - keyValue)) {
      for (const thisPair of hash[key]) {
        for (const otherPair of hash[targetSum - keyValue]) {
          const bothPairs: number[] = [...thisPair, ...otherPair].sort()
          const bothPairsKey: string = bothPairs.join('')          
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
