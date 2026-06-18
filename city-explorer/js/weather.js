const WEATHER_KEY = "f623faf376c326006b71c0c88e7eac28";

export async function getWeather(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=${WEATHER_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}