const express = require('express');
const path = require('path');

const app = express();

//static files
app.use(express.static('public'));
app.use(express.static('template'));

app.get('/', function (req, res) {
    const photo = {
        id: 1,
        name: 'Photo name',
        description: 'Photo description',
    };
    res.status(200).send(photo);
});

app.get('/index', function (req, res) {
    res.sendFile(path.resolve(__dirname,'template/index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(__dirname);
    console.log(`Server start on ${port} port.`);
});
