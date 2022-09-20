// this api file will be purely for managing data in the database
const express = require("express");
const router = express.Router();

const generateZipForPath = require("../controllers/generateZipForPath");

// Retrieve all search results from database
router.get("/zip", async (req, res) => {
    const zip = await generateZipForPath();
    const zipAsBase64 = await zip.generateAsync({ type: "blob" });
    res.send(zipAsBase64);
});

module.exports = router;
