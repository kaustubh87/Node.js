function createAdder(baseNumber){

	

	return function (numberToAdd)
	{
		return baseNumber + numberToAdd;

	}

	

}

var addTen = createAdder(12);
console.log(addTen(3));
console.log(addTen(2));