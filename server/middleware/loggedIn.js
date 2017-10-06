const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const User = require('../../db/sql/models/User.js');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      where: {name: username}
    }).then ((userObj) => {
      // if the user does not exist
      if (!userObj) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      // if password does not match
      if (!bcrypt.compareSync(password, userObj.hash)) {
        console.log('password does not match');
        return done(null, false, {message: 'Incorrect password.'});
      }
      // else user and password match
      return done(null, userObj);
    }).catch((err) => {
      console.error(err);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  }).catch(error => console.error(error));
});

const loggedIn = {
  login: passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
};

module.exports = loggedIn;
