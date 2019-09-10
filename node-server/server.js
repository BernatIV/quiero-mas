// server.js

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Bar Fred\n");
});

server.listen(3000, function() {
    console.log('Server is running at 3000')
});

// Tutorial
// https://appdividend.com/2018/03/16/how-to-build-node-js-web-server/