const express = require('express');
const User = require('../../models/user');
const router = express.Router();

router.post('/login', function(res, req) {
	
});

router.get('/', function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			console.log(err);
			res.status(404).send("ERROR");
		} else {
			res.status(200).send(users);
		}
	})
});

router.get('/:username', function(req, res) {
	User.findOne(req.params, function(err, user) {
		if (err) {
			console.log(err);
			res.status(404).send("ERROR");
		} else {
			res.status(200).send(user);
		}
	})
});

router.post('/', function(req, res) {
	var oUser = req.body.user;
	var schemaUser = new User(oUser);
	schemaUser.save(function(err) {
		if (err) {
			console.log(err);
			res.status(404).send("ERROR");
		} else {
			res.status(200).send(oUser);
		}
	});
});

router.delete('/', function(req, res) {
	User.find(req.body.user).remove(function(err) {
		if (err) {
			console.log(err);
			res.status(404).send("ERROR");
		} else {
			res.status(200).send('SUCCESSFULLY DELETED');
		}
	});
});

module.exports = router;