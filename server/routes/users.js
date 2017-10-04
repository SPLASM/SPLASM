const Sequelize = require('sequelize');
const sequelize = require('../../db/sql/index.js');
const User = require('../../db/sql/models/User.js');
const Course = require('../../db/sql/models/Course.js');

var users = {
  get: function(req, res) {
    User.findAll({
      include: [
        { model: Course },
        { model: User , as: 'friend' }
      ],
      where: {name: req.params.username}
    })
    .then((result) => {
      res.send((JSON.stringify(result)));
    })
    .catch((err) => {
      console.error('Error finding user');
    });
  }
};

module.exports = users;
