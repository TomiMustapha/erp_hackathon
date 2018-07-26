const users = require('./routes/api/users');
const bodyParser = require('body-parser'); 
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

var options = {
	useNewUrlParser: true
}
mongoose.connect('mongodb://admin:sum4mer8@ds153851.mlab.com:53851/erp_hackathon', options, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log('db connection successful.');
	}
});

app.all('/*', function (req, res, next) {
  console.log('REQUEST: ' + req.method + ' ' + req.path + ' ' + JSON.stringify(req.query));
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.use('/users', users);

app.listen(port, console.log('running on port', port));
