// Module for parsing data

const fs = require("fs")

function JSONreader ( dirname, callback ) {
	// the function reads any JSON file from a directory of
	// JSON files and parses them
	fs.readdir ( dirname, 'utf8', function ( err, data ) {
		for (var i = data.length - 1; i >= 0; i--) {
			fs.readFile ( dirname + "/" + data[i], "utf8", function(err, ddata) {
				if (err) {
					console.log(err)
					throw err
				}
				callback ( JSON.parse ( ddata ) )
			})
		}
	})
}

// Export module
module.exports = JSONreader