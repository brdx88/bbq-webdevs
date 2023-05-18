const express = require("express");
const bodyParser = require("body-parser")

const app = express()
app.set('view engine', 'ejs');

app.get("/", function(req, res) {

    var today = new Date();
    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    var day = today.toLocaleDateString('en-US', options);

    res.render('list', {nameOfDay: day});
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
