const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs'); // setup templating using EJS
app.use(bodyParser.urlencoded({
    extended: true
}));

var items = [];


app.get('/', function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-us", options);

    res.render('list', {kindOfDay: day, newListItem: items});               // render using EJS. 'list' is the EJS file; 'kindOfDay' is variable in the EJS file.
});

app.post('/', function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});



app.listen(3000, function() {
    console.log("Server is running at Port 3000.");
})
