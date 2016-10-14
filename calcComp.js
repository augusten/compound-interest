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
		customer.pension.endamount.pessimistic *= customer.pension.interest.pessimistic
		customer.pension.endamount.average	   *= customer.pension.interest.average
		customer.pension.endamount.optimistic  *= customer.pension.interest.optimistic
	}
	// output our data
	
	callback ( customer )
	// console.log([customer]) 
	// callback( [customer] )
	// console.log (typeof(customer))
	// console.log ( "welcome, " + customer.name + ", to our advanced pension plan")
	// console.log( "you are starting with " + customer.finances.startcapital + " and add a monthly amount of " + customer.finances.monthlyadd)
	// console.log( "when you retire at age " + customer.pension.age + " you will have the following:")
	// console.log( "In a pessimistic scenario: " + prettyNr( customer.pension.endamount.pessimistic ) + " euros")
	// console.log( "In an average scenario: " + prettyNr( customer.pension.endamount.average ) + " euros")
	// console.log( "In a optimistic scenario: " + prettyNr( customer.pension.endamount.optimistic ) + " euros\n")
}



module.exports = calcCompound