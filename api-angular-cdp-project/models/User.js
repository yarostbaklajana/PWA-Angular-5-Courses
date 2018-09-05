const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  login: String,
  password: String,
  courseIds: Array
});

const User = mongoose.model('User', schema);

module.exports.User = User;
