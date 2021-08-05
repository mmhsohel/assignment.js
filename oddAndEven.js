function evenAndodd(arrnumber) {
	if (arrnumber % 2 == 0) {
		console.log(arrnumber, " is even number")
	}

	else console.log(arrnumber, " is odd number");
}


function loops(sohel) {
	for (let i = 0; i < sohel.length; i++) {
		const evenodd = sohel[i];
		evenAndodd(evenodd)
	}
}

var my_friend = [ 3, 5, 6, 8, 10]
loops(my_friend)

var friends = [ 11, 13, 14, 16]
loops(friends)

var bfandgf = [20, 23, 24, 27]
loops(bfandgf)