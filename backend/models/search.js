const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    q: {
        type: String,
        required: true
    },
    cardImage: {
        type: Object,
        required: true
    },
    imagesResults: {
        type: Array,
        required: true
    },
    id: { 
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Search", searchSchema, "searches")
