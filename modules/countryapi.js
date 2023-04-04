const country = "https://countriesnow.space/api/v0.1/countries/"; //base URL for any country API requests
const url = "https://maps.googleapis.com/maps/api/place/textsearch/json";

/*
 * Functions for country API requests.
 */

async function getListOfCountries() {
  let requrl = `${country}`;
  let response = await fetch(
    requrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  let countryData = await response.json();
  // console.log(countryData.data)
  return countryData.data;
}

async function getResult() {
  const country = "canada"
  const key = "AIzaSyD89-PBPCZEiWIMpY_7wU78P2Z4MXn5FeQ";
  // let requrl = `${url}?location=${country}&key=${key}`;
  let requrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Vancouver&key=AIzaSyD89-PBPCZEiWIMpY_7wU78P2Z4MXn5FeQ";

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
  console.log(getResult);
  console.log(requrl);
  return getResult;
}


module.exports = {
  getListOfCountries,
  getResult,
}
