const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.use( express.static('public') );

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const email = req.body.emailAddress;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // --------------------------------------------------------
    // i guess start from this line (connect to Mailchimp API) is won't work

    // // const apiKey = "? 69848ab844c95dbdc63dc28ac0006c3b-us12";
    // // const listID = "35d666fb40";
    // const url = "https://us12.api.mailchimp.com/3.0/lists/35d666fb40";
    //
    // const option = {
    //     method: "POST",
    //     auth: "brdx8:69848ab844c95dbdc63dc28ac0006c3b-us12"
    // };
    //
    // const request = https.request(url, options, function(response) {
    //     response.on("data", function(data) {
    //         console.log(JSON.parse(data));
    //     });
    // });
    //
    //
    // request.write(jsonData);
    // request.end();
    // // console.log(fname, lname, email);

    // --------------------------------------------------------
});


app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});
