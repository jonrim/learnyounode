var myModule = require('./mymodule');
var dirName = process.argv[2];
var extensionFilter = process.argv[3];
myModule(dirName, extensionFilter, function(err, filesArray) {
	if (err)
		console.error("Error: ", err);
	// for (var i = 0; i < filesArray.length; i++) {
	// 	console.log(filesArray[i]);
	// }
	filesArray.forEach(function(file) {
		console.log(file);
	});
});