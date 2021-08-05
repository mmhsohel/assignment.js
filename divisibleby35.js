function isdivisible(number) {
	var sum = 0
for (let i = 1; i<= number; i++) 
 {
	
if (i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0) {
  console.log(i)
  sum = sum + i
 
}

}	
return sum
}

var queen = isdivisible(100)
console.log(queen)
