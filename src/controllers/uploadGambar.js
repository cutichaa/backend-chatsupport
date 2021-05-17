const {ValidationResult, validationResult} = require('express-validator');
const uploadImage = require('../models/uploadGambar');

exports.upImage = (req, res, next) => {

    const errors = validationResult(req);

    const image = req.file.path;
    
    const upload = new uploadImage({
        image: image
    });

    upload.save()
    .then(result => {
        res.status(201).json({
            message: "Berhasil Menambahkan Operator.",
            data: result
        });
    })
    .catch(err => {
        console.log('Error')
    });    
}