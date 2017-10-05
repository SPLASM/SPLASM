var mongoose = require('mongoose');
let uri = process.env.MONGODB_URI || 'mongodb://localhost/SPLASM';
mongoose.connect(uri);

var UsersModel = require('./collections/users.js');

var db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Successfully connected to mongo database'));

module.exports = db;
