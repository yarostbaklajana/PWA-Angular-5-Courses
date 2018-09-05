const {Course} = require('../../models/Course');

module.exports = (id) => {
  return Course.deleteOne({'id': id});
};
