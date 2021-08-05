
function isEven(numbers) {
// 	if (numbers % 2 == 0) {
// 		// console.log(numbers, " : is even number");
// 		result = numbers
// 	}
// 	else{ 
// 	// console.log(numbers * -1,  " : is odd numbers");
// 	result = numbers * -1
// }
return numbers*2
}


function loops(sohel) {
	var newArr = []
for (let i = 0; i < sohel.length; i++) {
	const fresult = sohel[i];
	var result = isEven(fresult)
	newArr.unshift(result)
}	
return newArr
}

// var firstItem = [ 1, 2, 3, 4, 5]
var secondItem = [16, 17, 18, 19, 20]
var thirdItem = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
var mojammel = loops(thirdItem)
var mmh = loops(secondItem)
// loops(thirdItem)

var haha = console.log(mojammel);
var hello = console.log(mmh)
var hi = secondItem.concat(thirdItem)
console.log(hi)