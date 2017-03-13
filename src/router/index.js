import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Blog from 'pages/Blog'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/blog',
      name: 'index',
      component: Index
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: Blog
    }
  ]
})
