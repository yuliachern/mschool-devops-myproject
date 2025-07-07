str = "Hello Node.JS!";
console.log(str);
const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

module.exports = app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening the port " + port);
});