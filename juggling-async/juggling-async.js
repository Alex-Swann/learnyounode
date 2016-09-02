var http = require('http');

var arr = [];
var count = 0;
var ARGV_IGNORE = 2;


function httpGet(index){
  http.get(process.argv[index + ARGV_IGNORE], function(res){
    var body = '';

    res.setEncoding('utf8').on('data', function(data){
      body += data;
    });

    res.on('end', function(){
      arr[index] = body;
      count++
      if(count == process.argv.length - ARGV_IGNORE){
        for(var i = 0; i < arr.length; i++){
          console.log(arr[i]);
        }
      }
    })

    res.on('error', function(err){
      console.log(err);
    });
  });

}

  for(var i = 0; i < process.argv.length - ARGV_IGNORE; i++){
    httpGet(i);
  }
