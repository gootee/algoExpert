function twoNumberSum(array, targetSum) {
	const nums = {}
	for (const num of array) {
		const target = targetSum - num
		if (target in nums) {
			return [num, target]
		} else {
			nums[num] = true
		}
	}
	return []
}
