const Sequelize = require('sequelize');
const sequelize = require('../../db/sql/index.js');
const User = require('../../db/sql/models/User.js');

var userdata = {
  get: (req, res) => {
    if (req.user === undefined) {
      res.send('no user data');
    } else {
      User.findById(req.session.passport.user, {
        attributes: ['name']
      })
        .then((results) => {
          res.send(results.name);
        })
        .catch((err) => {
          console.error('Error finding user by session');
        })
    }
  }
};

module.exports = userdata;
