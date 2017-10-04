const Sequelize = require('sequelize');
const sequelize = require('../index.js');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  hash: Sequelize.STRING,
  picture: Sequelize.STRING
});

User.sync()
  .then(() => {
    console.log('successfully created user table');
  })
  .catch((err) => {
    console.log('error creating user table', err);
  });

module.exports = User;
