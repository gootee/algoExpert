export function twoNumberSum(array: number[], targetSum: number) {
	const nums: Record<number, boolean> = {}
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

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

