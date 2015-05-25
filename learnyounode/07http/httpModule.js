var http = require('http');
// var url = "http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F"

module.exports = function (url) {
	http.get(url, function(res){
		var body = '';
		res.setEncoding('utf8');

		res.on('data', function(chunk){
			// body += chunk;
			console.log(chunk);
		});

		res.on('end', function(res){
			// ret = JSON.parse(body);
			// console.log(ret);
		});
	}).on('error', function(e){
		console.log(e.message); //エラー時
	});
}

////////////正式な回答

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })