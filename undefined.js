var name;

function greetUser(name)
{
	if(typeof name === "undefined")
	{
		console.log("Hello World");

	}
	else
	{
		console.log("Hello " +name);
	}
}

greetUser('Kvin');

greetUser();