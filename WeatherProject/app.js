const express = require('express');
const https = require('https');

app = express();

app.get('/', function(req,res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=cc49e64c924d98d0f9984d90c6843c6d&units=metric";
    https.get(url, function(response) {
        console.log(response);
        console.log("The HTTP status is: " + response.statusCode);

        // hold the data from the response
        response.on("data", function(data) {

            // parsing hex code into JSON readability
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            // slicing into specific JSON data
            const tempt = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description
            console.log(tempt)

            res.write("<p>The weather is " + weatherDescription + ".</p>")
            res.write("<h1>The temperature is " + tempt + " degrees Celcius.</h1>")
            res.send()
        });
    });

    // gotta have to comment this below because it'll crash with the 'res.send()' above.
        // we may using res.send once.
    // res.send("Server is up and running.");
});



app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});
