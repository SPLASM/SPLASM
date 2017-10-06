const Sequelize = require('sequelize');
const url = process.env.JAWSDB_URL;
let sequelize;

if (url) {
  sequelize = new Sequelize(url, {});
} else {
  const credentials = require('./credentials/credentials.js');
  sequelize = new Sequelize('splasm', credentials.username, credentials.password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });
}

sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to mysql database');
  })
  .catch((err) => {
    console.error('Error connecting to mysql database', err);
  });

module.exports = sequelize;

const Course = require('./models/Course.js');
const Session = require('./models/Session.js');
const User = require('./models/User.js');
const UserToFriends = require('./models/UserToFriends.js');
const UserToCourse = require('./models/UserToCourse.js');
