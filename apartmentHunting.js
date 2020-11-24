function apartmentHunting(blocks, reqs) {
  let blockProfiles = []
  const blockCount = blocks.length

  const loadBlockProfiles = () => {
    for (let i=0; i<blockCount; i++) {
      const thisBlock = blocks[i]
      let maxDistance = 0

      for (req of reqs) {
        let reqDistance = 0
  
        if (!thisBlock[req]) {
          for (let n=1; n<blockCount; n++) {
            const indexBefore = i - n
            const indexAfter = i + n

            if (indexBefore > -1) {
              const beforeBlock = blocks[indexBefore]
              if (beforeBlock[req]) {
                reqDistance = n
                break
              }
            }

            if (indexAfter < blockCount) {
              const afterBlock = blocks[indexAfter]
              if (afterBlock[req]) {
                reqDistance = n
                break
              }
            }
          }
        }

        maxDistance = reqDistance > maxDistance ? reqDistance : maxDistance
      } 

      blockProfiles.push({...thisBlock, index: i, maxDistance:maxDistance})     
    }
  }

  loadBlockProfiles()
  let sorted = blockProfiles.sort((a, b) => (a.maxDistance > b.maxDistance ? 1 : -1))
  return sorted[0].index
}

const reqs = ["gym", "school", "store"]
const blocks = [
  {"gym": false, "school": true, "store": false},
  {"gym": true, "school": false, "store": false},
  {"gym": true, "school": true, "store": false},
  {"gym": false, "school": true, "store": false},
  {"gym": false, "school": true, "store": true}
]

const optimalBlockIndex = apartmentHunting(blocks, reqs)

console.log("Optimal Index: " + optimalBlockIndex)

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;