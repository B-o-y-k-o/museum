const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const db = require('./config/db');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, dataBase) => {
    if (err) {
        return console.log('ERROR: ', err);
    };

    require('./app/routes')(app, dataBase);

    app.listen(port, () => {
        console.log('LISTEN: ', port);
    });
});




