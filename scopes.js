var age = 24;

function insideLocal(){

	var age = 100;

	age = 0;
}

insideLocal();
console.log(age);