const mongoose = require('mongoose');
require('./mongoose');

const AuthorSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: [true, "Name is required"],
        minlength: 2
    },

    genre: {
        type: String,
        required: [true, "Genre is required"],
        minlength: 1
    },

    quotes: [{
        quote: {
            type: String,
            required: [true, "You need to write a quote"],
            minlength: 3,
            default: ""
        },
        votes: {
            type: Number,
            default: 0
        }
    }]
}, {timestamps:true});

module.exports = {
    Author: mongoose.model('Author', AuthorSchema)
}