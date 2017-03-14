import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import 'flex.css'
import './style/base.css'
import './style/iconfont.less'
import Tool from './utils/Tool'

router.beforeEach((to,from,next)=>{
  Tool.clearRequestPool();//切换页面的时候把上一个页面的请求全部中断掉
  next();
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
