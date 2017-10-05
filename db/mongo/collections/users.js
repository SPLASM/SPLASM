var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  name: {
    type: String,
    index: {
      unique: true
    }
  },
  courses: Array,
  interests: Array,
  picture: String
});

var UsersModel = mongoose.model('UsersModel', UsersSchema);

module.exports = UsersModel;
