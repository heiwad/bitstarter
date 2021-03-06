var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexBuffer;
  indexBuffer = fs.readFileSync("./index.html");
  response.send(indexBuffer.toString());

});

app.get('/images/personalteleporter-logo.png', function (req, res) {
    var indexBuffer;
    indexBuffer= fs.readFileSync("./images/personalteleporter-logo.png");
    res.send(indexBuffer);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
