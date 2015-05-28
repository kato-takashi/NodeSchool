module.exports = function (portNumber) {
	var net = require('net')
	var strftime = require('strftime')

	var date = strftime('%F %H:%M', new Date())

	// console.log('formatDate ' + formatDate);
	var dataStr = String(date);

	var server = net.createServer(function (socket) {
	  // socket handling logic     
	 socket.setEncoding('utf8')
	 // socket.write(dataStr);
		 socket.end(dataStr + '\n');
	})
	server.listen(Number(portNumber));
}
