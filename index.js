// import express object
const express = require("express");

//create express app
const app = express();

// define the port the app will run off
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("app is running on port" + PORT);
});
