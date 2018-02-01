"use strict";
const PORT = 3000;
//import http library
const http = require('http');
const fs = require('fs');
const cache = {};
cache['openhouse.html'] = fs.readFileSync('openhouse.html');
cache['openhouse.css'] = fs.readFileSync('openhouse.css');
cache['openhouse.js'] = fs.readFileSync('openhouse.js');
function handleRequest(req, res)
{
    console.log(req.url);
   switch(req.url)
   {
       case '/':
       case '/openhouse.html':
    
            res.end(cache['openhouse.html']);
            break;
       case '/openhouse.css':
            res.end(cache['openhouse.css']);
            break;
       case '/openhouse.js':
            res.end(cache['openhouse.js']);
            break;
       default:
            res.statusCode =  404;
            res.end("File Not Found");
   }

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
console.log("Listening on port " + PORT);
});