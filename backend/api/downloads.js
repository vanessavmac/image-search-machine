// this api file will be purely for managing data in the database
const express = require("express");
const router = express.Router();

const generateZipForPath = require("../controllers/generateZipForPath")

// Retrieve all search results from database
router.use("/zip", async (req, res) => {
    const zip = await generateZipForPath("downloads");
    res.send(zip)
});

module.exports = router;
