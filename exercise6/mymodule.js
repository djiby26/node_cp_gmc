const fs = require("fs");
const path = require("path");

function getExtension(dirPath, ext, callback) {
  fs.readdir(dirPath, (error, data) => {
    if (error) return callback(error);
    return data.filter((file) => path.extname(file) === "." + ext).join("\n");
  });
}

module.exports = getExtension;
