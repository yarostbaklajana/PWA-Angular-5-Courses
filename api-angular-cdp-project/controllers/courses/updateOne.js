const { Course } = require('../../models/Course');

module.exports = ({id, ...propsToUpdate}) => {
  return Course.updateOne({id}, {...propsToUpdate});
};
