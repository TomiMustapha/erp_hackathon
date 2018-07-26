const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const incidents = require('./routes/api/incidents');
const users = require('./routes/api/users');
const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db options
var options = {
    useNewUrlParser: true
};

// db connection
console.log(process.env.mongoURI);
mongoose.connect(
    process.env.mongoURI,
    options,
    function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log('db connection successful.');
        }
    }
);

app.all('/*', function(req, res, next) {
    console.log(
        'REQUEST: ' +
            req.method +
            ' ' +
            req.path +
            ' ' +
            JSON.stringify(req.query)
    );
    next();
});

// default route
app.get('/', function(req, res) {
    res.send('Hello World');
});

// routes
app.use('/users', users);
app.use('/incidents', incidents);

app.listen(port, console.log('running on port', port));
