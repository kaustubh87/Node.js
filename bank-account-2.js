var accounts = [];

//Account object
//balance

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
	accounts.forEach(function(user){
		

			if(user.username===username)
			{
				console.log("Account exists");
				matchedAccount = account;
			}
			else
			{
				console.log("Account doesn't exist");
				return undefined;
			}


	});

	return matchedAccount;

}

function deposit(account,amount)
{
	account.balance = account.balance +amount;
	//console.log("You have a balance of " +account.balance);

}


function withdraw(account, amount)
{
	account.balance = account.balance - amount;
	//console.log("You have a balance of " +account.balance);

}

function getBalance(account)
{

	return account.balance;
}



var kvinAccount = createAccount({
	username: 'kvin1087',
	balance: 100

});

deposit(kvinAccount,400);
console.log(getBalance(kvinAccount));
withdraw(kvinAccount, 200);

console.log(getBalance(kvinAccount));

var existingAccount = getAccount('kvin1087');
console.log(getBalance(kvinAccount));

var yaccount = createAccount({
	username: 'Ya12',
	balance:1000

});

console.log(accounts);


