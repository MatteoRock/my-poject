<!DOCTYPE html>
<html lang="ru">
<head>
    <title>All goals</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../../style.css" type="text/css">
    <link rel="icon" href="../../favicon.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"> 
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Outfit:wght@500&family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>
<body>
    <h1>Weather in Your City</h1>
    <input type="text" id="city" placeholder="Enter your city">
    <button onclick="getWeather()">Get Weather</button>
    <p id="weatherInfo"></p>
    
    <script>
        function getWeather() {
            const city = document.getElementById('city').value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d8bc91aefac9568747a57e2237b88bb`)
                .then(response => response.json())
                .then(data => {
                    const weather = data.weather[0].description;
                    const temp = Math.round(data.main.temp - 273.15); // в Кельвинах, переводим в Цельсии
                    document.getElementById('weatherInfo').innerText = `Weather: ${weather}, Temperature: ${temp}°C`;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('weatherInfo').innerText = 'Failed to fetch weather data. Please try again.';
                });
        }
    </script>
</body>
</html>
