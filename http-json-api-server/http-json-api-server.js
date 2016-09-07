var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res){

  var urlInfo = url.parse(req.url, true),
      pathname = urlInfo.pathname,
      isoDate = Date.parse(urlInfo.query.iso),
      date = new Date(isoDate),
      obj;

      if (pathname === '/api/unixtime') {
        obj = {
          "unixtime": isoDate
        };
      }

      if (pathname === '/api/parsetime') {
        obj = {
          "hour": date.getHours(),
          "minute": date.getMinutes(),
          "second": date.getSeconds()
        };
      }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obj));

});

server.listen(process.argv[2]);

// var http = require('http');
// var url = require('url');
//
// http.createServer(function (req, res) {
//   var urlObj = url.parse(req.url, true),
//       pathname = urlObj.pathname,
//       strtime = urlObj.query.iso,
//       result;
//
//   if (pathname === '/api/unixtime') {
//      result = getUnixTimestamp(strtime);
//   }
//   else if (pathname === '/api/parsetime') {
//     result = getTimeObj(strtime);
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(result));
//   }
//   else {
//     res.writeHead(404);
//     res.end();
//   }
//
// }).listen(process.argv[2]);
//
//
// function getUnixTimestamp(strtime) {
//   return {
//     unixtime: getTimestamp(strtime)
//   };
// }
//
// function getTimestamp(strtime) {
//   return Date.parse(strtime);
// }
//
// function getTimeObj(strtime) {
//   var date = new Date(getTimestamp(strtime));
//
//   return {
//     hour: date.getHours(),
//     minute: date.getMinutes(),
//     second: date.getSeconds()
//   };
// }
