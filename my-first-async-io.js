const fs = require("fs");

fs.readFile(process.argv[2], (error, data) => {
  if (error) throw error;
  console.log(data.toString().split("\n").length - 1);
});
