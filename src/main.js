import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import 'flex.css'
import './style/base.css'
import './style/iconfont.less'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
