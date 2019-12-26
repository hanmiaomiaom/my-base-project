import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('./views/home/index.vue');

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
            name: 'home',
            meta: {
                nativeTitle: '标题'
            },
            component: Home,
            children: []
        }
    ]
});
