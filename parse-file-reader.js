var fs = require("fs")

// function JSONreader ( filename, callback ) {
// 	// the function reads any JSON file and parses it
// 	fs.readFile(__dirname + filename, 'utf8', function(err, data) {
// 		if (err) {
// 			console.log(err)
// 			throw err
// 		}
// 		callback ( JSON.parse ( data ) )
// 	})
// }

function JSONreader ( dirname, callback ) {
	fs.readdir ( dirname, 'utf8', function ( err, data ) {
		for (var i = data.length - 1; i >= 0; i--) {
			// console.log(dirname + "/" + data[i])
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

module.exports = JSONreader