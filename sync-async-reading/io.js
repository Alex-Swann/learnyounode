var fs = require('fs');

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

fs.readFile(process.argv[2], 'utf8', function callback(err, data){
    if(err){
      throw err;
    }
      console.log(data.split('\n').length - 1);
}) ;
