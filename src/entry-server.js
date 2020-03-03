import {
  createApp
} from './app.js';

export default context => {
  return new Promise((resolve, reject) => {
    var {
      app,
      router
    } = createApp();
    // console.log(router)
    console.log("entry-server.js context.url::::::" + context.url)
    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      console.log("matchedComponents:::::" + matchedComponents.length)
      if (!matchedComponents.length) {
        return reject({
          code: 404
        })
      }
      resolve(app);
    },reject)


    // return app;
  })
}