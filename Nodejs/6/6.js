const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        fs.readFile("./public/6/6.html", "utf8", (err, data) => {
          res.writeHead(200,{'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      } else if (req.url === "/6.css") {
        fs.readFile("./public/6/6.css", "utf8", (err, data) => {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(data);
          res.end();
        });
      } else if (req.url === "/6.js") {
        fs.readFile("./public/6/6.js", "utf8", (err, data) => {
          res.write(data);
          res.end();
        });
      } else if (req.url.match(".png$")) {
        let image_path = path.join(__dirname, "public/6", req.url);
        console.log(__dirname);
        let fileStream = fs.createReadStream(image_path);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
      } else {
        res.write("Bad Req");
        res.end();
      }
    }
  })
  .listen(8000);
console.log("Server started on port 8000 ...");
