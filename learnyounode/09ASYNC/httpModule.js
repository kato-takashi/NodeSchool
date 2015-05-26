var http = require('http');

// var url = "http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F"
var url1 = 'http://api.b.st-hatena.com/entry.count?url=http%3A%2F%2Fwww.hatena.ne.jp%2F',
	url2 = 'http://api.b.st-hatena.com/entry.count?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&callback=MyCallbackFunction',
	url3 = 'http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F';

// module.exports = function (url) {
// 	http.get(url, function(res){
// 		var body = '';
// 		res.setEncoding('utf8');
// 		res.on('data', function(chunk){
// 			body += chunk;
// 		});

// 		res.on('end', function(res){
// 			// ret = JSON.parse(body);
// 			console.log(body);
// 		});
// 	}).on('error', function(e){
// 		console.log(e.message); //エラー時
// 	});
// }

var strArr = [];

function getHttp(url){
	http.get(url, function(res){
		var body = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk){
			body += chunk;
		});

		res.on('end', function(res){
			// ret = JSON.parse(body);
			// console.log(body);
			strArr.push(body);
			// console.log(strArr);
			
		});
	}).on('error', function(e){
		console.log(e.message); //エラー時
	});
	
}

function three (callback){
	getHttp(url1);
	callback();
	console.log(3);
}

function two(callback){
	return function(){ 
		getHttp(url2);
		callback(); 
		console.log(2);
	};	
}

function one(){		
	return function(){ 
		getHttp(url3);
		console.log(1);
	};
}
three(two(one()));
