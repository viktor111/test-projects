const express = require('express'); // import express js library
const app = express(); //create express js instance 
const path = require('path');
 
// define a route to download a file 
app.get('/download/sow.jpg',(req, res) => {
  let file = req.params.filename;
  let fileLocation = path.join('./uploads',file);
  console.log(fileLocation);
  res.send("tvaj mater")
  res.download(fileLocation, file);
});
 
app.listen(8000,() => {
  console.log(`application is running at: http://localhost:8000`);
});