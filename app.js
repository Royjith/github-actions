// app.js
function greet(name) {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet("GitHub Actions"));
}

module.exports = greet;

