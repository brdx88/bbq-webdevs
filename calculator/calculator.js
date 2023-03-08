const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));


// BMI Calculator
app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res) {
    var w = Number(req.body.w);
    var h = Number(req.body.h);

    var result = w/(h*h);

    res.send("Your BMI is " + result);

});


// Calculator
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/index.html', function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result is " + result);
});




app.listen(2888, function() {
    console.log("Server started on port 2888.")
});
