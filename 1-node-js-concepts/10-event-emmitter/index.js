const events = require("events");

const eventEmitter = new events();

eventEmitter.on("greet", (name) => console.log(`Hello ${name}`));

eventEmitter.emit("greet", "Debjyoti Banerjee");
