function searchWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'cee23d7259d8b0c64a2a755c875d42db';

    const apiUrl =` http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;



    fetch(apiUrl)
        .then(response => {

            return response.json();

        })
        .then(data => {
            console.log(data);

            // Update weather information
            document.getElementById('temperature').textContent = data.main.temp + ' °C';
            document.getElementById('humidity').textContent = data.main.humidity + '%';
            document.getElementById('wind-speed').textContent = data.wind.speed + ' km/h';

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}