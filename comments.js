// Create web server

var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
  console.log('request url: ', req.url);
  if (req.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  } else if (req.url.match(/.css$/)) {
    var cssPath = path.join(__dirname, 'public', req.url);
    var fileStream = fs.createReadStream(cssPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);
  } else if (req.url.match(/.jpg$/)) {
    var imgPath = path.join(__dirname, 'public', req.url);
    var imgStream = fs.createReadStream(imgPath);
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    imgStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 File not found');
  }
});

server.listen(3000);
console.log('Server listening on port 3000');