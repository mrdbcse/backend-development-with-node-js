const moduleWrapper = require("./module-wrapper");

console.log("In wrapper demo file");

console.log("__filename in wrapper demo", __filename);
console.log("__dirname in wrapper demo", __dirname);

moduleWrapper.greet("Debjyoti Banerjee");
