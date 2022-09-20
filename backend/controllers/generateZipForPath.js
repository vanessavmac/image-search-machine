const JSZip = require("jszip");
const fs = require("fs");
const request = require("request");

const download = async function (uri, filename, callback) {
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
  getImgAddresses.forEach(async (element) => {
    await download(element.address, element.query, () => {
      console.log("Image downloaded.");
    }).then(async () => {
      const file = require("../downloads/" + element.query);
      zip.file(element.query + ".png", file, { binary: true });
    });
  });

  zip.folder("../downloads");
  const zipAsBase64 = await zip.generateAsync({ type: "blob" });
  return zipAsBase64;
};
