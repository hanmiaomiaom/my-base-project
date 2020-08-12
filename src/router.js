import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
    //   重定向
    // {
    //     path: '*',
    //     redirect: '/',
    // },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                nativeTitle: '首页'
            },
            component: () => import('./views/tabs/index.vue'),
            redirect: '/home/index',
            children: [{
                path: 'index',
                component: () => import('./views/home/index.vue'),
            }]
        },
        {
            path: '/work',
            name: 'work',
            meta: {
                nativeTitle: '工作'
            },
            component: () => import('./views/tabs/index.vue'),
            redirect: '/work/index',
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('./views/work/index.vue')
            }]
        },
        {
            path: '/statistic',
            name: 'statistic',
            meta: {
                nativeTitle: '统计'
            },
            component: () => import('./views/tabs/index.vue'),
            redirect: '/statistic/index',
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('./views/statistic/index.vue')
            }]

        },
        {
            path: '/search',
            name: 'search',
            meta: {
                nativeTitle: '搜索'
            },
            component: () => import('./views/tabs/index.vue'),
            redirect: '/search/index',
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('./views/search/index.vue')
            }]
        },
        {
            path: '/my',
            name: 'my',
            meta: {
                nativeTitle: '我的'
            },
            component: () => import('./views/tabs/index.vue'),
            redirect: '/my/index',
            children: [{
                path: 'index',
                name: 'index',
                component: () => import('./views/my/index.vue')
            }]
        },


    ]
});
