const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const routerController = require('../controllers/kader');


router.post('/kader/add-no-kader', [
    body('noKader_id').isLength({min: 1}).withMessage('Input nomor kader tidak sesuai.'),
    body('nama').isLength({min: 1}).withMessage('Input nama kader tidak sesuai.'),
    body('nik').isLength({min: 1}).withMessage('Input nik kader tidak sesuai.')],
    routerController.addNoKader);

router.get('/kader/get-no-kader/:noKader_id', routerController.getNoKaderById);


module.exports = router;