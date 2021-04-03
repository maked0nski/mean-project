const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const  app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Головна сторінка сайту');
});

app.listen(port, () =>{
    console.log("Сервер был запущен на порту:" + port);
});
