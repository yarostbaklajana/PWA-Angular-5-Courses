const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('./models/User');
const options = {};

passport.serializeUser((user, done) => { done(null, user.id); });

passport.deserializeUser((id, done) => {
  return User.findById({id})
    .then((user) => { done(null, user); })
    .catch((err) => { done(err,null); });
});

passport.use(new LocalStrategy(options, (username, password, done) => {
  User.findOne({ username })
    .then((user) => {
      if (!user) return done(null, false);
      if (password === user.password) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => { return done(err); });
}));