const http = require('http');
const server = http.createServer().listen(3000, '127.0.0.1');

server.on('request', function (req, res) {
    res.writeHead(200);
    res.write('Hello\n');
    res.end('The end')
})

server.on('listening', function(){
    console.log('Listen: 3000...')
})