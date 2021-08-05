function issqure(n) {
	var sum = 0;
	for (let i = 3; i <= n; i = i+3) {
	console.log(i)
		sum = sum + (i*i)
		
	}
	return sum
}

var squre = issqure(10)
console.log(squre)