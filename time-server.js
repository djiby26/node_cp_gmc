const net = require("net");

const server = net.createServer((socket) => {
  const date = new Date();

  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  socket.end(year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n");
});

server.listen(process.argv[2]);
