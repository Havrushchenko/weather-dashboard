var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");

var getWeather = function (searchCity) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + "84b79da5e5d7c92085660485702f4ce8";
    fetch(apiUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
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

