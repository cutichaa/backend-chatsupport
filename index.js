const express = require('express');

const app = express();

app.use(()=>{
    console.log('Hello Ngab');
}); 

app.listen(4000);