var http = require('http');
// var url = "http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F"
const BufferList = require('bl')

module.exports = function (url) {
	http.get(url, function(res){
		var bl = new BufferList()
		var body = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk){
			body += chunk;
			bl.append(chunk);
		});

		res.on('end', function(res){
			// ret = JSON.parse(body);
			console.log(bl.length);
			console.log(body);
		});
	}).on('error', function(e){
		console.log(e.message); //エラー時
	});
}

