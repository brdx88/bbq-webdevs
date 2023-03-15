const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs'); // setup templating using EJS
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function(req, res) {
    // res.send("Hello");

    // ----------------------------------------
    // longer way

    // var today = new Date(); // get date of today, ex: 2023-03-15T08:46:18.878Z
    // var currentDay = today.getDay(); // get the day, ex: 3 -- day number of week
    // var day = "";
    // console.log(today, currentDay);

    // switch (currentDay) {                           // (Sunday - Saturday : 0 - 6)
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monda";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wedesnday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to " + currentDay);
    // };
    //
    // res.render('list', {
    //     kindOfDay: day
    // }); // render using EJS. 'list' is the EJS file; 'kindOfDay' is variable in the EJS file.

    // ----------------------------------------


    // ----------------------------------------
    // shorter way

    var dayName = new Date().toLocaleDateString('en-us', {weekday:"long"});     // get the weekday name, ex: Wedesnday
    console.log(dayName);

    res.render('list', {kindOfDay: dayName});               // render using EJS. 'list' is the EJS file; 'kindOfDay' is variable in the EJS file.

    // ----------------------------------------
});




app.listen(3000, function() {
    console.log("Server is running at Port 3000.");
})
