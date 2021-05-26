const {ValidationResult, validationResult} = require('express-validator');
const modelKader = require('../models/kader');

exports.addNoKader = (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error("Invalid Value");
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const noKader_id = req.body.noKader_id;
    const nama = req.body.nama;
    const nik = req.body.nik;   

    
    const addNoKader = new modelKader({
        noKader_id: noKader_id,
        nama: nama,
        nik: nik
    });

    addNoKader.save()
    .then(result => {
        res.status(201).json({
            message: "Berhasil Menambahkan kader.",
            data: result
        });
    })
    .catch(err => {
        console.log('Error')
    });
}


exports.getNoKaderById = (req, res, next) => {
    const noKader_id = req.params.noKader_id;
    modelKader.findById(noKader_id)
    .then(result => {
        if(!result) {
            const error = new Error('Kader tidak ditemukan.');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "Data kader berhasil dipanggil.",
            data: result
        })
    })
    .catch(err => {
        next(err);
    });
}




