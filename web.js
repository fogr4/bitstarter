var fs = require('fs');
var buffer1
var buffer2
var express = require('express');
var app = express();
app.use(express.logger());

buffer = fs.readFileSync('index.html');
buffer2 = buffer.toString('utf8');

app.get('/', function(request, response) {
  response.send(buffer2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

