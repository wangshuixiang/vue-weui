import Vue from 'vue'
import App from './App.vue'
import router from './router'
import weui from 'weui.js';

//https://weui.io/weui.js/  参考demo
// console.log(weui);

Vue.config.productionTip = false;

import api from "./api"
import ajax from "./ajax"

Vue.prototype.$api = api;    //  全局挂载
Vue.prototype.$ajax = ajax;  //  全局挂载
Vue.prototype.$weui = weui;  //  全局挂载


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
