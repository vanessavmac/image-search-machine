// this api file will be purely for managing data in the database
const express = require("express");
const router = express.Router();

require("dotenv").config();
const { API_KEY_VALUE } = process.env;

const Search = require("../models/Search");

// Retrieve all search results from database
router.get("/get-all", (req, res) => {
  Search.find()
    .then((searches) => res.json(searches))
    .catch((err) => console.log(err));
});

// Write new image search results from SerpApi to database
router.post("/new-search", async (req, res) => {
  const SerpApi = require("google-search-results-nodejs");
  const search = new SerpApi.GoogleSearch(API_KEY_VALUE);

  const { q, tbm, ijn } = req.body.params;

  const handlePictures = async (req, res) => {
    return new Promise((resolve) => {
      const params = {
        api_key: API_KEY_VALUE,
        q: q,
        tbm: tbm,
        ijn: ijn,
      };

      const callback = function (data) {
        resolve(data);
      };

      search.json(params, callback);
    });
  };
  const results = await handlePictures(req, res);

  // create schema and add data to data base here
  const imagesResults = results.images_results;

  // images results is an array of json objects
  const newSearch = new Search({
    q: q,
    tbm: tbm,
    ijn: ijn,
    cardImage: imagesResults[0],
    imagesResults: imagesResults,
  });
  newSearch
    .save()
    .then(() =>
      res.json({
        message: "Search results successfully saved",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: "Error saving search results",
      })
    );
  // on success change UI to display cards by pulling data from the database
});

module.exports = router;
