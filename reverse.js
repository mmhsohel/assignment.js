// var char = "I am a student"
// var reverse = ""
// for (let i = 0; i < char.length; i++) {
	
// 	var newword = char[i]
// 	reverse = newword + reverse
// }
// console.log(reverse)


function reverses(letter) {
	var reverse = ""
	for (let i = 0; i < letter.length; i++) {
		
		var newletter = letter[i]
		reverse = newletter + reverse
		
	}
	return reverse
}
var haha = reverses ("Love YOu Sumaiya")
console.log(haha)