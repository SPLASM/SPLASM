const Sequelize = require('sequelize');
const sequelize = require('../../db/sql/index.js');
const User = require('../../db/sql/models/User.js');

var userdata = {
  get: (req, res) => {
    if (req.user === undefined) {
      res.send('');
    } else {
      User.findOne({
        attributes: ['name'],
        where: {id: req.session.passport.user}
      })
        .then((results) => {
          res.send(results.name);
        })
        .catch((err) => {
          console.error('Error finding user by session');
        });
    }
  }
};

module.exports = userdata;
