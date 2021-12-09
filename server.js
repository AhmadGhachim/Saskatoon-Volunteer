var admin = require("firebase-admin");
const express = require("express");
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;





// Listen
app.listen(PORT);
console.log("Listening to the port " + PORT);