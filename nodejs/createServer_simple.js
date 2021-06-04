var http = require("http");

http.createServer(process).listen(8081);

function process(request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World from createServer_simple.js"
   response.end('Hello World from createServer_simple.js\n');
}

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');