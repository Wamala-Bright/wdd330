import { getWeather } from "./weather.js";
import { getCityInfo } from "./cities.js";
import { getCityImage } from "./images.js";
import { renderWeather } from "./weatherCard.js";
import { renderCity } from "./cityCard.js";
import { clear } from "./dom.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");
const cityDiv = document.getElementById("city");
const imageDiv = document.getElementById("image");
const errorMsg = document.getElementById("error");

async function searchCity() {
  const city = cityInput.value.trim();
  if (!city) return;

  clear(weatherDiv);
  clear(cityDiv);
  clear(imageDiv);
  errorMsg.textContent = "";

  try {
    const weather = await getWeather(city);
    weatherDiv.innerHTML = renderWeather(weather);

    try {
      const cityInfo = await getCityInfo(city);
      cityDiv.innerHTML = renderCity(cityInfo);
    } catch {
      cityDiv.innerHTML = "";
    }

    try {
      const imageUrl = await getCityImage(city);
      if (imageUrl) {
        imageDiv.innerHTML = `<img src="${imageUrl}" alt="Image of ${city}">`;
      }
    } catch {
      imageDiv.innerHTML = "";
    }

  } catch (error) {
    errorMsg.textContent = error.message;
  }
}

searchBtn.addEventListener("click", searchCity);

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchCity();
  }
});