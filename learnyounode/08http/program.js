
var httpModule = require('./httpModule.js')
var url = process.argv[2]

httpModule(url);

/////正解
// var http = require('http')
//     var bl = require('bl')

//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })