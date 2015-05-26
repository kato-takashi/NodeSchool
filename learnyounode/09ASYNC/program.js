
var httpModule = require('./httpModule.js');
var url1 = process.argv[2],
	url2 = process.argv[3],
	url3 = process.argv[4];

httpModule(url1, url2, url3);

/////正解
