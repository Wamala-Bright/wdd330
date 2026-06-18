const UNSPLASH_KEY = "YOUR_UNSPLASH_KEY";

export async function getCityImage(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `https://api.unsplash.com/search/photos?query=${encodedCity}&client_id=${UNSPLASH_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results[0]?.urls?.regular;
}