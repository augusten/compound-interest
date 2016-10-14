// Module creates a json file

const fs = require("fs")

let writeThis = function ( dataArray ) {
	// creates a JSON file with data given
	let newdata = JSON.stringify(dataArray)
	fs.writeFile( __dirname + '/customerprojections.json', newdata, "utf8", function (mistake) {
		if (mistake) throw mistake
	})
} 

module.exports = writeThis