const http = require("http");
port = 3000;

const server = http.createServer((req, res) => {
  //   console.log(req);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ data: "Hello world from localhost" }));
});

server.listen(port, () => console.log("Server is running on port: ", port));
