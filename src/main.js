import FastClick from 'fastclick';
import Vue from 'vue';
import './cube-ui';
import './common/js/WinUtil';
import './common/scss/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from 'axios';

// 移动端移动点击延时
document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
}, false);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
