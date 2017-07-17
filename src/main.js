import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'             //vuex
import ElementUI from 'element-ui'    //引入element-ui
import 'element-ui/lib/theme-default/index.css' //element-ui 样式

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
