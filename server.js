const express = require("express");
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/register.html", (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.get("/",(req,res) =>{
    res.sendFile("index.html")
})


// Listen
app.listen(PORT);
console.log("Listening to the port " + PORT);