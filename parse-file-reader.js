var fs = require("fs")

function JSONreader ( filename, callback ) {
	// the function reads any JSON file and parses it
	fs.readFile(__dirname + filename, 'utf8', function(err, data) {
		if (err) {
			console.log(err)
			throw err
		}
		callback ( JSON.parse ( data ) )
	})
}

module.exports = JSONreader