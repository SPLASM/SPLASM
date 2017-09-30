var express = require('express');
var router = express.Router();
var users = require('./routes/users.js');

router.get('/users', users.get);

module.exports = router;