// import require modules and set express app
const express = require('express');
const app = express();
const path = require('path');
const countryData = require('./modules/countryapi');

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
  response.render('index', { content: country.data });
});
// API function
// function to fetch data from api