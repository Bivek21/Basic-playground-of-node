const EventEmitter = require("node:events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once("newListener", (event, listener) => {
  if (event === "event") {
    // Insert a new listener in front
    myEmitter.on("event", () => {
      console.log("B");
    });
  }
});
myEmitter.on("Hi", (name) => {
  console.log(name + " My name is Bivek");
});
myEmitter.emit("event");
myEmitter.emit("Hi", "Prem");
// Prints:
//   B
//   A
