const greet = require("./app");

if (greet("World") !== "Hello, World!") {
  console.error("❌ Test failed");
  process.exit(1);
} else {
  console.log("✅ All tests passed!");
}

