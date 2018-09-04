var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedURL = url.parse(request.url);
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
  
  // If 'listings' path is accessed, send out listingData
  if (parsedURL.pathname == '/listings') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(listingData);
  }
  // Otherwise send 404 Status Code
  else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Bad gateway error');
  }

  response.end();
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
  listingData = data;

  // Start Server
  server.listen(port, function() {
    // Once the server is listening, this callback function is executed
    console.log('Server listening on: http://127.0.0.1:' + port);
  });
});

// Create Server
server = http.createServer(requestHandler);
console.log('Server Created');
