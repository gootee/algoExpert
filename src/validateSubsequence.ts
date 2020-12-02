export function isValidSubsequence(array: number[], sequence: number[]) {
	let sequenceIndex: number = 0
  for (let i=0; i<array.length; i++) {
		if (sequence[sequenceIndex] === array[i]) {
			if (sequenceIndex === sequence.length - 1) {
				return true
			} else {
				sequenceIndex ++
			}
		}
	}
	return false
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence))
