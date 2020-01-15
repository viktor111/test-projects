const express = require('express');
const PORT = 2020;
const url = 'https://www.ozone.bg/product/sony-playstation-4-slim-1tb-hits-bundle-god-of-war-horizon-zero-dawn-the-last-of-us/';

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

const app  =  express();
app.set('view engine', 'jade');



app.use('/' , (req, res) => {
    res.setHeader('200', {'Content-Type': 'text/html'});
    res.render('test');
    res.end();
});

app.use('/get-data',(req, res) => {
    //getInfo();
});

app.listen(2020);