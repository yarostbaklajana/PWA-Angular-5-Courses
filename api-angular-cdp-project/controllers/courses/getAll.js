const {Course} = require('../../models/Course');

module.exports = async (userId) => {
  const courseIds = await User.fingById(userId).select('courseIds');
  return await Course.find().where('id').in(courseIds);
};
