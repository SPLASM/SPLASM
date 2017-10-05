const Sequelize = require('sequelize');
const sequelize = require('../index.js');
const User = require('./User.js');

const UserToFriend = sequelize.define('usertofriends', {});

User.belongsToMany(User, {as: 'friend', through: UserToFriend});

UserToFriend.sync()
  .then(() => {
    console.log('successfully created user to course table');
  })
  .catch((err) => {
    console.log('error creating user to course table', err);
  });

module.exports = UserToFriend;
