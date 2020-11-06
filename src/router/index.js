import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMaps } from './router.config'

Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

let routes = constantRouterMaps

const router = new Router({
    // mode: 'history', // 路由有两种模式：history、hash，想要不带#号就选history，默认是hash模式
    // base: base,
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});

export default router;