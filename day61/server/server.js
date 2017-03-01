var http = require("http");
var server = http.createServer(function(request, response){
    console.log("I have hit the server");
    response.writeHeader(200,{"content-Type":"text/plain"});
    response.write("I am Amr");
    response.end();
});
server.listen(8080);
console.log("I am running the server")
