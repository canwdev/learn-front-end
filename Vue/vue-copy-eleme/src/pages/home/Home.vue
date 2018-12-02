<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <!-- 切tab时，保持路由页面存活 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import vHeader from './components/Header/Header'

Vue.use(VueResource)

export default {
  name: 'Home',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    vHeader
  },
  created () {
    this.$http.get('/api/seller').then((res) => {
      console.log('seller', res.body)
      this.seller = res.body
    }, (res) => {
      console.log('GetError!', res)
    })
  }
}
</script>

<style lang="stylus" scoped>

.app
  height 100%
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
