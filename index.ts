const recentCity: string[] = [];

let index = 0;

const checkWeather = () => {

const cityName: string = (document.getElementById('cityName') as HTMLInputElement).value;

recentCity.push(cityName);

if(cityName == ''){
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
            const realTemp: number = parseInt(data.main.temp);
            const maxTemp: number = parseInt(data.main.temp_max);
            const minTemp: number = parseInt(data.main.temp_min);
            const kelvin: number = 273;
            const realToCelcius: number = realTemp-kelvin;
            const maxToCelcius: number = maxTemp-kelvin;
            const minToCelcius: number = minTemp-kelvin;

            const actTemperature = document.getElementById('actTemperature');
            if(actTemperature){
                actTemperature.innerHTML = `${realToCelcius} ºC`;
            }
            const maxTemperature = document.getElementById('maxTemperature');
            if(maxTemperature){
                maxTemperature.innerHTML = `${maxToCelcius} ºC`;
            }
            const minTemperature = document.getElementById('minTemperature');
            if(minTemperature){
                minTemperature.innerHTML = `${minToCelcius} ºC`;
            }

            const pictureWeather = document.getElementById('imgWeather') as HTMLImageElement;

            if(weatherReal === 'Clear'){
                pictureWeather.src = './pictures/clear.png';
            }
            if(weatherReal === 'Clouds'){
                pictureWeather.src = './pictures/clouds.png';
            }
            if(weatherReal === 'Mist'){
                pictureWeather.src = './pictures/mist.png';
            }
            if(weatherReal === 'Rain'){
                pictureWeather.src = './pictures/rain.png';
            }
            if(weatherReal === 'Thunderstorm'){
                pictureWeather.src = './pictures/thunderstorm.png';
            }
        })
    
}
 