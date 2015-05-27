
var httpModule = require('./async.js');
var url1 = process.argv[2],
	url2 = process.argv[3],
	url3 = process.argv[4];
// var url1 = 'http://api.b.st-hatena.com/entry.count?url=http%3A%2F%2Fwww.hatena.ne.jp%2F',
// 	url2 = 'http://api.b.st-hatena.com/entry.count?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&callback=MyCallbackFunction',
// 	url3 = 'http://api.b.st-hatena.com/entry.counts?url=http%3A%2F%2Fwww.hatena.ne.jp%2F&url=http%3A%2F%2Fb.hatena.ne.jp%2F';

// var urlArr = [url1, url2, url3];
httpModule(url1, url2, url3);


/////正解
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)