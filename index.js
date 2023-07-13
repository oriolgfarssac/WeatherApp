"use strict";
const recentCity = [];
let index = 0;
const checkWeather = () => {
    const cityName = document.getElementById('cityName').value;
    recentCity.push(cityName);
    if (cityName == '') {
        return alert('please introduce a city name');
    }
    const titleCityElement = document.getElementById('titleCity');
    if (titleCityElement) {
        titleCityElement.innerHTML = cityName;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=737325b3ec570869911191dedfad4f38`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        const weatherReal = String(data.weather[0].main);
        const realTemp = parseInt(data.main.temp);
        const maxTemp = parseInt(data.main.temp_max);
        const minTemp = parseInt(data.main.temp_min);
        const kelvin = 273;
        const realToCelcius = realTemp - kelvin;
        const maxToCelcius = maxTemp - kelvin;
        const minToCelcius = minTemp - kelvin;
        const actTemperature = document.getElementById('actTemperature');
        if (actTemperature) {
            actTemperature.innerHTML = `${realToCelcius} ºC`;
        }
        const maxTemperature = document.getElementById('maxTemperature');
        if (maxTemperature) {
            maxTemperature.innerHTML = `${maxToCelcius} ºC`;
        }
        const minTemperature = document.getElementById('minTemperature');
        if (minTemperature) {
            minTemperature.innerHTML = `${minToCelcius} ºC`;
        }
        const pictureWeather = document.getElementById('imgWeather');
        if (weatherReal === 'Clear') {
            pictureWeather.src = './pictures/clear.png';
        }
        if (weatherReal === 'Clouds') {
            pictureWeather.src = './pictures/clouds.png';
        }
        if (weatherReal === 'Mist') {
            pictureWeather.src = './pictures/mist.png';
        }
        if (weatherReal === 'Rain') {
            pictureWeather.src = './pictures/rain.png';
        }
        if (weatherReal === 'Thunderstorm') {
            pictureWeather.src = './pictures/thunderstorm.png';
        }
    });
};
