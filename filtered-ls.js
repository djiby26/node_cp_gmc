const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (error, data) => {
  if (error) throw error;
  console.log(
    data
      .filter((file) => path.extname(file) === "." + process.argv[3])
      .join("\n")
  );
});
