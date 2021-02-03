const http = require("http");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      res.write(req.url);
      console.log(req.url);
      res.end();
    }
  })
  .listen(8000);
console.log("Server started on port 8000 ...");
