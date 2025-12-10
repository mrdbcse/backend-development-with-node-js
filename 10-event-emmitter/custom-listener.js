const EventEmmitter = require("events");

class CustomEmmitter extends EventEmmitter {
  constructor() {
    super();
    this.greetPrefix = "Hi!";
    this.farewellPrefix = "Goodbye!";
  }
  greet(name) {
    const message = `${this.greetPrefix} ${name}`;
    this.emit("greet", message);
  }
  farewell(name) {
    const message = `${this.farewellPrefix} ${name}`;
    this.emit("farewell", message);
  }
}

const emmitter = new CustomEmmitter();

emmitter.on("greet", (res) => console.log("Greet Event Fired: ", res));
emmitter.on("farewell", (res) => console.log("Farewell Event Fired: ", res));

emmitter.greet("Debjyoti");
emmitter.farewell("Debjyoti");
