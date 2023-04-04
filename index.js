// import require modules and set express app
const express = require('express');
const path = require('path');
const countryData = require('./modules/countryapi');
const app = express();

// define view folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = 8888;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
// define public folder
app.use(express.static(path.join(__dirname, 'public'), {
  mimeType: {
    'css': 'text/css',
    'js': 'text/javascript'
  }
}));

// page route
app.get('/', async (request, response) => {
  let country = await countryData.getListOfCountries();
  response.render('index', { country: country });
});

var selectedCountry;
app.get('/city', async (request, response) => {
  let country = await countryData.getListOfCountries();
  selectedCountry = request.query;
  const listOfCities = country.filter((e) => e.country == selectedCountry.country)[0].cities;
  response.render('city', { cities: listOfCities });
});

var selectedCity;
app.get('/category', async (request, response) => {
  selectedCity = request.query;
  // console.log(selectedCountry);
  // console.log(selectedCity);
  response.render('category', { cities: selectedCity, country: selectedCountry });
});

var selectedCategory;
app.get('/result', async (request, response) => {
  selectedCategory = request.query;
  // console.log(selectedCountry);
  // console.log(selectedCity);
  // console.log(selectedCategory);
  let result = await countryData.getResult();
  console.log(result);
  response.render('result', { city: selectedCity.city, country: selectedCountry.country, category: selectedCategory.categories });
});
// API function
// function to fetch data from api