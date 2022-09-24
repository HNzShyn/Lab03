const http = require("http");

// const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>heroku deployment tutorial</h1>");
}).listen(process.env.PORT || 3000);