function isValidSubsequence(array, sequence) {
	let sequenceIndex = 0
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
