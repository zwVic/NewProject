import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'             //vuex
import ElementUI from 'element-ui'    //引入element-ui
import 'element-ui/lib/theme-default/index.css' //element-ui 样式

import NProgress from 'nprogress'   //Progress进度条 在顶部进度条
import 'nprogress/nprogress.css'    //Progress 进度条样式


import './mock/index.js'    //该项目的所以请求使用mockjs模拟
Vue.use(ElementUI);

const whiteList = ['/login','/authredirect','/reset','/sendpwd'];   //不重定向白名单

//router.beforeEach
router.beforeEach((to,from,next)=>{
    NProgress.start();  //滚动条开启
    if(store.getters.token){        //判断是否有token
                                    //没有动态改变权限的需求可直接next() 删除下方权限判断
    }else{
       if(whiteList.indexOf(to.path) !== -1){       //在免登录白名单，直接进入白名单这些路由 无需验证登录
           next();
       }else{
           next('/login');              //其它全部定向到登录路由
           NProgress.done();//在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hash方案  ps:history模式下无问题 可删除该行
       }
    }
});

//router.afterEach
router.afterEach(()=>{
   NProgress.done();    //结束Progress
});
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
