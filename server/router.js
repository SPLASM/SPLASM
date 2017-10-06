var express = require('express');
var router = express.Router();
var users = require('./routes/users.js');
var login = require('./routes/login.js');
var logout = require('./routes/logout.js');
var signup = require('./routes/signup.js');
var userdata = require('./routes/userdata.js');
var courses = require('./routes/courses.js');
var edit = require('./routes/edit.js');

router.post('*/api/courses/:courseName', courses.post);
router.get('*/api/courses', courses.get);
router.get('*/api/userdata', userdata.get);
router.get('*/api/users', users.getAllUsers);
router.get('*/users/api/:username', users.getUser);
router.post('/login', login.post);
router.get('/login', login.get);
router.post('/signup', signup.post);
router.get('/signup', signup.get);
router.get('/logout', logout.get);
router.put('/edit', edit.put);


router.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
