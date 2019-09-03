import router from './index';

export default function () {
    router.beforeEach((to, from, next) => {
        next()
    });

    router.afterEach((to, from) => {

    });

}
