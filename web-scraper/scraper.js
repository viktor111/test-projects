const http = require ('http');
const fs = require('fs');

const PORT = '8080';

const template = `<form method="get" action="/get-data">
<input type="submit">
</form>`;

const getInfo = () => {
    const https = require('https');
    const options = {
        hostname: 'www.ozone.bg',
        port: 443,
        path: '/product/sony-playstation-4-slim-1tb-hits-bundle-god-of-war-horizon-zero-dawn-the-last-of-us/',
        method: 'GET'
    };

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {

            process.stdout.write(d);
        })
    });

    req.on('error', error => {
        console.error(error)
    });

    req.end();
};

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' && req.method === 'GET'){
        getInfo();
        fs.readFile('./index.html', (err, file) =>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(file);
            return  res.end();
        });
    }

});

server.listen(PORT);