console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();



function createAccount(account){

var acc = storage.getItemSync('accounts');

if(typeof acc === 'undefined')
		{
					acc = [];

		}
		
		acc.push(account);
		storage.setItemSync('accounts', acc);
		return acc;

}

function getAccount(accountName){

	var account = storage.getItemSync('accounts');
	var matchedAccount;

	account.forEach(function(account){
			if(account.name=== accountName)
			{
				matchedAccount = account;
			}

	});

	return matchedAccount;

}

//createAccount({
	//name : 'Facebook',
	//username :'kvin@gmail.com',
//	password: 'Password123'

//});

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);