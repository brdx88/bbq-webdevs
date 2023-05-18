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
        res.send("boo it's a weekday!");
    }
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
