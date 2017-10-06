const passport = require('passport');
const path = require('path');

const logout = {
  get: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};

module.exports = logout;
