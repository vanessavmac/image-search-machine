const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    q: {
        type: String,
        required: true
    },
    tbm: {
        type: String,
        required: true
    },
    ijn: {
        type: String,
        required: true
    },
    cardImage: {
        type: Array,
        required: true
    },
    imagesResults: {
        type: Array,
        required: true
    },
})

module.exports = mongoose.model("Search", searchSchema, "searches")
