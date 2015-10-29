
var Vue = require('vue');
var Router = require('vue-router');
Vue.use(Router);

// Screens
var IndexView = Vue.component('index', require('views/index.vue'));

// Routing
var router = new Router();

router.map(
  {
    '/': {
      component: IndexView
    }
  }
);

router.start(Vue, "#app");
