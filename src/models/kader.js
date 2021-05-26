const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelKader = new Schema({
    noKader_id: {
        type: Number,
        require: true,
    },
    nama: {
        type: String,
        require: true,
    },
    nik: {
        type: Number,
        require: true,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('modelKader', modelKader);