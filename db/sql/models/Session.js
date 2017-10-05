const Sequelize = require('sequelize');
const sequelize = require('../index.js');

const Session = sequelize.define('session', {

});

Session.sync()
  .then(() => {
    console.log('successfully created session table');
  })
  .catch((err) => {
    console.log('error creating session table', err);
  });

module.exports = Session;
