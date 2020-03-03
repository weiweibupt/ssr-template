import Vue from 'vue';
import App from './App.vue';

import {createRouter} from './router/index.js'

var router=createRouter();
console.log("app.js::::",router.routes)
export function createApp() {
  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app,router };
}