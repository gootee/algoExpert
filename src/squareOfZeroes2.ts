export function squareOfZeroes(matrix: number[][]) {
  const dimension: number = matrix.length
  type Sequence = number[]
  type Tuple = [number, number]
  const zeroSequence: Record<string, Tuple> = {}

  const loadHash = (matrix: Sequence[])  => {
    for (let i = dimension - 1; i >= 0; i--) {
      for (let n = dimension - 1; n >= 0; n--) {
        zeroSequence[`${i}-${n}`] = [
          matrix[i][n] === 0 ? i < dimension - 1 ? zeroSequence[`${i + 1}-${n}`][0] + 1 : 1 : 0,
          matrix[i][n] === 0 ? n < dimension - 1 ? zeroSequence[`${i}-${n + 1}`][1] + 1 : 1 : 0
        ]
      }     
    }
  }

  loadHash(matrix)

  for (let i = 0; i < dimension - 1; i++) {
    for (let n = 0; n < dimension - 1; n++) {
      if (matrix[i][n] === 0 && zeroSequence[`${i}-${n}`][0] > 1 && zeroSequence[`${i}-${n}`][1] > 1) {
        for (let m = 1; m + n < dimension && m + i < dimension; m++) {
          if (zeroSequence[`${i}-${n + m}`][0] > m && zeroSequence[`${i + m}-${n}`][1] > m) {
            return true
          }
        }
      }
    }
  }

  return false;
}

// const testMatrix = [
// 	[1, 1, 1, 0, 1, 0],
// 	[0, 0, 0, 0, 0, 1],
// 	[0, 1, 1, 1, 0, 1],
// 	[0, 0, 0, 1, 0, 1],
// 	[0, 1, 1, 1, 0, 1],
// 	[0, 0, 0, 0, 0, 1],
// ];

const testMatrix = [
  [0, 0, 0, 1], 
  [0, 1, 1, 0], 
  [0, 1, 0, 0], 
  [0, 1, 0, 1]
]

// const testMatrix = [[0, 0], [0, 0]]
// const testMatrix = [
//   [0, 0, 0], 
//   [0, 1, 0], 
//   [0, 1, 0]
// ]

console.log("zero square: " + squareOfZeroes(testMatrix))
