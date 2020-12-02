type SpecialArray = Array<number | SpecialArray>;

export function productSum(array: SpecialArray, factor: number = 1) {
  let total = 0
  for (const element of array) {	
		if (Array.isArray(element)) {
			total += (productSum(element, factor + 1))
		} else {
			total += element
		}
	}
	return total * factor
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))