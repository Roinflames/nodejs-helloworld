const http = require("http");
// const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo");
});

server.listen(port, () => {
  console.log(`El servidor TECSOS-TEST se está ejecutando en ${port}`);
});
