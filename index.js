const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    console.log(`Looking for route ${request.url}`);
    
    if(request.url === '/') {
        response.writeHead(200, { 'Content-Type' : 'text/html'});
        const readStream2 = fs.createReadStream(__dirname + '/index.html', 'utf8');
        readStream2.pipe(response);
    } else if(request.url === '/users') {
        response.writeHead(200, { 'Content-Type' : 'application/json'});
        const obj = [
            {
                name: 'Flo',
                email: 'flo@me.com'
            },
            {
                name: 'Josh',
                email: 'Josj@me.com'
            }
        ];
        response.end(JSON.stringify(obj));
    } else if(request.url === '/text') {
        response.writeHead(200, { 'Content-Type' : 'text/plain'});
        const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
        readStream.pipe(response)
    } else if(request.url === '/about') {
        response.writeHead(200, { 'Content-Type' : 'text/html'});
        const readSteam3 = fs.createReadStream(__dirname + '/about.html', 'utf8');
        readSteam3.pipe(response);
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html'});
        const readSteam4 = fs.createReadStream(__dirname + '/error.html', 'utf8');
        readSteam4.pipe(response);
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});