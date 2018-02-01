"use strict";

const PORT = 3000;

// Import http library
const http = require('http');

// Import the fs library
const fs = require('fs');

const cache = {};
cache['openhouse.html'] = fs.readFileSync('openhouse.html');
cache['openhouse.css'] = fs.readFileSync('openhouse.css');
cache['openhouse.js'] = fs.readFileSync('openhouse.js');


function serveIndex(path, res)
{

}


/** @function serveFile
 * Serves the specified file with the provided response object
 * @param {string} path - specifies the file path to read
 * @param {http.serverResponse} res - the http response object
 */
function serveFile(path,res)
{
    fs.readFile(path, function(err, data){
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Server Error: Could not read file");
            return;
        }
        res.end(data);
    })
}


/** @function handleRequest
 * Request handle for our http server
 * @param {http.ClientRequest} req - the http request object
 * @param {http.ServerResponse} res - the http response object
 */
function handleRequest(req, res)
{
    // Map request urls to files
    switch(req.url)
   {
       case '/':
            serveIndex('public',res);
            break;
       case '/openhouse.html':
            //res.end(cache['openhouse.html']);
            serveFile('openhouse.html', res);
            break;
       case '/openhouse.css':
            //res.end(cache['openhouse.css']);
            serveFile('openhouse.css', res);
            break;
       case '/openhouse.js':
            //res.end(cache['openhouse.js']);
            serveFile('openhouse.js', res);
            break;
       default:
            res.statusCode =  404;
            res.end("File Not Found");
   }

}
// Create the web server
var server = http.createServer(handleRequest);

// Start listening on port PORT
server.listen(PORT, function()
{
    console.log("Listening on port " + PORT);
});