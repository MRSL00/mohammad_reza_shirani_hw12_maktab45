const http = require("http");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      response.setHeader("Content-Type", "text/html");
      response.write("Hello word");
      response.end();
    }
  })
  .listen(5005);

console.log("Server started on port 5005 ...");
