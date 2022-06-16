/*jslint devel: true */
//Help the cashier coding challenge. Create a cashier program that prompts for the amount due and then the amount paid by customer. Print a breakdown of the change using British pound notation.
//Banknotes:
//£50 - £20 - £10 - £5
//Coins:
//£2 - £1 - 50p - 20p -10p -5p -2p -1p

var bankNotes = {50, 20, 10, 5}
var purchase = {
	amountDue: 0.0,
	amountPaid: 0.0,
	changeDue: 0.0  
}
purchase.amountDue = parseFloat(prompt("Amount Due:"))
purchase.amountPaid = parseFloat(prompt("Amount Paid By Customer:"))
purchase.changeDue = amountPaid - amountDue

if( amountPaid >= amountDue ){
	var fullPounds = Math.floow(changeDue)
	
	console.log("The change owed to the customer is " + changeDue.toFixed(2))
}else{
	console.log("The customer is short by " + (parseFloat(amountDue - changeDue)).toFixed(2))
}

