var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var currentTemp = document.getElementById("temperature");
var icon = document.getElementById("icon");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var cityName = document.getElementById("city-name");
var todayWeather = document.getElementById("today-weather");

// Function to display weather conditions
function getWeather(searchCity) {

    // Executing a current weather get request from open weather api
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + "84b79da5e5d7c92085660485702f4ce8";
    fetch(apiUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Removing the class to display the current weather block when the function is executed
            todayWeather.classList.remove("d-none");

            // Parse response to display current weather
            icon.setAttribute("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            currentTemp.textContent = "Temperature: " + data.main.temp + " °F";
            humidity.textContent = "Humidity: " + data.main.humidity + " %";
            windSpeed.textContent = "Wind Speed: " + data.wind.speed + " MPH";
            var currentDate = (moment().format("dddd, MMMM Do"));
            cityName.textContent = data.name + " " + currentDate;
        });

    // Executing a five-day weather forecast from open weather api
    var forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&cnt=5" + "&appid=" + "84b79da5e5d7c92085660485702f4ce8";
    fetch(forecastApiUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Removing the class to display the five-day weather forecast block when the function is executed
            forecast.classList.remove("d-none");

            // Forecast day one
            var iconDayOne = document.getElementById("icon-day-one");
            var temperatureDayOne = document.getElementById("temperature-day-one");
            var humidityDayOne = document.getElementById("humidity-day-one");
            iconDayOne.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png");
            temperatureDayOne.textContent = "Temp: " + data.list[0].main.temp + " °F";
            humidityDayOne.textContent = "Humid: " + data.list[0].main.humidity + " %"
            // Forecast day two

            var iconDayTwo = document.getElementById("icon-day-two");
            var temperatureDayTwo = document.getElementById("temperature-day-two");
            var humidityDayTwo = document.getElementById("humidity-day-two");
            iconDayTwo.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
            temperatureDayTwo.textContent = "Temp: " + data.list[1].main.temp + " °F";
            humidityDayTwo.textContent = "Humid: " + data.list[1].main.humidity + " %"
            // Forecast day three

            var iconDayThree = document.getElementById("icon-day-three");
            var temperatureDayThree = document.getElementById("temperature-day-three");
            var humidityDayThree = document.getElementById("humidity-day-three");
            iconDayThree.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png");
            temperatureDayThree.textContent = "Temp: " + data.list[2].main.temp + " °F";
            humidityDayThree.textContent = "Humid: " + data.list[2].main.humidity + " %"
            // Forecast day four

            var iconDayFour = document.getElementById("icon-day-four");
            var temperatureDayFour = document.getElementById("temperature-day-four");
            var humidityDayFour = document.getElementById("humidity-day-four");
            iconDayFour.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png");
            temperatureDayFour.textContent = "Temp: " + data.list[3].main.temp + " °F";
            humidityDayFour.textContent = "Humid: " + data.list[3].main.humidity + " %"
            // Forecast day five
            
            var iconDayFive = document.getElementById("icon-day-five");
            var temperatureDayFive = document.getElementById("temperature-day-five");
            var humidityDayFive = document.getElementById("humidity-day-five");
            iconDayFive.setAttribute("src", "https://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png");
            temperatureDayFive.textContent = "Temp: " + data.list[4].main.temp + " °F";
            humidityDayFive.textContent = "Humid: " + data.list[4].main.humidity + " %"
        })
}

var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityName = searchCity.value.trim();
    if (cityName) {
        getWeather(cityName);
        searchCity.value = "";
    } else {
        alert("Please enter a city name!");
    }
    console.log(event);
}
searchButton.addEventListener('click', formSubmitHandler);

