const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        minlength:1,
    },

    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },

    published: {
        type: Number,
        required: true,
        minlength: 2,
    },

    author: {
        type: String,
        required: true,
        minlength: 2,
    },

    genres: {
        type: [String],
        required: true,
    }
})

schema.plugin(uniqueValidator);
module.exports = mongoose.model('Book', schema)