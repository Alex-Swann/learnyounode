var http = require('http');

http.get(process.argv[2], function(res){
  res.setEncoding('utf8').on('data', function(e){
    console.log(e);
  });
  res.on('error', function(e){
    console.log(e);
  });
});
