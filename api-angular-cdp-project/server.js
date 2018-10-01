const Koa = require('koa');
const Router = require('koa-router');
const { db } = require('./db');
const RedisStore = require('koa-redis');

const app = new Koa();
const router = new Router();

const session = require('koa-session');
const passport = require('koa-passport');

app.on('error', err => {
  console.error('server error', err)
});

// sessions
app.keys = ['super-secret-key'];
app.use(session(app));

// authentication
require('./auth');
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(router);
app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000);