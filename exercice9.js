const { BufferList } = require("bl");
const http = require("http");

const urls = process.argv.slice(2);
const bl1 = new BufferList();
const bl2 = new BufferList();
const bl3 = new BufferList();
const bls = [bl1, bl2, bl3];

urls.forEach((url, index) => {
  http
    .get(url, (res) => {
      res.on("data", (chunk) => {
        bls[index].append(chunk);
      });
      res.on("end", () => {
        console.log(bls[index].toString());
      });
    })
    .on("error", (e) => {
      console.error(`Got error: ${e.message}`);
    });
});
