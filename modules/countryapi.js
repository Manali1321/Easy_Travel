const country = "https://countriesnow.space/api/v0.1/countries/"; //base URL for any country API requests

/*
 * Functions for country API requests.
 */
async function getListOfCountries() {
  let requrl = `${country}`;
  let response = await fetch(
    requrl,
    {
      method: "GET"
      , headers: {
        "Content-Type": "application/json"
        //   ,"trakt-api-version": "2",
        //   "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  console.log(await response.json());
  // return await response.json();
}

module.exports = {
  getListOfCountries
}
