const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apikey = "f9045589f9bcbeef853eb7e06f209ddb";

// let searchForm = document.querySelector("#search-form");
// var searchBtn = document.getElementById("search");
// let todayBox =
// let forecastBox =
// let history = document.getElementById("history");
// let searchBar = document.querySelector("#searchbar");


function getWeather(lat, lon) {
  fetch("http://api.openweathermap.org/data/2.5/onecall?lon=" + lon + "&lat=" + lat + "&units=imperial&appid=" + apikey, {
    "method": "GET",
    "headers": {}
  })
    .then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
      console.log(data.current.temp) 
      console.log(data.current.humidity)
      console.log(data.current.wind_speed)
      console.log(data.current.uvi)
      //logout all values needed for weather
      // make function to call to put values on page
    })
    .catch(err => {
      console.error(err);
    });
}



function getCords() {
  var city = document.getElementById("Bar").value;
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apikey, {
    method: "GET",
    headers: {}
  })
    .then(function (response) {
      return response.json();
    })

    .then(function (body) {
      const latitude = body[0].lat
      const longitude = body[0].lon
      getWeather(latitude,longitude)
    })
}


function makeList() {
  var city = document.getElementById("Bar").value;
  var list = document.createElement("li");
  list.append(city)
  document.getElementById("history").appendChild(list);
} 
// // function getCoords(event) {
// //   event.preventDefault();
// //   let locat = document.getElementById(searchBar.value);
// //   console.log(locat);
// //   fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&limit=5&appid=" + apikey)
// //   // .then(response => {

// //   // })
// // }
// // function search() {

// //   if () {

// //   }

// // }
document.getElementById("searchButton").addEventListener("click", getCords);
document.getElementById("searchButton").addEventListener("click", makeList);