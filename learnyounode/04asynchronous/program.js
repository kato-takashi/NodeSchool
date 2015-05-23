var fs = require('fs');
var lines = 0;
function countLine() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    lines = fileContents.toString().split('\n').length - 1;
    console.log(lines);
  })
}

countLine();

