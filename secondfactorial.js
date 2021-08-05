function factorial(n) {
	var sum = 1;
	for (let i = 1; i <= n; i++) {
	sum = sum * i

	}
	return sum;
}

var facto = factorial(3)
console.log(facto)