const getExtension = require("./mymodule");

function callback(error) {
  throw error;
}
console.log(getExtension(process.argv[2], process.argv[3], callback));
