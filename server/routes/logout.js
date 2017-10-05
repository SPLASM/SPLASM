const passport = require('passport');

const logout = {
  get: (req, res) => {
  	req.logout();
  	console.log('You are now logged out.');
  	res.redirect('/');
  }
};

module.exports = logout;