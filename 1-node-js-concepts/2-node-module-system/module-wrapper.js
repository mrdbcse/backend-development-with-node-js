console.log("Node module wrapper demo");

console.log("__filename in module wrapper", __filename);
console.log("__dirname in module wrapper", __dirname);

module.exports.greet = (name) => console.log(`Hello: ${name}`);
