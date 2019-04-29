
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    mobile: {
        type: Number
    },

    designation: {
        type: String
    }
},{
    collation: 'business'
});

module.exports = mongoose.model('Business', Business)