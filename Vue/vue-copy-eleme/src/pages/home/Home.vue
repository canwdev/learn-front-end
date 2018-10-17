<template>
  <div class="app">
    <v-header></v-header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import vHeader from './components/Header'
import vGoods from './components/Goods'
import vRatings from './components/Ratings'
import vSeller from './components/Seller'

// 局部的路由
Vue.use(Router)

const routes = [
  { path: '/goods', component: vGoods },
  { path: '/ratings', component: vRatings },
  { path: '/seller', component: vSeller }
]

const router = new Router({
  mode: 'abstract', // 在地址栏不显示变化
  linkActiveClass: 'active',
  routes
})

export default {
  name: 'Home',
  components: {
    vHeader
  },
  router
}
</script>

<style lang="stylus" scoped>
.app
  .tab
    display flex
    justify-content space-around
    border-bottom 1px solid rgba(7,17,27,.1)
    .tab-item
      line-height 45px
      flex 1
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      &.active
        color rgb(240, 20, 20)
</style>
