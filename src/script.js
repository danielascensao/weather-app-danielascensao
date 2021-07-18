//Time

let time = document.querySelector("#time");

let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[currentDate.getDay()];

let hour = currentDate.getHours();

let minutes = currentDate.getMinutes();

time.innerHTML = `${day}   ${hour}:${minutes}`;


//Search Form

 function showTemperature(response){
  let temp = document.querySelector(".current-temperature");
  let city = document.querySelector(".city-name");
  let tip = document.querySelector(".weather-tip");
  city.innerHTML = response.data.name;
  temp.innerHTML = `${Math.round(response.data.main.temp)}º`;
  tip.innerHTML = response.data.weather[0].description;
}

function retrieveCity(event){
  event.preventDefault();

  let cityInput = document.querySelector(".enter-city");

  let apiKey = "f464dae45a82d172009d4ae4291077de";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature)
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", retrieveCity);



//Current location button


function getGeolocation(event){
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(definePosition);
  
  function showTemp(response){
  let temp = document.querySelector(".current-temperature");
  let city = document.querySelector(".city-name");
  let tip = document.querySelector(".weather-tip");
  city.innerHTML = response.data.name;
  temp.innerHTML = `${Math.round(response.data.main.temp)}º`;
  tip.innerHTML = response.data.weather[0].description;
}

function definePosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "f464dae45a82d172009d4ae4291077de";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

}

let button = document.querySelector("#current-location");

button.addEventListener("click", getGeolocation);



//C to F

/*function convertToF(event) {
  let fahrenheit = Math.round(26 * 1.8 + 32);
  let fTemperature = document.querySelector(".current-temperature");
  fTemperature.innerHTML = `${fahrenheit}°`;
}

let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", convertToF);

function convertToC(event) {
  let celsius = document.querySelector(".current-temperature");
  celsius.innerHTML = `26°`;
}

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", convertToC);*/
