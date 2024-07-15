function handleSearchSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#enter-city");
  let climateSearch = document.querySelector("#climate-city");
  climateSearch.innerHTML = citySearch.value;
}

let searchFormElement = document.querySelector("#search-city");

searchFormElement.addEventListener("submit", handleSearchSubmit);
