const { User } = require('../../models/User');

module.exports = (login, password) => {
  return User.findOne({'login': login, 'password': password});
};
