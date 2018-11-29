var spreadsheetURL = "";
var bannerFolder = "/";

var http = require('http');
var fs = require('fs');
var express = require('express');
var Blob = require('blob');
var FileSaver = require('file-saver');

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
	    res.end();	
	})
    
}).listen(8080);


// var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "hello world.txt");

/*var app = express();
app.set('view engine', 'html');
app.get('/', function(req,res) {
	res.render('index.html', {
		title : 'DYM MKT Webform', 
		message : "Testing Express"
	});
});
var server = app.listen(8080, function() {

})

*/