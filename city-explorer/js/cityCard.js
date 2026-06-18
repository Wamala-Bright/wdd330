export function renderCity(city) {
  return `
    <div class="card">
      <h2>City Info</h2>
      <p>City: ${city.city}</p>
      <p>Country: ${city.country}</p>
      <p>Population: ${city.population.toLocaleString()}</p>
    </div>
  `;
}