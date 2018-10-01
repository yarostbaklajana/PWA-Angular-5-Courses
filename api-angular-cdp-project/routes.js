const getCourses = require('./controllers/courses/getAll');
const getCourse = require('./controllers/courses/getOne');

module.exports = (router) => router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .get('/courses', async (ctx, next) => {
    ctx.body = 'Helle from courses';
    if (!ctx.isAuthenticated) {
      ctx.response.status(401);
    } else {
      ctx.body = getCourses(ctx.user.id);
    }
  })
  .put('/courses/:id', (ctx, next) => {
    ctx.body = 'Updated World!';
  })
  .del('/courses/:id', (ctx, next) => {
    ctx.body = 'Deleted World!';
  })
  .get('/login', (ctx, next) => {
    ctx.bodu = 'Logged in';
  });