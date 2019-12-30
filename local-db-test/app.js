var http = require('http');
var fs = require("fs");

try{
http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("Server listening on port 8080");
    res.end();
}
).listen(8080);
console.log("Server listening on port 8080!")
}

catch (err){
throw err
}

let data = {title: "blah",}

fs.readFile("db.json", function(err, buf) {
    console.log(buf);
  });

  fs.writeFile("db.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });