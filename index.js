const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if(req.url == "/"){
        fs.readFile("./index.html", (err, data) =>{
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        })
    }else if(req.url == "/greenwich"){
        fs.readFile("./greenwich.html", (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        })
    }else if(req.url == "/cloud.html"){
        fs.readFile("./cloud.html", (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        })
    }
    res.write("Welcome!!");
    res.end("<h1>Heroku deployment tutorial</h1>");
  })
  .listen(process.env.PORT || 3000);
