const getCourses = require('./controllers/courses/getAll');
const getCourse = require('./controllers/courses/getOne');
const getUser = require('./controllers/user/get');

module.exports = (router) => router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .get('/courses', async (ctx, next) => {
    console.log(ctx.isAuthenticated());
    ctx.body = 'Helle from courses';

    if (!ctx.isAuthenticated()) {
      ctx.response.status = 401;
    } else {
      ctx.body = getCourses(ctx.user.id);
    }
  })
  .get('/login', (ctx, next) => {
    const userData = getUser(ctx.login, ctx.password);
    if (!Object.keys(userData).length) {
      ctx.response.status = 404;
      ctx.response.message = 'Username or password is not valid';
    } else {
      ctx.body = userData;
    }
  })
  .put('/courses/:id', (ctx, next) => {
    ctx.body = 'Updated World!';
  })
  .del('/courses/:id', (ctx, next) => {
    ctx.body = 'Deleted World!';
  });