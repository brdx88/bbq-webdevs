const express = require('express');
const https = require('https');

app = express();

app.get('/', function(req,res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=cc49e64c924d98d0f9984d90c6843c6d&units=metrics";
    https.get(url, function(response) {
        console.log(response);
        console.log("The HTTP status is: " + response.statusCode);

        response.on("data", function(data) {

            // parsing hex code into JSON readability
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            // slicing into specific JSON data
            const temp = weatherData.weather[0].description
            console.log(temp)
        });
    });

    res.send("Server is up and running.");
});



app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});
