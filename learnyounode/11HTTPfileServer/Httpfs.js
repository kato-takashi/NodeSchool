var http = require('http');
var portNumber = process.argv[2];
var filePath = process.argv[3];
var fs = require('fs');

var server = http.createServer(function (req, res) {
      // fsのreadFileを行ってdata.txtを読み込む
	    // fs.readFile(filePath, function (err, data) {
	    //     // res.endでdataの中身を送る
	    //     res.end(data);
	    // });
		   res.writeHead(200, { 'content-type': 'text/plain' })
	      fs.createReadStream(filePath).pipe(res)
    })
    server.listen(portNumber);
// module.exports = function (portNumber) {
	
// }
// 正解
// var http = require('http')
    // var fs = require('fs')

    // var server = http.createServer(function (req, res) {
    //   res.writeHead(200, { 'content-type': 'text/plain' })

    //   fs.createReadStream(process.argv[3]).pipe(res)
    // })

    // server.listen(Number(process.argv[2]))
