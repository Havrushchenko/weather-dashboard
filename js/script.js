var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var currentTemp = document.getElementById("temperature");
var icon = document.getElementById("icon");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var uvIndex = document.getElementById("UV-index")
var cityName = document.getElementById("city-name");

function getWeather(searchCity) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + "84b79da5e5d7c92085660485702f4ce8";
    fetch(apiUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for(var i = 0; i < data.lenght; i++);
            let weatherPic = data.weather[0].icon;
            icon.setAttribute("src", "https://openweathermap.org/img/w/" + weatherPic);
            currentTemp.textContent = "Temperature: " + data.main.temp + " °F";
            humidity.textContent = "Humidity: " + data.main.humidity + " %";
            windSpeed.textContent = "Wind Speed: " + data.wind.speed + " MPH";
            var currentDate = (moment().format("dddd, MMMM Do"));
            cityName.textContent = data.name + currentDate;
            
    });
};

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

