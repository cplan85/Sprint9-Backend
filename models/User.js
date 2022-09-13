const { Schema, model } = require("mongoose");


const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    events: {
        type: Array,
        required: false
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
    maps: {
        type: Array,
        required: false,
    },
    friends: {
        type:Array,
        required: false,
    }
    
});

module.exports = model('User', UserSchema);

