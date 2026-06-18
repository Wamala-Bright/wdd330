export async function getCityInfo(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedCity}&limit=1`;

  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
    }
  });

  if (!response.ok) {
    throw new Error("City info not found");
  }

  const data = await response.json();

  if (!data.data.length) {
    throw new Error("City not found");
  }

  return data.data[0];
}