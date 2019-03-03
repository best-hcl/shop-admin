import Vue from 'vue'
import App from './App.vue'


// 1导入axios 文件
import axios from 'axios';

//2.1引入element-ui 插件
import ElementUI from "element-ui";
// 2.2 elmenet-ui 引入样式
import 'element-ui/lib/theme-chalk/index.css';

// 2.3 注册插件
Vue.use(ElementUI);
Vue.config.productionTip = false


//2给axios 绑定 属性  vue构造函数的原型链添加$axios 
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
