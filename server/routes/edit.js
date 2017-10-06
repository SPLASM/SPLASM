const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../../db/sql/models/User.js');

app.use(bodyParser.json());

const edit = {
	put: (req, res) => {
		const field = req.body.field;
		const change = req.body.change;
		const userId = req.session.passport.user;

		User.update(
			{field: change},
			{where: {id: userId}}
		).then(result => {
			console.log('result of update: ', result);
			res.send(result);
		}).catch(err => {
			console.error('update error: ', err);
		});
	}
};

module.exports = edit;