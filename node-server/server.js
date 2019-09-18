// server NODE
/*
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Bar Fred\n");
});

server.listen(3000, function() {
    console.log('Server is running at 3000')
});
*/

// server EXPRESS

var express = require('express');

var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
	res.status(200).send('Bar Yohan');
});

app.get('/login', function(req, res) {
	res.status(400).send('loguejat');
});


app.listen(PORT, function() {
	console.log('Server is running on PORT:',PORT);
})

// Tutorials

// FET https://appdividend.com/2018/03/16/how-to-build-node-js-web-server/
// https://facebook.github.io/react-native/docs/network
