const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: "Home Page" }));
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: "Project Page" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: "Page not found" }));
  }
});
port = 3000;
server.listen(port, () => console.log("Server is running on port", port));
