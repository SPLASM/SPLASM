var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SPLASM');

var UsersModel = require('./collections/users.js');

var db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
  console.log('Database connected');
});

module.exports = db;