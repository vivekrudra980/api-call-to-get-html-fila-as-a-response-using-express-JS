// Given two files app.js and gadgets.html, write an API in app.js file for the path /gadgets that sends the gadgets.html file as a response.

// Export the express instance using default export syntax.

// Use Common JS module syntax.

const express = require("express");
const app = express();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;
