// if empty -> initialize, otherwise -> append to file

const fs = require("fs")
// var jsonfile = require('jsonfile')

let writeThis = function ( dataArray ) {
	// creates a JSON file with data given
	var newdata = JSON.stringify(dataArray)
	fs.writeFile( __dirname + '/customerprojections.json', newdata, "utf8", function (mistake) {
		if (mistake) throw mistake
	})
} 

module.exports = writeThis