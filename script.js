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
          `https://api.openweathermap.org/data/2.5/onecall?lat=${longLat.lat}&lon=${longLat.lon}&appid=${this.apiKey}`
        )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
      });
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

    var dayTwoTemp = data.daily[1].temp.day;
    var dayTwoHumidity = data.daily[1].humidity;
    var dayTwoWindSpeed = data.daily[1].wind_speed;
    var dayTwoUvIndex = data.daily[1].uvi;

    var dayThreeTemp = data.daily[2].temp.day;
    var dayThreeHumidity = data.daily[2].humidity;
    var dayThreeWindSpeed = data.daily[2].wind_speed;
    var dayThreeUvIndex = data.daily[2].uvi;

    var dayFourTemp = data.daily[3].temp.day;
    var dayFourHumidity = data.daily[3].humidity;
    var dayFourWindSpeed = data.daily[3].wind_speed;
    var dayFourUvIndex = data.daily[3].uvi;

    var dayFiveTemp = data.daily[4].temp.day;
    var dayFiveHumidity = data.daily[4].humidity;
    var dayFiveWindSpeed = data.daily[4].wind_speed;
    var dayFiveUvIndex = data.daily[4].uvi;






    var speed = data.current.wind_speed;
    console.log(name, temp, humidity, speed);
    document.querySelector("#temperature").textContent =
      "Temperature: " + temp + "° F";
    document.querySelector("#humidity").textContent =
      "Humidity: " + humidity + "%";
    document.querySelector("#windSpeed").textContent =
      "Wind Speed: " + speed + " mph";

    document.querySelector("#uvIndex").textContent = "UV Index: " + uvIndex;
    document.getElementById(
      "weatherIcon"
    ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log(dayOneTemp)
    document.getElementById("dayOneTemp").textContent =  JSON.stringify(dayOneTemp);
    document.getElementById("dayOneHumidity").textContent =  JSON.stringify(dayOneHumidity);
    document.getElementById("dayOneWindSpeed").textContent =  JSON.stringify(dayOneWindSpeed);
    document.getElementById("dayOneUvIndex").textContent =  JSON.stringify(dayOneUvIndex);

    document.getElementById("dayTwoTemp").textContent =  JSON.stringify(dayTwoTemp);
    document.getElementById("dayTwoHumidity").textContent =  JSON.stringify(dayTwoHumidity);
    document.getElementById("dayTwoWindSpeed").textContent =  JSON.stringify(dayTwoWindSpeed);
    document.getElementById("dayTwoUvIndex").textContent =  JSON.stringify(dayTwoUvIndex);

    document.getElementById("dayThreeTemp").textContent =  JSON.stringify(dayThreeTemp);
    document.getElementById("dayThreeHumidity").textContent =  JSON.stringify(dayThreeHumidity);
    document.getElementById("dayThreeWindSpeed").textContent =  JSON.stringify(dayThreeWindSpeed);
    document.getElementById("dayThreeUvIndex").textContent =  JSON.stringify(dayThreeUvIndex);

    document.getElementById("dayFourTemp").textContent =  JSON.stringify(dayFourTemp);
    document.getElementById("dayFourHumidity").textContent =  JSON.stringify(dayFourHumidity);
    document.getElementById("dayFourWindSpeed").textContent =  JSON.stringify(dayFourWindSpeed);
    document.getElementById("dayFourUvIndex").textContent =  JSON.stringify(dayFourUvIndex);

    document.getElementById("dayFiveTemp").textContent =  JSON.stringify(dayFiveTemp);
    document.getElementById("dayFiveHumidity").textContent =  JSON.stringify(dayFiveHumidity);
    document.getElementById("dayFiveWindSpeed").textContent =  JSON.stringify(dayFiveWindSpeed);
    document.getElementById("dayFiveUvIndex").textContent =  JSON.stringify(dayFiveUvIndex);


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
    cityList.appendChild(element);
  }
}
saveCities();
