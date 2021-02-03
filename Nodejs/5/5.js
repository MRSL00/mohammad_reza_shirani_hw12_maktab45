const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      fs.readFile("./public/5.html", "utf8", (err, data) => {
        res.write(data);
        res.end();
      });
    }
  })
  .listen(8000);
  console.log("Server started on port 8000 ...");