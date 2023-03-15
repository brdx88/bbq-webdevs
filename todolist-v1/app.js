const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');                          // setup templating using EJS
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    // res.send("Hello");

    var today = new Date();                             // get date of today
    var currentDay = today.getDay();                    // get the day
    var day = "";
    console.log(today, currentDay);

    if (currentDay === 0 || currentDay === 6) {         // (Sunday - Saturday : 0 - 6)
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    res.render('list', {kindOfDay: day});
});




app.listen(3000, function() {
    console.log("Server is running at Port 3000.");
})
