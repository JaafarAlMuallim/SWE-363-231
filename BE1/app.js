const http = require("http");
const PORT = 2;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
