var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/pong', {
  useMongoClient: true
});

var db = mongoose.connection;

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;