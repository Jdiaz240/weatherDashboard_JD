// global variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apikey = "f9045589f9bcbeef853eb7e06f209ddb";

// DOM Elments References
// #search form, #search-input, #today, #forecast, #history
let searchForm = document.querySelector(#search-form);
let searchInput = 
let todayBox =
let forecastBox =
let searchDisplayBox =

// add timezone for day.js
dayjs.extend(window.dayjs_plgin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// function to display search history 
// function displaySearchHistory() {
//      searchDisplayBox.innerhtml = "",
// }

var weatherDataApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}"

function weatherData(weatherApi) {
    fetch(weatherApi)
    .then(fucntion(Res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })
}
weatherData(weatherApiUrl);

// make a request to the one call and show them how to make api key
// fetch coordinates
// fetch weather
// function renderItems(city, data) {

// }

// 1. geocoding API for lat and long
function fetchWeather(location) {
    let { lat } = location;
    let { long } = location;
    let cityName = location.name;
    let apiurl = ${weatherApiUrl}...;

}
