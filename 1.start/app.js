const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});//'text/plain' не обрабатывает html разметку;
    res.write('Hello World\n');
    fs.readFile('index.html', function(err, content){
    	res.write(decodeURIComponent(content));
    	res.end();
	})
}).listen(3000,'127.0.0.1');