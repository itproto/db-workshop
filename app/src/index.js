require('dotenv').config();

var http = require("http");
var port = process.env.PORT || 8080;

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, { 'Content-Type': 'text/plain' });

   // Send the response body as "Hello World"
   response.end('Hello World Final\n');
}).listen(port);