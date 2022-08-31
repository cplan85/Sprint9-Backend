const { Schema, model } = require("mongoose");


const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    events: Array,
    maps: Array,
    friends: Array,
    
});

module.exports = model('User', UserSchema);

