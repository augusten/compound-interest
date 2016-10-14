// App to loop over costumer .json files, parse their information, calculate their compound earning and then writing 
// the JSON data into one file

// importing necessary modules

const fs = require ( 'fs' )
const calcComp = require( __dirname + "/calc-compound")
const parseData = require( __dirname + "/parse-file-reader" )
const createFile = require ( __dirname + "/write-json")
const createUsers = require ( __dirname + "/generator")

// Initialize Array for JSON data
let customerArray = new Array()

// Perform the actions to fill in the array
// Steps:
// 1. Parse data of each customer json file
// 2. Calculate their compound interest
// 3. After putting it all into one array, write the file!
parseData( __dirname + "/customers", function ( data ) {
	calcComp ( data, function ( dddata ) {
		customerArray.push( dddata )
		createFile ( customerArray )
	})
})

// create new user
createUsers( process.argv[2], function ( dataArray ) {
	for (var i = dataArray.length - 1; i >= 0; i--) {
		calcComp ( dataArray[i], function ( ddata ) {
			console.log( ddata )
		})
	}
})