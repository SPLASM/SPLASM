const Sequelize = require('sequelize');
const sequelize = require('../index.js');
const User = require('./User.js');
const Course = require('./Course.js');

const UserToCourse = sequelize.define('usertocourse', {
  status: Sequelize.STRING
});

User.belongsToMany(Course, {through: UserToCourse});
Course.belongsToMany(User, {through: UserToCourse});

UserToCourse.sync()
  .then(() => {
    console.log('successfully created user to course table');
  })
  .catch((err) => {
    console.log('error creating user to course table', err);
  });

module.exports = UserToCourse;
