const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url === "/json" && request.method === "GET") {
      response.setHeader("Content-Type", "application/json");
      fs.readFile("./public/users.json", "utf8", (err, msg) => {
        if (err) return console.log(err.message);
        response.write(msg);
        response.end();
      });
    }
  })
  .listen(5005);
console.log("Server started on port 5005 ...");

