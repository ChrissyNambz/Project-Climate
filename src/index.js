function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
  let climateSearch = document.querySelector("#climate-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");

  climateSearch.innerHTML = response.data.city;
  time.element.innerHTML = formatDate();
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = math.round(temperature);
  icon.innerHTML = `<img src= "${response.data.condition.icon_url}"class="weather-icon">`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = "0${minutes}";
  }

  return "${day} ${hours}:${minutes}";
}
function recieveCity(cityValue) {
  let apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key= ${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#enter-city");
  let climateSearch = document.querySelector("#climate-city");
  climateSearch.innerHTML = citySearch.value;
  recieveCity(citySearch.value);
  searchCity(searchInput.value);
}
function getForecast(city) {
  let apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

function displayForecast(response) {
  console.log(response);

  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];

  let forecastHTML = "";

  days.forEach(function (day) {
    forecast.innerHTML =
      forecastHTML +
      `<div class=" weather-forecast-day">
    <div class="weather-forecast-date"> ${day}</div>
    <div class="weather-forecast-icon">⛅ </div>
    <div class="weather-forecast-temperatures"> 
       <div class="weather-forecast-temperature"> 
      <strong> 15°</strong> </div>
      <div class="weather-forecast-temperature"> 
       9°</div>
       </div>
       </div>
    `;
  });
  let forecast = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

let searchFormElement = document.querySelector("#search-city");
searchFormElement.addEventListener("submit", handleSearchSubmit);

recieveCity("London");
getForecast("London");
