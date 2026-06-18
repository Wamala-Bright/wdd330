export function renderWeather(weather) {
  return `
    <div class="card">
      <h2>Weather in ${weather.name}</h2>
      <p><strong>Temperature:</strong> ${weather.main.temp}°C</p>
      <p><strong>Feels like:</strong> ${weather.main.feels_like}°C</p>
      <p><strong>Condition:</strong> ${weather.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${weather.main.humidity}%</p>
      <p><strong>Wind:</strong> ${weather.wind.speed} m/s</p>
    </div>
  `;
}