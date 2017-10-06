const path = require('path');
const User = require('../../db/sql/models/User.js');
const bcrypt = require('bcryptjs');
const loggedIn = require('../middleware/loggedIn.js');

const signup = {
  post: (req, res) => {
  // check if the user already exists before creating new user
    User.findOne({
      where: {name: req.body.username}
    }).then((existingUser) => {
      if (!existingUser) {
      // hash password with bcrypt before adding to db
        let salt = bcrypt.genSaltSync(13);
        let hash = bcrypt.hashSync(req.body.password, salt);
        User.create({
          name: req.body.username,
          hash: hash
        })
          .then(() => {
            console.log('User successfully signed up');
            return loggedIn.login(req, res);
          })
          .catch(err => {});
      } else {
        console.log('Username already exists. Please choose another.');
      }
    }).catch(err => {
      console.error(err);
    });
  },
  get: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/index.html'));
  }
};

module.exports = signup;
