const {Course } = require('../../models/Course');

module.exports = ({title, duration, description}) => {
  return new Course({
    title,
    duration,
    description,
    dateAdded: new Date()
  }).save();
};

