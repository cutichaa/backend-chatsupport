const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelOP = new Schema({
    fname: {
        type: String,
        require: true,
    },
    lname: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    nik: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('modelOP', modelOP);