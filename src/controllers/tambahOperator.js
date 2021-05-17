const {ValidationResult, validationResult} = require('express-validator');
const modelAddOP = require('../models/tambahOperator');

exports.addOperator = (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error("Invalid Value");
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const nik = req.body.nik;
    
    const addOP = new modelAddOP({
        fname: fname,
        lname: lname,
        username: username,
        password: password,
        email: email,
        nik: nik
    });

    addOP.save()
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

exports.getAllOperator = (req, res, next) => {
    modelAddOP.find()
    .then(result => {
        res.status(200).json({
            message: "Data semua operator berhasil dipanggil.",
            data: result
        })
    })
    .catch(err => {
        next(err);
    });
}

exports.getOperatorById = (req, res, next) => {
    const operatorId = req.params.operatorId;
    modelAddOP.findById(operatorId)
    .then(result => {
        if(!result) {
            const error = new Error('Operator tidak ditemukan.');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "Data operator berhasil dipanggil.",
            data: result
        })
    })
    .catch(err => {
        next(err);
    });
}

exports.updateOperator = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error("Invalid Value");
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const nik = req.body.nik;
    const operatorId = req.params.operatorId;

    modelAddOP.findById(operatorId)
    .then(operator => {
        if(!operator) {
            const error = new Error('Operator tidak ditemukan.');
            error.errorStatus = 404;
            throw error;
        }

        operator.fname = fname;
        operator.lname = lname;
        operator.username = username;
        operator.password = password;
        operator.email = email;
        operator.nik = nik;

        return operator.save();
    })
    .then(result => {
        res.status(200).json({
            message: "Update data operator berhasil.",
            data: result
        })
    })

    .catch(err => {
        next(err);
    });

}

exports.deleteOperator = (req, res, next) => {
    const operatorId = req.params.operatorId;
    modelAddOP.findById(operatorId)
    .then(operator => {
        if(!operator) {
            const error = new Error('Operator tidak ditemukan.');
            error.errorStatus = 404;
            throw error;
        }
        return modelAddOP.findByIdAndRemove(operatorId);
    })
    .then(result => {
        res.status(200).json({
            message: "Delete operator berhasil.",
            data: result
        })
    })
    .catch(err => {
        next(err);
    });
}
