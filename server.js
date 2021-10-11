const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const myURL = new URL('http://localhost:3000/');
const path_1 = myURL.pathname + 'main.html';

const server = http.createServer(async (req,res)=>{
    try {
        await handler(req,res);
    } catch (error) {
        console.log('The site is not responding');
    }
      
});

async function handler(req,res){
    if(req.url == myURL.pathname){
        await __indexload(res);
    }
    else if(req.url == path_1){
        await __mainload(res);
    }
    
}

function __indexload(res){
    fs.readFile('src/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
}

function __mainload(res){
    fs.readFile('src/main.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
  