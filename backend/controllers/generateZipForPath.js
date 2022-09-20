const JSZip = require("jszip");
const fs = require("fs");
const request = require("request");

const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);
    fs.mkdir("downloads", { recursive: true }, (err) => {
      if (err) throw err;
    });
    request(uri)
      .pipe(fs.createWriteStream("downloads/" + filename))
      .on("close", callback);
  });
};

module.exports = async () => {
  const zip = new JSZip();

  const Search = require("../models/Search");
  const getSavedSearches = await Search.find({}).lean().exec();
  const getImgAddresses = [];
  getSavedSearches.forEach((element) => {
    getImgAddresses.push({
      query: element.q,
      address: element.cardImage.original,
    });
  });
  getImgAddresses.forEach((element) => {
    download(element.address, element.query, () => {
      console.log("done");
    });
  });

  //   zip.file();
};
