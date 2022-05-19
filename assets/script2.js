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
      var current = data.current
      function fillInToday() {
        var today = document.getElementById("weather-info")
        var temp = document.getElementById("temp").append(current.temp)
        var hum = document.getElementById("hum").append(current.humidity)
        var wind = document.getElementById("wind").append(current.wind_speed)
        var uv = document.getElementById("uvi").append(current.uvi)

        for (let i = 1; i < 5; i++) { 
          (data.daily[i].temp.day)
          (data.daily[i].humidity)
          (data.daily[i].wind_speed)
          (data.daily[i].uvi)
        }
       
      }
      fillInToday();
    
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
      getWeather(latitude, longitude)
    })
}


function makeList() {
  var city = document.getElementById("Bar").value;
  var list = document.createElement("button");
  list.setAttribute("id", "history")
  list.append(city);
  document.getElementById("cities").appendChild(list);
  document.getElementById("history").addEventListener("click", getCords);

}

document.getElementById("searchButton").addEventListener("click", getCords);
document.getElementById("searchButton").addEventListener("click", makeList);


