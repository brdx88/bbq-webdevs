const express = require("express");
const bodyParser = require("body-parser")

const app = express()

let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

    let today = new Date();
    let options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    let day = today.toLocaleDateString('en-US', options);

    // 'list' tuh nama file .ejs nya.
    // di bawah ini nge-declare variables yang dipake buat .ejs nya
    res.render('list', {
                        listTitle: day,
                        newListItems: items
                    });
});

app.post('/', function(req, res) {
    console.log(req.body);
    let item = req.body.newItem;            // newItem tuh nama variable yang dipake ketika post something di .ejs

    if (req.body.button === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);                       // items adalah list di atas yang kita declare di awal.
        res.redirect('/');
    }
})

app.get('/work', function(req,res) {
    res.render('list', {
                        listTitle: "Work List",
                        newListItems: workItems
                    });
})

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
