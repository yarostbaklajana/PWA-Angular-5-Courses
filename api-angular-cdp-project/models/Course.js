const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  duration: Number,
  dateAdded: Date,
  description: String,
});

const Course = mongoose.model('Course', schema);

module.exports.Course = Course;
