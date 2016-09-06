var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var readstream = fs.createReadStream(process.argv[3]);

  readstream.on('open', function(){
    readstream.pipe(res);
  });

  readstream.on('error', function(err){
    res.end(err);
  })
});

server.listen(process.argv[2]);
