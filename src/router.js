import Vue from 'vue';
import Router from 'vue-router';
const Help = () => import('./views/help/index.vue');

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    //   重定向
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'help',
      meta: {
        nativeTitle: '帮助'
      },
      component: Help,
    },
  ]
});
