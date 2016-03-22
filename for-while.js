//var i =0;
//var countLimit = 10;


/*
while(i<countLimit)
{

	console.log('while: ' +i);
	i++;
}

for(i=0;i<countLimit;i++)
{
	console.log('for: ' +i);
}
*/

function countDownFor(startingPoint, stoppingPoint){

	for(var i = stoppingPoint; i>=startingPoint; i--)
	{
		console.log('countDownFor: ' +i);
	}

}

function countDownWhile(startingPoint,stoppingPoint)
{
	var i = stoppingPoint;
	while(i >= startingPoint)
	{
		console.log('countDownWhile: ' +i);
		i = i-1;

	}
}


countDownFor(10,20);
countDownWhile(10,20);

