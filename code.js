/*jslint devel: true */

var bankNotes = [50, 20, 10, 5, 2, 1]
var purchase = {
	amountDue: 0.0,
	amountPaid: 0.0,
	changeDue: 0,
	coinsBack: 0
}
purchase.amountDue = parseFloat(prompt("Amount Due:"))
purchase.amountPaid = parseFloat(prompt("Amount Paid By Customer:"))

if( purchase.amountPaid >= purchase.amountDue ){
	purchase.changeDue = purchase.amountPaid - purchase.amountDue
	//find out the full amount of pounds to pay out
	purchase.changeDue = Math.floor(purchase.changeDue) 	
	var notesBack = []
	var changeBreakdown = ""
	
	
	//Calculate how many 50£ bills and change need to be given 
	if( purchase.changeDue >= bankNotes[0] ){
		notesBack.push(parseInt(purchase.changeDue / bankNotes[0]))
		if((notesBack[0]) >= 1){
			purchase.changeDue -= notesBack[0] * bankNotes[0]
			changeBreakdown = "\n" + notesBack[0] + " 50£ note(s)" + "\n</br>"
		}
	}else{
		//No 50£ notes to give back
		notesBack.push(0)
	} 
	
	if( purchase.changeDue >= bankNotes[1] ){ //20£ bills and change
		notesBack.push(parseInt(purchase.changeDue / bankNotes[1]))
		if((notesBack[1]) >= 1){
			purchase.changeDue -= notesBack[1] * bankNotes[1]
			changeBreakdown += notesBack[1] + " 20£ note(s)" + "\n</br>"
		}
	}else{
		//No 20£ notes to give back
		notesBack.push(0)
	}
	
	if( purchase.changeDue >= bankNotes[2] ){ //10£ bills and change
		notesBack.push(parseInt(purchase.changeDue / bankNotes[2]))
		if((notesBack[2]) >= 1){
			purchase.changeDue -= notesBack[2] * bankNotes[2]
			changeBreakdown += notesBack[2] + " 10£ note(s)" + "\n</br>"
		}
	}else{
		//No 10£ notes to give back
		notesBack.push(0)
	}
	
	
	if( purchase.changeDue >= bankNotes[3] ){ //5£ bills and change
		notesBack.push(parseInt(purchase.changeDue / bankNotes[3]))
		if((notesBack[3]) >= 1){
			purchase.changeDue -= notesBack[3] * bankNotes[3]
			changeBreakdown += notesBack[3] + " 5£ note(s)" + "\n</br>"
		}
	}else{
		//No 5£ notes to give back
		notesBack.push(0)
	}
	
	if( purchase.changeDue >= bankNotes[4] ){ //2£ bills and change
		notesBack.push(parseInt(purchase.changeDue / bankNotes[4]))
		if((notesBack[4]) >= 1){
			purchase.changeDue -= notesBack[4] * bankNotes[4]
			changeBreakdown += notesBack[4] + " 2£ note(s)" + "\n</br>"
		}
	}else{
		//No 2£ notes to give back
		notesBack.push(0)
	}
	
	if( purchase.changeDue >= bankNotes[5] ){ //1£ bills and change
		notesBack.push(parseInt(purchase.changeDue / bankNotes[5]))
		if((notesBack[5]) >= 1){
			purchase.changeDue -= notesBack[5] * bankNotes[5]
			changeBreakdown +=  notesBack[5] + " 1£ note(s)" + "\n</br>"
		}
	}else{
		//No 2£ notes to give back
		notesBack.push(0)
	}
	
	console.log("The change breakdown to the customer is as follows: \n\n" + changeBreakdown + "\nTotal back to customer: " + parseInt(purchase.amountPaid - purchase.amountDue))
	document.getElementById("changeBreakdown").innerHTML = changeBreakdown + "\n</br>Total back to customer: " + parseInt(purchase.amountPaid - purchase.amountDue) + " pound(s)."
}else{
	var shortBy = parseFloat(purchase.amountDue - purchase.amountPaid).toFixed(2);
	console.log("The customer is short by " + shortBy )
}

