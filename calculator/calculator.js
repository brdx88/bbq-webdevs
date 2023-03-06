const express = require("express");

const app = express();

app.get('/', function(req, res) {
    res.send("Hello World!");
});





app.listen(2888, function() {
    console.log("Server started on port 2888.")
});
