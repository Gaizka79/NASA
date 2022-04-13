const mongoose = require('mongoose');
//const { trusted } = require('../utils/mongoConfig');

const landingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        trim: true
    },
    nametype: {
        type: String,
        required: true,
        trim: true
    },
    recclass: {
        type: String,
        required: true,
        trim: true
    },
    mass: {
        type: String,
        required: true,
        trim: true
    },
    fall: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    reclat: {
        type: String,
        required: true,
        trim: true
    },
    reclong: {
        type: String,
        required: true,
        trim: true
    },
    geolocation: [{
        latitude: String,
        longitude: String
    }]
});
module.exports = mongoose.model("Landings", landingsSchema);