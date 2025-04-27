function getWeather() {
  var region = document.getElementById('regionSelect').value;
  var apiKey = '81375ce4e8cfc67b32bcf62d177bcbb5'; // Your OpenWeather API Key
  var city = '';

  if (region === 'Coastal Delta') city = 'Vijayawada';
  else if (region === 'Northern Plains') city = 'Amritsar';
  else if (region === 'Central Highlands') city = 'Bhopal';
  else if (region === 'Western Plateau') city = 'Pune';
  else if (region === 'Eastern Plains') city = 'Kolkata';

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  document.getElementById('spinner').style.display = 'block';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('spinner').style.display = 'none';

      var temp = data.main.temp;
      var humidity = data.main.humidity;
      var wind = data.wind.speed;
      var desc = data.weather[0].description;

      document.getElementById('weatherInfo').innerHTML = 
        `<h2>Weather Forecast</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${wind} km/h</p>
        <p>Condition: ${desc}</p>`;

      var alertText = "✅ Weather normal for agriculture.";

      if (desc.includes('rain') || humidity > 75) {
        alertText = "🌧️ Heavy rainfall expected. Ensure proper drainage for paddy fields.";
      } else if (temp > 35) {
        alertText = "🔥 High temperature alert. Provide shade and irrigation to crops.";
      } else if (desc.includes('storm')) {
        alertText = "⛈️ Storm Alert! Protect young plants and secure structures.";
      }

      document.getElementById('agriAlerts').innerHTML = 
        `<h2>Agricultural Alerts</h2><p>${alertText}</p>`;
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error fetching weather data. Please try again.");
      document.getElementById('spinner').style.display = 'none';
    });
}
