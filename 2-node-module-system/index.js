const firstModule = require("./first-module");

console.log(firstModule.add(10, 20));

try {
  console.log("Trying to divide by zero");
  let result = firstModule.divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Caught and error: ", error.message);
}


