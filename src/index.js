function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
  let climateSearch = document.querySelector("#climate-city");
  climateSearch.innerHTML = response.data.city;

  temperatureElement.innerHTML = math.round(temperature);
}

function recieveCity(cityValue) {
  let apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
  let apiUrl =
    'https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}&units=metric';
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

Searc
