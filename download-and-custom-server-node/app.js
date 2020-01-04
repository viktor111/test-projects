const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();

app.get('/', function (req, res) {
    const file = `51w7koDjFsL._SX466_.jpg.MOV`;
    res.download(file);
    res.send('Hello World!!');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
