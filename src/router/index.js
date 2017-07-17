/**
 * Created by admin on 2017/7/17.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../view/layout/Layout.vue'

Vue.use(Router);

export const constantRouteMap = [
    {
        path: '/',
        component:Layout,
        // redirect:'/dashboard',      //路由重定向到dashboard
        name:'首页',
        hidden:true
    }
]

export default new Router({
    routes:constantRouteMap
})
