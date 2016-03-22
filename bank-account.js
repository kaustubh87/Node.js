var account = {
	balance:0
};

function deposit(account,amount)
{
	account.balance = account.balance +amount;
	console.log("You have a balance of " +account.balance);

}


function withdraw(account, amount)
{
	account.balance = account.balance - amount;
	console.log("You have a balance of " +account.balance);

}

function getBalance(account)
{

	return account.balance;
}


deposit(account,400);
withdraw(account, 200);


