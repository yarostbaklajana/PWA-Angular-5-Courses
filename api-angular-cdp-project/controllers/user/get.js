const { User } = require('../../models/User');

module.exports = async (login, password) => {
  return await User.findOne({login, password});
};
