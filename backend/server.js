const express = require('express');
require('dotenv').config();

const fs = require('fs')
const https = require('https')

// Create Express Server
const app = express();

var cors = require('cors');
app.use(cors());

const PORT = 8080;
const HOST = 'localhost';
const { API_BASE_URL, API_KEY_VALUE } = process.env;

var privateKey = fs.readFileSync( 'localhost-key.pem' );
var certificate = fs.readFileSync( 'localhost.pem' );

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(PORT, function(){
  console.log("Express server listening on port " + PORT);
});

app.get('/image-search', async (req, res) => {
  const SerpApi = require('google-search-results-nodejs');
  const { json } = require('express');
  const search = new SerpApi.GoogleSearch(API_KEY_VALUE);
  const handlePictures = async (request, response) => {
    return new Promise((resolve) => {
      const params = {
        api_key: API_KEY_VALUE,
      q: 'Apple',
      tbm: 'isch',
      ijn: '0'
      };
  
      const callback = function(data) {
          resolve(data);
      };
  
      search.json(params, callback);
    });
  };
  results = await handlePictures(req, res)
  res.send(results)
});
