const countriesnow_URL = "https://countriesnow.space/api/v0.1/countries/"; //base URL for any countriesnow_URL API requests
const googleplace_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const googlemap_URL = "https://maps.googleapis.com/maps/api/staticmap";
const key = "AIzaSyD89-PBPCZEiWIMpY_7wU78P2Z4MXn5FeQ";

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
  // console.log(countriesnow_URLData.data)
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
async function mapResult(selectedCategory, selectedCity, selectedCountry) {
  let requrl = `${googlemap_URL}?center=${selectedCategory}+in+${selectedCity},${selectedCountry}&zoom=15&size=200x200&markers=color:red%7Clabel:A%7Ccenter=${selectedCategory}+in+${selectedCity},${selectedCountry}&key=${key}`;

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
  // console.log(mapResults);
  return mapResults;
}

/*
****** Function for Weather API *************
*/



module.exports = {
  getListOfCountries,
  getResult,
  mapResult,
}
