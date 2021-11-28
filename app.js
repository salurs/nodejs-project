const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//Template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('public'));

//Routes
app.get('/', function (req, res) {
    // res.sendFile(path.resolve(__dirname, 'template/index.html'));
    res.render('index');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/add-photo', function (req, res) {
    res.render('add');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server start on ${port} port.`);
});
