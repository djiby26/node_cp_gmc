const http = require("http");
const fs = require("fs");

const args = process.argv;

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(args[3]);
  stream.pipe(res);
});

server.listen(args[2]);
