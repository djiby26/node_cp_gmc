const http = require("http");

http
  .get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    let rawData = [];
    res.on("data", (chunk) => {
      rawData.push(chunk);
    });
    res.on("end", () => {
      console.log(rawData.join("\n"));
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
