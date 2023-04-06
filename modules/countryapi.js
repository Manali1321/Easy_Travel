const countriesnow_URL = "https://countriesnow.space/api/v0.1/countries/"; //base URL for any countriesnow_URL API requests
const googleplace_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const googlemap_URL = "https://maps.googleapis.com/maps/api/staticmap";
const weather_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const key = "AIzaSyD89-PBPCZEiWIMpY_7wU78P2Z4MXn5FeQ";
const weather_key = "527c5f79524854e05624c854c03f67b9";
/*
 ******** Functions for countriesnow_URL API requests.**********
 */

async function getListOfCountries() {
  let requrl = `${countriesnow_URL}`;
  let response = await fetch(
    requrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  let countriesnow_URLData = await response.json();
  return countriesnow_URLData.data;
}

/*
****** Function for google place API *************
*/
async function getResult(selectedCity, selectedCategory) {
  let requrl = `${googleplace_URL}?query=${selectedCategory}+in+${selectedCity}&key=${key}`;

  let response = await fetch(
    requrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
  let getResult = await response.json();
  return getResult.results;
}
/*
****** Function for google Map API *************
*/
async function mapResult(selectedCity, selectedCountry) {
  let requrl = `${googlemap_URL}?center=${selectedCity},${selectedCountry}&zoom=12&size=200x200&markers=color:red%7Clabel:A%7Ccenter=${selectedCity},${selectedCountry}&key=${key}`;

  let response = await fetch(
    requrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "image/png",
      }
    }
  );
  let mapResults = await response.url;
  return mapResults;
}

/*
****** Function for Weather API *************
*/
async function weatherIcon(selectedCity) {
  let requrl = `${weather_URL}${selectedCity}&appid=${weather_key}`;

  let response = await fetch(
    requrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
  let weatherData = await response.json();

  if (weatherData.cod === 400 || weatherData.cod === 404) {
    return "01d";
  } else {
    return weatherData.weather[0].icon;
  }
}
async function weatherData(selectedCity) {
  let requrl = `${weather_URL}${selectedCity}&appid=${weather_key}`;

  let response = await fetch(
    requrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
  let weatherData = await response.json();

  return weatherData.weather[0].description;

}

module.exports = {
  getListOfCountries,
  getResult,
  mapResult,
  weatherIcon,
  weatherData,
}
