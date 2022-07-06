// import express object
const express = require("express");
//create express app
const app = express();
// import connection to the database
const sequelize = require("./config/connection");
// import instance of models
const tables = require("./Model/index");

console.log(tables);
// define the port the app will run off
const PORT = process.env.PORT || 3001;

// make public folder static
// app.use(express.static(serve folder here)))

// sync with the database
sequelize.sync().then(() => {
  console.log("we have connected to our db!");
});

// listen for changes on the assigned port
app.listen(PORT, () => {
  console.log("app is running on port" + PORT);
});
