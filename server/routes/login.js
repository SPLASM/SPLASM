const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/sql/models/User.js');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      where: {name: username}
    }).then ((userObj) => {
      // if the user does not exist
      if (!userObj) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      console.log(JSON.stringify(userObj));
      // if password does not match
      if (userObj.hash !== password) {
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

const login = {
  post: passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
};


module.exports = login;
