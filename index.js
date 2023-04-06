// import require modules and set express app
const express = require('express');
const path = require('path');
const data = require('./modules/countryapi');

const app = express();

// Declared var
var selectedCountry;
var selectedCity;
var selectedCategory;
var coordi;
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
let country;
// page route
app.get('/', async (request, response) => {
  country = await data.getListOfCountries();
  response.render('index', { country: country });
});


app.get('/city', async (request, response) => {
  // console.log(country);
  selectedCountry = request.query.country;
  const listOfCities = country.filter((e) => e.country == selectedCountry)[0].cities;
  response.render('city', { cities: listOfCities, country: selectedCountry });
});


app.get('/category', async (request, response) => {
  selectedCity = request.query.city;
  let weatherIcon = await data.weatherIcon(selectedCity);
  let weatherData = await data.weatherData(selectedCity);
  let mapResults = await data.mapResult(selectedCity, selectedCountry);

  response.render('category', { cities: selectedCity, country: selectedCountry, weatherIcon: weatherIcon, weatherData, map: mapResults });
});


app.get('/result', async (request, response) => {
  selectedCategory = request.query.categories;
  let result = await data.getResult(selectedCity, selectedCategory);
  console.log(result)
  response.render('result', { cities: selectedCity, country: selectedCountry, category: selectedCategory, result: result });
});


// API function
// function to fetch data from api