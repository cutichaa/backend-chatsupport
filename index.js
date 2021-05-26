const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();

const addOPRoutes = require('./src/routers/operator');
const upImageRoutes = require('./src/routers/uploadGambar');
const noKaderRoutes = require('./src/routers/kader');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { // tempat nanti ditaro gambarnye yaitu di folder images
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

// Middleware
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(multer({storage: fileStorage}).single('image'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', addOPRoutes);
app.use('/', upImageRoutes);
app.use('/', noKaderRoutes);


app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({message: message, data: data});

});


mongoose.connect('mongodb://localhost:27017/chat-app')
.then(() => {
    app.listen(4000, () => console.log('Server berhasil tersambung.'));
    
})
.catch(err => console.log(err));
