const http = require('http');

const app = http.createServer((request, response) => {
    if (request.method == 'POST') {
        let body = '';

        request.on('data', (data) => {
            body += data;
        });

        request.on('end', () => {
            const date = (new Date()).toUTCString();

            const headers = Object.keys(request.headers)
                .map((val, i, arr) => {
                    return val + ":" + request.headers[val]
                });
            
                console.log(date + ';' + body + ';' + headers.join(';'))

            response.writeHead(204);
            response.end();
        })
    } else {
        response.writeHead(405, { 'Content-Type': 'text/plain' });
        response.end("Only POST requests are supported!");
    }
});

app.listen(3000);

console.log("Client logger is up on port 3000");