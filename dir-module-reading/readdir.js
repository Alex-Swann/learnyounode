var fs = require('fs'),
    path = require('path');

function filterbyExtension(data){
  if (path.extname(data) === '.' + process.argv[3]){
    console.log(data);
  }
}

fs.readdir(process.argv[2], function callback(err, data){
  if(err){
    throw err;
  }
  return data.filter(filterbyExtension);
})
