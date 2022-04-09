const http = require('http');
const url = require('url');
const fs = require('fs');
const contact = require('./routes/contact');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' });
    let req_url = url.parse(req.url);
    if (req_url.pathname == '/' ) {
        const stream = fs.createReadStream('./html/index.html');
        stream.on('data', (data) => {
            res.write(data);
        });
        stream.on('close', () => {
            res.end();
        });
    } else if (req_url.pathname == '/contact') {
        contact.route(req,res);
    } else {
        res.writeHead(404);
        const html = fs.readFileSync('./html/404.html');
        res.write(html);
        res.end();
    }
});

server.listen(3333, () => {
    console.log('Listening at localhost:3333');
});



