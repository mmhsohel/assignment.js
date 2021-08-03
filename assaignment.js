
// kilometerToMeter
function kilometerToMeter(kilometer) {
	
	if (kilometer <= 0) {
		console.log("Error: " + "Please input the positive kilometer")
		
	}
	else {
		var meter = kilometer * 1000;
	}
	

	return meter
}
var meters = kilometerToMeter(-5)
console.log(meters)



// budgetCalculator


function budgetCalculator(watch, phone, laptop) {
	
	if (watch < 0) {

		watchPrice = 0 
		console.log("Error: " + "Please Enter the Positive watch number. " + " negative watch number do not impact in total price")
		
	}
	else { 
		var watchPrice = watch * 50
	}
	
	if (phone < 0) {

		phonePrice = 0 
		console.log("Error: " + "Please Enter the Positive phone number. " + " negative phone number do not impact in total price")
		
	}
	else { 
		var phonePrice = phone * 100
	}

	if (laptop < 0) {

		laptopPrice = 0 
		console.log("Error: " + "Please Enter the Positive laptop number. " + " negative laptop number do not impact in total price")
		
	}
	else { 
		var laptopPrice = laptop * 500
	}

	
	var totalprice = watchPrice + phonePrice + laptopPrice
	return totalprice
}

var number = budgetCalculator(10, -10, 10)
console.log("The Total price is =", number)




// hotelCost

function hotelCost(day) {
	if (day <= 0) {
		var cost0 =  0
		console.log("invalid input day/days, input your day/days again")
		totalCost = cost0
		}
else if (day <= 10) {
	var cost10 = day * 100
	totalCost = cost10
	}
else if  (day <= 20) {
	var cost10 = day * 100
	var remain1spart = day - 10;
	cost20 = remain1spart * 80
	totalCost = cost10 + cost20
} 

else {
	var cost10 = 10 * 100
	var cost20 = 10 * 80
	var remain2ndpart = day - 20;
	var cost30up = remain2ndpart * 50
		totalCost = cost10 + cost20 + cost30up
}
	
	
	return totalCost
}

var stayDays = hotelCost(100)
console.log("Total Hotel Cost is: " , stayDays);

// megaFriend



var arrNames = ["Mohammad_Mojammel", "sohel", "sumaiya", "Nupur", "Morshed", "hafsa" ]
var newNames = arrNames.sort(function largeNames(min, max) {
	return max.length - min.length	
})[0]
console.log(newNames); 





function Senteces(sentence) {
	var nLargeNames = sentence.split(" ")
	var nNames = nLargeNames.sort( function largeNamesnew(min, max) {
		return max.length - min.length
	})
	for (let i = 0; i < nNames.length; i++) {
		
		
	}
	
			 
	}


	var qura = Senteces( " rahun das sujon mia mohammad mojammel chittagong")
	console.log(qura)
	

// var amra = Senteces("I am a student. I read in class five")
// console.log("large Name: ", amra)