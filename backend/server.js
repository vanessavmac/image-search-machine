const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const path = require("path");
require("./database");
const fs = require("fs");
const https = require("https");

const PORT = 8080;

const privateKey = fs.readFileSync("localhost-key.pem");
const certificate = fs.readFileSync("localhost.pem");

// Create Express Server
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use SSL certificate to make requests to SerpApi
https
  .createServer(
    {
      key: privateKey,
      cert: certificate,
    },
    app
  )
  .listen(PORT, function () {
    console.log("Express server listening on port " + PORT);
  });

// API
const searches = require("./api/searches");
app.use("/api/searches", searches);
