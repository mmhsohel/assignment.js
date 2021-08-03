var student = [ 1, 3, 5, 1, 7, 9, 11, 7, 11, 5, 15, 17, 19, 11, 18, 19, 9, 20, 1]
var newstudent = []

for (let i = 0; i < student.length; i++) {
	var element = student[i]
	var index = newstudent.indexOf(element)
	
	if (index == -1) {
		newstudent.push(element)
	}
	
} 
console.log(newstudent)
