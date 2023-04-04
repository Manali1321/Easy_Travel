// import require modules and set express app
const express = require('express');
const path = require('path');
const countryData = require('./modules/countryapi');

const app = express();

// Declared var
var selectedCountry;
var selectedCity;
var selectedCategory;

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


app.get('/city', async (request, response) => {
  let country = await countryData.getListOfCountries();
  selectedCountry = request.query.country;
  const listOfCities = country.filter((e) => e.country == selectedCountry)[0].cities;
  response.render('city', { cities: listOfCities });
});


app.get('/category', async (request, response) => {
  selectedCity = request.query.city;
  response.render('category', { cities: selectedCity, country: selectedCountry });
});


app.get('/result', async (request, response) => {
  selectedCategory = request.query.categories;
  let result = await countryData.getResult(selectedCity, selectedCategory);
  // console.log(result)
  let mapResults = await countryData.mapResult(selectedCategory, selectedCity, selectedCountry);
  response.render('result', { city: selectedCity, country: selectedCountry, category: selectedCategory, result: result, map: mapResults });
});


// API function
// function to fetch data from api