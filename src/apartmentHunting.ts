interface Block {
  [key: string]: boolean | number;
}

export function apartmentHunting(blocks: Block[], reqs: string[]) {
  let blockProfiles: Block[] = []
  const blockCount: number = blocks.length

  const loadBlockProfiles = () => {
    for (let i=0; i<blockCount; i++) {
      const thisBlock: Block = blocks[i]
      let maxDistance: number = 0

      for (const req of reqs) {
        let reqDistance: number = 0
  
        if (!thisBlock[req]) {
          for (let n=1; n<blockCount; n++) {
            const indexBefore: number = i - n
            const indexAfter: number = i + n

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