const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if(req.url === "/"){
        fs.readFile("./index.html", (err, data) =>{
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        })
    }else if(req.url === "/greenwich"){
        fs.readFile("./greenwich.html", (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        })
    }else if(req.url === "/cloud"){
        fs.readFile("./cloud.html", (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.end(data);
                res.end();
            }
        })
    }
  })
  .listen(process.env.PORT || 3000);
