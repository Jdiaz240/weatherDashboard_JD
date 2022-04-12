const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apikey = "f9045589f9bcbeef853eb7e06f209ddb";

let searchForm = document.querySelector("#search-form");
var searchBtn = document.getElementById("search");
// let todayBox =
// let forecastBox =
let history = document.getElementById(".history");
let searchBar = document.querySelector("#searchbar"); 


function test() {
fetch("http://api.openweathermap.org/data/2.5/onecall?lon=23&lat=56&appid=f9045589f9bcbeef853eb7e06f209ddb", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

fetch("http://api.openweathermap.org/geo/1.0/direct?q=orlando&appid=f9045589f9bcbeef853eb7e06f209ddb", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
}
test();