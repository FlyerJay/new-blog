import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import VueResource from "vue-resource"
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes,
	mode:"history",
	base:"/"
})

new Vue({
	el:"#app",
	router,
})
