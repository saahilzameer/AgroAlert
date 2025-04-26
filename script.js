function getWeather() {
  var region = document.getElementById('regionSelect').value;
  var apiKey = '81375ce4e8cfc67b32bcf62d177bcbb5'; // Your OpenWeather API Key
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temp = data.main.temp;
      var desc = data.weather[0].description;
      document.getElementById('weatherInfo').innerHTML = 
        `Temperature: ${temp}°C<br>Condition: ${desc}`;

      // Alerts based on weather condition
      if (desc.includes('rain')) {
        alert("🌧️ Rain Alert! Protect your crops.");
      } else if (temp > 35) {
        alert("🔥 High Temperature Alert! Take precautions for your crops.");
      } else if (desc.includes('storm')) {
        alert("⛈️ Storm Alert! Stay safe and secure your farm areas.");
      } else {
        alert("✅ Weather is normal. Happy Farming!");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("❗ Could not fetch weather data. Check your internet connection or API key!");
    });
}


