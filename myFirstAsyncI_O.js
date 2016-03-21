var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(error, fileData) {
	if (error) {
		throw error;
	}
	var arraySubstrings = fileData.split('\n');
	console.log(arraySubstrings.length - 1);
});
	