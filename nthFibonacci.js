function getNthFib(n) {
	let fibNums = [0, 1]
	for (let i=1; i<=n; i++) {
		fibNums.push(fibNums[i] + fibNums[i-1])
	}
	return fibNums[n-1]
}
