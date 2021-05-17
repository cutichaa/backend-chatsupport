const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadImage = new Schema({
    image: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('uploadImage', uploadImage);