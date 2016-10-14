// importing necessary modules

const fs = require ( 'fs' )
const calcComp = require( __dirname + "/calcComp")
const parseData = require( __dirname + "/parse-file-reader" )

// Read the customer data json

parseData( "/customers/customers.json", function ( data ) { 
	calcComp ( data ) 
})

