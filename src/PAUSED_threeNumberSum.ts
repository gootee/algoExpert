type Triplet = [number, number, number]
type Twin = [number, number]

type TwinObj = Record<string, boolean>

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const triplets: Triplet[] = []
  // let twins: Record<number, Twin[]>  = {}
  let twins: Record<number, TwinObj>  = {}

  const loadTwinValues = () => {
    for (let i=0; i<array.length; i++) {
      for (let n=0; n<array.length; n++) {
        if (i === n) { continue }

        const sum: number = array[i] + array[n]
        let twin: Twin = [array[i], array[n]].sort() as Twin

        if (twins.hasOwnProperty(sum)) {
          // const twinString: string = new String(twin).toString()
          const twinString: string = twin.toString()
          // const theseTwins = twins[twinString]

        } else {
          const twinString: string = twin.toString()
          twins[sum] =  {twinString: true}
        }
      }
    }
  }

  loadTwinValues()

  //loop array
    //if twins
      // create triplets
    // else


  if (triplets.length > 0) {
    return triplets
  } else {
    return [[-1, -1, -1]]
  }
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))

// [
//   [-8, 2, 6],
//   [-8, 3, 5],
//   [-6, 1, 5],
// ]
