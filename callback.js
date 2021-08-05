function nameclass(name, year, school, college, varcity) {
	console.log("Hi, I am ", name+'.')
	console.log("I am ",  year, "years old" + '.')
	school()
	college()
	varcity()
}
function schoolName1() {
	console.log("My School name is Paraikora Nayantara High School.");
	
}

function schoolName2() {
	console.log("My college name is city college.");
	
}

function schoolName3() {
	console.log("My varcity name is Haji Mohammad Mohsin College.");
	
}


nameclass("sohel", 17, schoolName1, schoolName2, schoolName3)