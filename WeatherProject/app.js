const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.urlencoded( {extended: true} ));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html");
    console.log("  Standby for getting HTML from " + __dirname + "/index.html");
});

app.post('/', function(req, res) {

    const query = req.body.cityName;
    const apiKey = "cc49e64c924d98d0f9984d90c6843c6d";
    const units = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units=" + units;
    console.log("  Accessing " + url);

    https.get(url, function(response) {
        // console.log(response);
        console.log("  The HTTP status is: " + response.statusCode);

        // hold the data from the response
        response.on("data", function(data) {

            // parsing hex code into JSON readability
            const weatherData = JSON.parse(data);
            // console.log(weatherData);

            // slicing into specific JSON data
            const city = weatherData.name
            const tempt = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            // console.log(tempt)
            const weatherIcon = weatherData.weather[0].icon;
            const icon = "https://openweathermap.org/img/wn/"+ weatherIcon + "@2x.png";

            res.write("<h1>The temperature is " + tempt + " degrees Celcius.</h1>");
            res.write("<img src = '" + icon + "' alt = 'weather icon' >" );
            res.write("<p>The weather in " + city + " is " + weatherDescription + ".</p>");
            res.send()
        });
    });

    // gotta have to comment this below because it'll crash with the 'res.send()' above.
    //     we may using res.send once.
    // res.send("Server is up and running.");


});







app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});
