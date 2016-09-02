(function(exports){

  var fs = require('fs'),
      path = require('path');

  var file = function fileFilter(dir, ext, callback){

    fs.readdir(dir, function (err, data){
      if(err){
        return callback(err);
      }

      var filtered = [];

      data.filter(function(obj){
        if (path.extname(obj) === '.' + ext){
          filtered.push(obj);
        }
      });

      return callback(null, filtered);
    })
  }

  module.exports = file;

})(this);
