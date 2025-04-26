
function getWeather() {
  var region = document.getElementById('regionSelect').value;
  var apiKey = 'your_api_key'; // (Replace with your OpenWeather API Key)
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temp = data.main.temp;
      var desc = data.weather[0].description;
      document.getElementById('weatherInfo').innerHTML = 
        `Temperature: ${temp}°C<br>Condition: ${desc}`;

      if (desc.includes('rain')) {
        alert("🌧️ Rain Alert! Protect your crops.");
      } else if (temp > 35) {
        alert("🔥 High Temperature Alert! Take precautions.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Could not fetch weather data. Try again!");
    });
}
