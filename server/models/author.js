const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        minlength: 1,
    },

    name: {
        type: String,
        required: true,
        minlength: 2,
    },

    birth: {
        type: Number,
        required: false,
        minlength: 2,
    },
})

schema.plugin(uniqueValidator);
module.exports = mongoose.model('Author', schema)