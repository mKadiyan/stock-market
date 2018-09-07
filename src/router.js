import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/portfolia/Portfolia.vue'
import Stocks from './views/stocks/Stocks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    }
  ]
})
