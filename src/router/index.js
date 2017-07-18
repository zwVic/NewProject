/**
 * Created by admin on 2017/7/17.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../view/layout/Layout.vue'
import Introduction from '../view/introduction/index.vue'       //简述

import Login from '../view/login/index.vue'                     //登录

import Err404 from '../view/error/401.vue'
import Err401 from '../view/error/404.vue'

Vue.use(Router);
export const constantRouterMap = [
    {path:'/login',component:Login,hidden:true},
    {path:'/404',component:Err404,hidden:true},
    {path:'/401',component:Err401,hidden:true},
    {
        path: '/',
        component: Layout,
        // redirect:'/dashboard',      //路由重定向到dashboard
        name: '首页',
        hidden: true,
        // children:[{path:'dashboard',component:dashboard}]
    },
    {
        path: '/introduction',
        component: Layout,
        redirect: '/introduction/index',
        noDropdown: true,
        children: [{path: 'index', component: Introduction, name: '简述'}]
    }
]

export default new Router({
    routes: constantRouterMap
})
