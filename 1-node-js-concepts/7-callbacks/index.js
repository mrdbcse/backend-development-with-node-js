const fs = require("fs");

const person = (name, callbackFn) => {
  console.log(`Hello ${name}`);
  callbackFn();
};
const address = () => console.log("India");

person("Debjyoti Banerjee", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error while reading the file: ", err);
    return;
  }
  console.log("File content: ", data);
});
