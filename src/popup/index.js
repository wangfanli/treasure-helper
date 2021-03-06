import Vue from 'vue';
import VueRouter from 'vue-router';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import Routers from './router';
import store from './store';

let app = null; // eslint-disable-line

export function initPopup (shell) {
  initApp(shell);
}

function initApp (shell) {
  Vue.use(VueRouter);

  const RouterConfig = {
    routes: Routers,
  };
  const router = new VueRouter(RouterConfig);

  Vue.mixin(shell.mixin);
  app = new Vue({
    router: router,
    extends: App,
    store,
  }).$mount('#app');
}
