module.exports = function(dirName, extensionFilter, callback) {
	var fs = require('fs'), path = require('path');
	fs.readdir(dirName, function(err, filesArray) {
		if (err)
			return callback(err);
		// for (var i = 0; i < filesArray.length;) {
		// 	if (path.extname(filesArray[i]) !== "." + extensionFilter) {
		// 		filesArray.splice(i, 1);
		// 	}
		// 	else {
		// 		i++;
		// 	}
		// }
		filesArray = filesArray.filter(function(file) {
			return path.extname(file) === "." + extensionFilter;
		});
		return callback(null, filesArray);
	});
};