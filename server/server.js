const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const backendApp = new Koa();
const frontendApp = new Koa();
const backendRouter = new Router();
const frontendRouter = new Router();

const serverBundle=require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'))
const clientManifest=require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'))
const template=fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8')

// const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext:false,
  template: template,
  clientManifest:clientManifest
});
backendApp.use(serve(path.resolve(__dirname, '../dist')));
// 后端Server
backendRouter.get('*', (ctx, next) => {
  // console.log("ctx:")
  console.log(ctx.request.url);
  const context={url:ctx.request.url};
  // console.log(context)
  // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
  renderer.renderToString(context,(err, html) => {
    if (err) {
      console.error(err);
      ctx.status = 500;
      ctx.body = '服务器内部错误';
    } else {
      // console.log(html);
      ctx.status = 200;
      ctx.body = html;
     
    }
  });
});



backendApp
  .use(backendRouter.routes())
  .use(backendRouter.allowedMethods());

backendApp.listen(3000, () => {
  console.log('服务器端渲染地址： http://localhost:3000');
});


// 前端Server
frontendRouter.get('*', (ctx, next) => {
  let html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  ctx.type = 'html';
  ctx.status = 200;
  ctx.body = html;
});

frontendApp.use(serve(path.resolve(__dirname, '../dist')));

frontendApp
  .use(frontendRouter.routes())
  .use(frontendRouter.allowedMethods());

frontendApp.listen(3001, () => {
  console.log('浏览器端渲染地址： http://localhost:3001');
});