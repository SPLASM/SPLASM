var express = require('express');
var router = express.Router();
var users = require('./routes/users.js');
var login = require('./routes/login.js');
var signup = require('./routes/signup.js');

router.get('/users/api/:username', users.get);
router.post('/login', login.post);
router.post('/signup', signup.post);

router.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
