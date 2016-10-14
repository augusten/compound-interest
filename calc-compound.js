// File creates a module that calculates compound interest

// helper functions
let roundDecimal = ( number ) => {
	return Math.round ( number * 100 ) / 100
}

let addCommas = ( number ) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let prettyNr = ( number ) => {
	return addCommas( roundDecimal ( number ))
}

// Function to calculate compound interest from a customer object
let calcCompound = ( customer, callback ) => {
	// Set end amount variable and calculate total duration
	customer.pension.endamount = {
		pessimistic: customer.finances.startcapital,
		average: 	 customer.finances.startcapital,
		optimistic:  customer.finances.startcapital
	}
	customer.pension.duration = customer.pension.age - customer.age

	// do the interest math
	for (var i = customer.pension.duration - 1; i >= 0; i--) { // countdown from top to bottom is more efficient than counting form 0 up!!!
		// add monthly spend to all the scenarios
		customer.pension.endamount.pessimistic += ( customer.finances.monthlyadd * 12 )
		customer.pension.endamount.average	   += ( customer.finances.monthlyadd * 12 )
		customer.pension.endamount.optimistic  += ( customer.finances.monthlyadd * 12 )

		// multiply by the interest of all the scenarios
		customer.pension.endamount.pessimistic *= prettyNr( customer.pension.interest.pessimistic )
		customer.pension.endamount.average	   *= prettyNr( customer.pension.interest.average )
		customer.pension.endamount.optimistic  *= prettyNr( customer.pension.interest.optimistic )
	}
	// output our data
	callback ( customer )
}

// Export module
module.exports = calcCompound