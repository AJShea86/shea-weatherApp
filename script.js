//input for the text area
var enteredText = document.getElementById("enteredText");

//for the display
var cityText = document.getElementById("cityText");

//add button
var searchButton = document.getElementById("searchButton");

var cityList = document.getElementById("recentHistory");

function displaySearchCity() {
  var element = document.createElement("button");
  element.id = enteredText.value;
  element.textContent = enteredText.value;
  element.classList.add("btn");
  element.classList.add("btn-warning");
  element.classList.add("my-2");
  cityList.prepend(element);
}

function storedInput() {
  var storedText = enteredText.value;
  localStorage.setItem(storedText, storedText);
}

var weather = {
  apiKey: "850726882b51f2bfce0a7b5356258646",
  fetchWeather: function (cityST) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityST +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        var longLat = data.coord;
        console.log("first api call", data);
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${longLat.lat}&lon=${longLat.lon}&units=imperial&appid=${this.apiKey}`
        )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data)).catch(error=>console.log(error));

      }).catch(error=>console.log(error));

  },
  displayWeather: function (data) {
    console.log(data);
    var name = data;
    var temp = data.current.temp;
    var humidity = data.current.humidity;
    var uvIndex = data.current.uvi;
    var icon = data.current.weather[0].icon;

    var dayOneTemp = data.daily[0].temp.day;
    var dayOneHumidity = data.daily[0].humidity;
    var dayOneWindSpeed = data.daily[0].wind_speed;
    var dayOneUvIndex = data.daily[0].uvi;
    var dayOneIcon = data.daily[0].weather[0].icon;

    var dayTwoTemp = data.daily[1].temp.day;
    var dayTwoHumidity = data.daily[1].humidity;
    var dayTwoWindSpeed = data.daily[1].wind_speed;
    var dayTwoUvIndex = data.daily[1].uvi;
    var dayTwoIcon = data.daily[1].weather[0].icon;


    var dayThreeTemp = data.daily[2].temp.day;
    var dayThreeHumidity = data.daily[2].humidity;
    var dayThreeWindSpeed = data.daily[2].wind_speed;
    var dayThreeUvIndex = data.daily[2].uvi;
    var dayThreeIcon = data.daily[2].weather[0].icon;


    var dayFourTemp = data.daily[3].temp.day;
    var dayFourHumidity = data.daily[3].humidity;
    var dayFourWindSpeed = data.daily[3].wind_speed;
    var dayFourUvIndex = data.daily[3].uvi;
    var dayFourIcon = data.daily[3].weather[0].icon;


    var dayFiveTemp = data.daily[4].temp.day;
    var dayFiveHumidity = data.daily[4].humidity;
    var dayFiveWindSpeed = data.daily[4].wind_speed;
    var dayFiveUvIndex = data.daily[4].uvi;
    var dayFiveIcon = data.daily[4].weather[0].icon;







    var speed = data.current.wind_speed;
    console.log(name, temp, humidity, speed);
    document.querySelector("#temperature").textContent =
      "Temperature: " + temp + "° F";
    document.querySelector("#humidity").textContent =
      "Humidity: " + humidity + "%";
    document.querySelector("#windSpeed").textContent =
      "Wind Speed: " + speed + " mph";

    document.querySelector("#uvIndex").textContent = uvIndex;

    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("dayOneTemp").textContent = "Temp: " + JSON.stringify(dayOneTemp) + "° F";
    document.getElementById("dayOneHumidity").textContent =  "Humidity: " + JSON.stringify(dayOneHumidity) + "%";
    document.getElementById("dayOneWindSpeed").textContent =  "Wind Speed: " + JSON.stringify(dayOneWindSpeed) + "mph";
    document.getElementById("dayOneUvIndex").textContent =  "UV Index: " + JSON.stringify(dayOneUvIndex);

    document.getElementById("dayOneIcon").src = `http://openweathermap.org/img/wn/${dayOneIcon}@2x.png`
    document.getElementById("dayTwoIcon").src = `http://openweathermap.org/img/wn/${dayTwoIcon}@2x.png`
    document.getElementById("dayThreeIcon").src = `http://openweathermap.org/img/wn/${dayThreeIcon}@2x.png`
    document.getElementById("dayFourIcon").src = `http://openweathermap.org/img/wn/${dayFourIcon}@2x.png`
    document.getElementById("dayFiveIcon").src = `http://openweathermap.org/img/wn/${dayFiveIcon}@2x.png`





    document.getElementById("dayTwoTemp").textContent =  "Temp: " + JSON.stringify(dayTwoTemp) + "° F";
    document.getElementById("dayTwoHumidity").textContent =  "Humidity: " + JSON.stringify(dayTwoHumidity) + "%";
    document.getElementById("dayTwoWindSpeed").textContent =  "Wind Speed: " + JSON.stringify(dayTwoWindSpeed) + "mph";
    document.getElementById("dayTwoUvIndex").textContent =  "UV Index: " + JSON.stringify(dayTwoUvIndex);

    document.getElementById("dayThreeTemp").textContent =  "Temp: " + JSON.stringify(dayThreeTemp) + "° F";
    document.getElementById("dayThreeHumidity").textContent =  "Humidity: " + JSON.stringify(dayThreeHumidity) + "%";
    document.getElementById("dayThreeWindSpeed").textContent =  "Wind Speed: " + JSON.stringify(dayThreeWindSpeed) + "mph";
    document.getElementById("dayThreeUvIndex").textContent =  "UV Index: " + JSON.stringify(dayThreeUvIndex);

    document.getElementById("dayFourTemp").textContent =  "Temp: " + JSON.stringify(dayFourTemp) + "° F";
    document.getElementById("dayFourHumidity").textContent =  "Humidity: " + JSON.stringify(dayFourHumidity) + "%";
    document.getElementById("dayFourWindSpeed").textContent =  "Wind Speed: " + JSON.stringify(dayFourWindSpeed) + "mph";
    document.getElementById("dayFourUvIndex").textContent =  "UV Index: " + JSON.stringify(dayFourUvIndex);

    document.getElementById("dayFiveTemp").textContent =  "Temp: " + JSON.stringify(dayFiveTemp) + "° F";
    document.getElementById("dayFiveHumidity").textContent =  "Humidity: " + JSON.stringify(dayFiveHumidity) + "%";
    document.getElementById("dayFiveWindSpeed").textContent =  "Wind Speed: " + JSON.stringify(dayFiveWindSpeed) + "mph";
    document.getElementById("dayFiveUvIndex").textContent =  "UV Index: " + JSON.stringify(dayFiveUvIndex);


  },
  search: function () {
    this.fetchWeather(document.querySelector("#enteredText").value);
  },
};

document.querySelector("#searchButton").addEventListener("click", function () {
  weather.search();
  cityText.textContent = enteredText.value;
  storedInput();
  displaySearchCity();

  enteredText.value = "";
});

// this function adds the entered city to the history box below the search bar
function saveCities() {
  var length = localStorage.length;
  for (var i = 0; i < length; i++) {
    var key = localStorage.key(i);
    var element = document.createElement("button");
    element.id = key;
    element.textContent = key;
    element.classList.add("btn");
    element.classList.add("btn-warning");
    element.classList.add("my-2");
    element.addEventListener("click", handleSavedCityClick)
    cityList.appendChild(element);

  }
}
function handleSavedCityClick(event){
  var city = event.target.id;
  weather.fetchWeather(city);
  cityText.textContent = city;
}
saveCities();

var clockElement = document.getElementById("clock");
var presentDay = moment().format("dddd")

function clock() {
  clockElement.textContent =
  presentDay + " " + moment().format("MMMM Do");
}
setInterval(clock, 1000);
////////////////


var forecastDayOne = document.getElementById("forecastDayOne")

///////////////////  0         1           2           3         4         5         6
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

  // write a function that will display days of the week on the forecast cards
function forecastDays(){
  if(presentDay === daysOfWeek[0]) {
    forecastDayOne.textContent = daysOfWeek[1];
    forecastDayTwo.textContent = daysOfWeek[2];
    forecastDayThree.textContent = daysOfWeek[3];
    forecastDayFour.textContent = daysOfWeek[4];
    forecastDayFive.textContent = daysOfWeek[5];
  }

  if(presentDay === daysOfWeek[1]) {
    forecastDayOne.textContent = daysOfWeek[2];
    forecastDayTwo.textContent = daysOfWeek[3];
    forecastDayThree.textContent = daysOfWeek[4];
    forecastDayFour.textContent = daysOfWeek[5];
    forecastDayFive.textContent = daysOfWeek[6];
  }

  if(presentDay === daysOfWeek[2]) {
    forecastDayOne.textContent = daysOfWeek[3];
    forecastDayTwo.textContent = daysOfWeek[4];
    forecastDayThree.textContent = daysOfWeek[5];
    forecastDayFour.textContent = daysOfWeek[6];
    forecastDayFive.textContent = daysOfWeek[0];
  }

  if(presentDay === daysOfWeek[3]) {
    forecastDayOne.textContent = daysOfWeek[4];
    forecastDayTwo.textContent = daysOfWeek[5];
    forecastDayThree.textContent = daysOfWeek[6];
    forecastDayFour.textContent = daysOfWeek[0];
    forecastDayFive.textContent = daysOfWeek[1];
  }

  if(presentDay === daysOfWeek[4]) {
    forecastDayOne.textContent = daysOfWeek[5];
    forecastDayTwo.textContent = daysOfWeek[6];
    forecastDayThree.textContent = daysOfWeek[0];
    forecastDayFour.textContent = daysOfWeek[1];
    forecastDayFive.textContent = daysOfWeek[2];
  }

  if(presentDay === daysOfWeek[5]) {
    forecastDayOne.textContent = daysOfWeek[6];
    forecastDayTwo.textContent = daysOfWeek[0];
    forecastDayThree.textContent = daysOfWeek[1];
    forecastDayFour.textContent = daysOfWeek[2];
    forecastDayFive.textContent = daysOfWeek[3];
  }

  if(presentDay === daysOfWeek[6]) {
    forecastDayOne.textContent = daysOfWeek[0];
    forecastDayTwo.textContent = daysOfWeek[1];
    forecastDayThree.textContent = daysOfWeek[2];
    forecastDayFour.textContent = daysOfWeek[3];
    forecastDayFive.textContent = daysOfWeek[4];
  }

}
forecastDays();

//displays denver as city on page load
weather.fetchWeather("Denver");
cityText.textContent = "Denver";

//need to make a function that displays uv index conditions


// var toolTip = document.getElementById("toolTipInfo");
// console.log(toolTip);
// console.log(toolTip.dataset.originalTitle);
