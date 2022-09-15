const { Schema, model } = require("mongoose");


const EventsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    
    startTime: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false
    },
    min: {
        type: Number,
        required: false,
    },
    max: {
        type: Number,
        required: false,
    },
    currency: {
        type: String,
        required: false,
    },
    venue: {
        type: String,
        required: false,
    },
    venueUrl: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    promoter: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    lat: {
        type: Number,
        required: false,
    },
    long: {
        type: Number,
        required: false,
    },
    note: {
        type: String,
        required: false,
    },
});

module.exports = model('Event', EventsSchema);

