const country = "https://countriesnow.space/api/v0.1/countries/"; //base URL for any country API requests

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
  // console.log(await response.json());
  return await response.json();
}

module.exports = {
  getListOfCountries
}
