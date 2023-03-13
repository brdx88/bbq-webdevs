const express = require('express');
const https = require('https');

app = express();

app.get('/', function(req,res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Tangerang&appid=cc49e64c924d98d0f9984d90c6843c6d&units=metric";
    https.get(url, function(response) {
        // console.log(response);
        console.log("The HTTP status is: " + response.statusCode);

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

            res.write("<p>The weather in " + city + " is " + weatherDescription + ".</p>");
            res.write("<h1>The temperature is " + tempt + " degrees Celcius.</h1>");
            res.write("<img src = '" + icon + "' alt = 'weather icon' >" );
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
