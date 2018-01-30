"use strict";
const PORT = 3000;
//import http library
const http = require('http');
const fs = require('fs');
function handleRequest(req, res)
{
    console.log(req.url);
   switch(req.url)
   {
       case '/':
       case '/openhouse.html':
            res.end(fs.readFileSync('openhouse.html'));
            break;
       case '/openhouse.css':
            res.end(fs.readFileSync('openhouse.css'));
            break;
       case '/openhouse.js':
            res.end(fs.readFileSync('openhouse.js'));
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