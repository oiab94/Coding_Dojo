for (let index = 1; index < 101; index++) {
	if (index % 3 == 0)
		if (index % 5 == 0) console.log('FizzBuzz');
		else console.log('Fizz');
	
	if (index % 5 == 0) console.log('Buzz');
	
	console.log(index);
}