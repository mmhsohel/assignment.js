function isPrime(n) {
	if (n <= 1) {
		return "Your number is real number"
		
	}

	for (let i = 2; i < n; i++) {
		
	if (n % i == 0) {
			return "Your number is not prime number" 
		}
		
	}

	return " Your Number is prime number" 
}

var number = isPrime(-15)
console.log(number)