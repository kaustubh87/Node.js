var accounts = [];

var account = {
	balance:0,
	username:''
};

function createAccount(account){
	accounts.push(account);
	
	return account;
}

function getAccount(username){

	var matchedAccount;
	for(var i=0; i<accounts.length;i++)
	{
	
			if(accounts[i]===username)
			{
				console.log("Account exists");
				matchedAccount = accounts[i];
			}
			else
			{
				console.log("Account doesn't exist");
				return undefined;
			}

	}

	return matchedAccount;
}

function deposit(account,amount)
{
	if(typeof amount == 'number')
	{
	account.balance = account.balance + amount;
	//console.log("You have a balance of " +account.balance);
	}
	else
	{
		console.log('Deposit not accepted');
	}
}

function withdraw(account, amount)
{
	if(typeof amount == 'number')
	{
	account.balance = account.balance - amount;
	//console.log("You have a balance of " +account.balance);
	}
	else
	{
		console.log('Withdraw not accepted');
	}
}

function getBalance(account)
{

	return account.balance;
}


function createBalanceGetter(account){

	return function(){

		return account.balance;
	}

}

var kvin = createAccount({

	username: 'Kaustubh',
	balance : 0


});

deposit(kvin, 1000);
//withdraw(kvin,'my String');

var kvin = getAccount('kvin');

var getKvin2Balance = createBalanceGetter(kvin);
console.log(getKvin2Balance());




