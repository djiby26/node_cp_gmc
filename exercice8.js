const { BufferList } = require("bl");
const http = require("http");

const bl = new BufferList();

http
  .get(process.argv[2], (res) => {
    res.on("data", (chunk) => {
      bl.append(chunk);
    });
    res.on("end", () => {
      console.log(bl.length + "\n" + bl.toString());
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
