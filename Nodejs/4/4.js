const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      res.write("Hello Web Application");
      console.log(req.url);
      res.end();
    } else if (req.url === "/about" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      console.log(req.url);
      res.write("About Me");
      res.end();
    } else if (req.url === "/user" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      console.log(req.url);
      res.write("Show User");
      res.end();
    } else if (req.url === "/content" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      console.log(req.url);
      res.write("Show Content");
      res.end();
    } else if (req.url === "/telegram" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      console.log(req.url);
      res.write("Show Telegram Id");
      res.end();
    } else if (req.url === "/phone" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      console.log(req.url);
      res.write("Show Phone Number");
      res.end();
    } else {
      res.setHeader("Content-Type", "text/html");
      console.log(req.url);
      res.write("NOt Found");
      res.end();
    }
  })
  .listen(3000);
console.log("Server started on port 3000 ...");
