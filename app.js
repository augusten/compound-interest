// importing necessary modules

const fs = require ( 'fs' )
const calcComp = require( __dirname + "/calcComp")
const parseData = require( __dirname + "/parse-file-reader" )
const createFile = require ( __dirname + "/appendToFile")

let customerArray = new Array()

parseData( __dirname + "/customers", function ( data ) {
	calcComp ( data, function ( dddata ) {
		customerArray.push( dddata )
		createFile ( customerArray )
		// fs.writeFile( __dirname + '/customerprojections.json', customerArray , function (mistake) {
		// 	if (mistake) throw mistake
		// }) 
	} )
})