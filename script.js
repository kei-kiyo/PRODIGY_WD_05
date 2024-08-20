const apiKey = 'b12d28443eef453a97dcee249c0945f4';
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const weatherIconElement = document.getElementById('weather-icon');

async function getWeather(city) {
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        const temperature = `${data.data[0].temp}°F`;
        const description = data.data[0].weather.description;
        const iconCode = data.data[0].weather.icon;
        const iconUrl = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;

        temperatureElement.textContent = temperature;
        conditionElement.textContent = description;
        weatherIconElement.src = iconUrl;
        weatherIconElement.style.display = 'block';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        temperatureElement.textContent = '';
        conditionElement.textContent = 'Unable to fetch weather data. Please try again.';
        weatherIconElement.style.display = 'none';
    }
}

document.getElementById("fetch_btn").addEventListener("click", () => {
    const cityInput = document.getElementById('city-input').value;
    getWeather(cityInput);
});
