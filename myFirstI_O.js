var fs = require('fs');
var fileContents = fs.readFileSync(process.argv[2]);
var str = fileContents.toString();
var arraySubstrings = str.split('\n');
console.log(arraySubstrings.length - 1);