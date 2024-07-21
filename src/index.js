function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
  let climateSearch = document.querySelector("#climate-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  climateSearch.innerHTML = response.data.city;
  time.element.innerHTML = formatDate();
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = "${response.data.temperature.humidity}%";
  windSpeedElement.innerHTML = "${response.data.wind.speed}km/h";
  temperatureElement.innerHTML = math.round(temperature);
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
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${cityValue}&key= ${apiKey}&units=metric";
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#enter-city");
  // let climateSearch = document.querySelector("#climate-city");
  // climateSearch.innerHTML = citySearch.value;
  recieveCity(citySearch.value);
}

let searchFormElement = document.querySelector("#search-city");
searchFormElement.addEventListener("submit", handleSearchSubmit);

recieveCity("London");
