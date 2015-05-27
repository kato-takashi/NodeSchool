var http = require('http');

// var url = "http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F"
// var url1 = 'http://api.b.st-hatena.com/entry.count?url=http%3A%2F%2Fwww.hatena.ne.jp%2F',
// 	url2 = 'http://api.b.st-hatena.com/entry.count?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&callback=MyCallbackFunction',
// 	url3 = 'http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F';

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

module.exports = function (url1, url2, url3) {
var urlArr = [url1, url2, url3];
var resArr = [];
var urlNum =urlArr.length;

	function getHttp(int){
		http.get(urlArr[int], function(res){
			var body = '';
			res.setEncoding('utf8');
			// console.log(urlArr[int]);

			res.on('data', function(chunk){
				body += chunk;
				
				// console.log(resArr);
			});

			res.on('end', function(res){
				// ret = JSON.parse(body);
				// console.log(body);
				resArr[int] = body;

				if(resArr.length === urlNum){
					// resArr.forEach(function(num){
					//     console.log(num);
					// });
					printResults();
				}
			});
		}).on('error', function(e){
			console.log('errorです。' + e.message); //エラー時
		});
		
	}

	for(var i = 0; i < urlNum; i++){
		getHttp(i);
	}

	function printResults () {
	  for (var i = 0; i < urlNum; i++)
		    console.log(resArr[i])
		}
}

// function three (callback){
// 	getHttp(urlArr[0]);
// 	// console.log(3);
// 	callback();
// }

// function two(callback){
// 	return function(){ 
// 		getHttp(urlArr[1]);
// 		// console.log(2);
// 		callback(); 
// 	};	
// }

// function one(){		
// 	return function(){ 
// 		getHttp(urlArr[2]);
// 		// console.log(1);
// 	};
// }

// three(two(one()));


