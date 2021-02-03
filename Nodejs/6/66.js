const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res)=> {
    if (req.method === "GET") {
      if (req.url === "/") {
        fs.readFile("./public/6/6.html", "UTF-8", (err, html)=> {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(html);
          res.end();
        });
      } else if (req.url.match(".css$")) {
        let cssPath = path.join(__dirname, "public/6", req.url);
        let fileStreamCss = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStreamCss.pipe(res);
      } else if (req.url.match(".js$")) {
        let jsPath = path.join(__dirname, "public/6", req.url);
        let fileStreamJs = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fileStreamJs.pipe(res);
      } else if (req.url.match(".png$")) {
        let imagePath = path.join(__dirname, "public/6", req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
      } else if (req.url.match(".font$")) {
        let FontPath = path.join(__dirname, "public/form", req.url);
        let fileStreamF = fs.createReadStream(FontPath);
        res.writeHead(200, { "Content-Type": "text/font" });
        fileStreamF.pipe(res);
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
      }
    }
  })
  .listen(3000);
  console.log("Server started on port 3000 ...");