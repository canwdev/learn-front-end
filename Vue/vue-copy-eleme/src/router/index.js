import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import vGoods from '@/pages/home/components/Goods/Goods'
import vRatings from '@/pages/home/components/Ratings'
import vSeller from '@/pages/home/components/Seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home,
      // VueRouter 子路由
      children: [
        // 默认子路由
        { path: '/', redirect: '/goods' },
        { path: '/goods', component: vGoods },
        { path: '/ratings', component: vRatings },
        { path: '/seller', component: vSeller }
      ]
    }
  ]
})
