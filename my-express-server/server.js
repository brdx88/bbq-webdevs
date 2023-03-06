const express = require("express");

const app = express();

app.get('/', function(req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get('/contact', function(req, res) {
    res.send("<p>contact me at brian@outlook.com</p>")
})

app.get('/about', function(req, res) {
    res.send("hello, i'm Brian!")
})

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
//
