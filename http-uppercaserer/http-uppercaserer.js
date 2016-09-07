var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var body = '';

  if (req.method === 'POST'){
    req.on('data', function(data){
      body += data;
    });

    req.on('end', function(){
      res.write(body.toUpperCase());
    });
  };

});

server.listen(process.argv[2]);
