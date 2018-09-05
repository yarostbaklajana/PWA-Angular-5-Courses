const {Course} = require('../../models/Course');

module.exports = (ids) => {
  return Course.find().where('id').in(ids);
}
