//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.get("/", function(req, res) {
    // res.send("Hello");
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 0 || currentDay === 6) {
        res.send("yay it's weekend!");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
