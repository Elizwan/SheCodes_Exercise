const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const description = document.getElementById('description');
const wind = document.getElementById('wind');
const icon = document.getElementById('icon');

const apiKey = Y46756159b5f45fb0a30c182a313b46a9; 

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    cityName.textContent = data.name;
    description.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = data.weather[0].description;
  } catch (error) {
    alert('City not found or API error.');
    console.error(error);
  }
});
