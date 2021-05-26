const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const routerController = require('../controllers/operator');


router.post('/admin/add-operator', [
    body('fname').isLength({min: 1}).withMessage('Input nama depan tidak sesuai.'),
    body('lname').isLength({min: 1}).withMessage('Input nama belakang tidak sesuai.'),
    body('username').isLength({min: 1}).withMessage('Input username tidak sesuai.'),
    body('password').isLength({min: 8}).withMessage('Input password tidak sesuai.'),
    body('email').isLength({min: 1}).withMessage('Input email tidak sesuai.'),
    body('nik').isLength({min: 1}).withMessage('Input nik tidak sesuai.')],
    routerController.addOperator);

router.get('/admin/get-operators', routerController.getAllOperator);

router.get('/admin/get-operator/:operatorId', routerController.getOperatorById);

// update operator
router.put('/admin/get-operator/:operatorId', [
    body('fname').isLength({min: 1}).withMessage('Input nama depan tidak sesuai.'),
    body('lname').isLength({min: 1}).withMessage('Input nama belakang tidak sesuai.'),
    body('username').isLength({min: 1}).withMessage('Input username tidak sesuai.'),
    body('password').isLength({min: 8}).withMessage('Input password tidak sesuai.'),
    body('email').isLength({min: 1}).withMessage('Input email tidak sesuai.'),
    body('nik').isLength({min: 1}).withMessage('Input nik tidak sesuai.')],
routerController.updateOperator);

// delete operator
router.delete('/admin/get-operator/:operatorId', routerController.deleteOperator);


module.exports = router;