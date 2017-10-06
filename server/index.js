const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./router.js');
const sequelize = require('../db/sql/index.js');
const env = require('dotenv').load();
const path = require('path');
const loggedIn = require('./middleware/loggedIn.js');

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'client'), {
  index: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'splasm', resave: true, saveUninitialized: true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

app.get('/', loggedIn, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/', router);

app.listen(port, () => console.log(`App listening on port ${port}`));
