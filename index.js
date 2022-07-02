// import express object
const express = require("express");

//create express app
const app = express();

// make public folder static
// app.use(express.static(serve folder here)))

// define the port the app will run off
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("app is running on port" + PORT);
});
