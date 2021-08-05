function inputletter(letter) {
	letter = letter.toLowerCase()
	switch(letter) { 

		case 'a' :
		case 'e' :
		case 'i' :
		case 'o' :
		case 'u' :
		console.log( letter, " is vowel")
		break;

		case 'b' :
		case 'c' :
		case 'd' :
		case 'f' :
		case 'g' :
		case 'h' :
		case 'j' :
		case 'k' :
		case 'l' :
		case 'm' :
		case 'n' :
		case 'p' :
		case 'q' :
		case 'r' :
		case 's' :
		case 't' :
		case 'v' :
		case 'w' :
		case 'x' :
		case 'y' :
		case 'z' :
		console.log(letter, " is consonant")
		break;

		default : 
		console.log(letter, " is not a valid letter")
	}
	
	
}
var lettte = inputletter('F')
var lettte = inputletter('2')
var lettte = inputletter('a')
var lettte = inputletter('Fg')
var lettte = inputletter('Fe')
var lettte = inputletter('.')
var lettte = inputletter('d')
var lettte = inputletter('u')
var lettte = inputletter('Fd')
