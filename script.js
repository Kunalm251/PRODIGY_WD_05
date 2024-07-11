 function getWeather() {
    const apiKey = '45a582346563499d452cf1d3d8847915';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter city');
        return;
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={API key}';

    fetch(currentWeatherUrl)
    .then(Response => Response.json())
    .then(data => {
        displayWheather(data);
    })
    .catch(error => {
        console.error('Error fetching current data:', error);
        alert('Error fetching current data');
    });

    fetch(forecastUrl)
    .then(Response => Response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch(error => {
        console.error('Error fetching forecast data:', error);
        alert('Error fetching forecast data');
    });
 }