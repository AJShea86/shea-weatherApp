
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

