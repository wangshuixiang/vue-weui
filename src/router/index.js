import Vue from 'vue';
import Router from "vue-router";
import enter from '@/views/enter.vue';
import weuiDemo from '@/views/weui-demo.vue';

import router from './router';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/enter",
            name: "enter",
            component: enter,
        },
        {
            path: "/weui-demo",
            name: "weuiDemo",
            component: weuiDemo,
        }
    ]
});

router();
