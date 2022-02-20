
// input for the text area
var enteredText = document.getElementById("enteredText");


//for the display
var cityText = document.getElementById("cityText");

//add button
var searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", storedInput)




function storedInput() {
    var storedText = enteredText.value;
    localStorage.setItem("searchInput", storedText);
    cityText.textContent = storedText;
    enteredText.value = "";

}



var weather = {
    apiKey: "850726882b51f2bfce0a7b5356258646",
    fetchWeather: function (cityST) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + cityST 
        + "&units=imperial&appid=" 
        + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
},
    displayWeather: function(data) {
        var {name} = data;
        var {icon, description} = data.weather[0];
        var {temp, humidity,} = data.main;
        var {speed} = data.wind
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector("#cityText").textContent = "Weather in " + name;
        document.querySelector("#temperature").textContent = "Temperature " + temp;
        document.querySelector("#humidity").textContent = "Humidity: " + humidity;
        document.querySelector("#windSpeed").textContent = "windSpeed: " + speed;
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        // document.querySelector(".uvIndex").textContent = "Temperature" + uvIndex;


    }
}
