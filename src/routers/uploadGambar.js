const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const routerController = require('../controllers/uploadGambar');

router.post('/chat/upload-gambar', routerController.upImage);

module.exports = router;