const fs = require("fs");

const results = fs.readFileSync(process.argv[2]);

console.log(results.toString().split("\n").length - 1);
