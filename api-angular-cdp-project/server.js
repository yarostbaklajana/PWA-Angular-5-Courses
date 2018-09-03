const Koa = require('koa');
var Router = require('koa-router');

const app = new Koa();
var router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/courses', (ctx, next) => {
    ctx.body = 'Created World!';
  })
  .put('/courses/:id', (ctx, next) => {
    ctx.body = 'Updated World!';
  })
  .del('/courses/:id', (ctx, next) => {
    ctx.body = 'Deleted World!';
  });

app.on('error', err => {
  console.error('server error', err)
});

// response

app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000);