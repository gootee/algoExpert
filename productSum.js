function productSum(array, factor = 1) {
  let total = 0
  for (element of array) {	
		if (Array.isArray(element)) {
			total += (productSum(element, factor + 1))
		} else {
			total += element
		}
	}
	return total * factor
}

// console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
console.log(productSum([1, 2, [3], 4, 5]))

// // Do not edit the line below.
// exports.productSum = productSum;
