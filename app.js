// importing necessary modules

const fs = require ( 'fs' )
const calcComp = require( __dirname + "/calcComp")
const parseData = require( __dirname + "/parse-file-reader" )

// Read the customer data json

// parseData( "/customers/customers.json", function ( data ) { 
// 	calcComp ( data ) 
// })

parseData( __dirname + "/customers", function ( data ) {
	calcComp ( data )
	// console.log( typeof(data) )
} )

	 //, function ( data ) {
	// console.log( data )
// })

// fs.readdir ( __dirname + "/customers", 'utf8', function (err, data) {
// 	if (err) {
// 		console.log(err)
// 		throw err
// 	}
// 	for ( i = 0 ; i < data.length ; i++) {
// 		console.log ( data[i] )
// 	}
// })

