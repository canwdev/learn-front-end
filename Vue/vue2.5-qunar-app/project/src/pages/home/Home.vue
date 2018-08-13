<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// 引入组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// 引入axios来发送ajax请求
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    // 声明组件，在ES6语法中，当键和值相同时，只需写一个名字
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      // 转发机制 proxy，在/config/index.js
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    // ajax回调
    getHomeInfoSucc (res) {
      console.log(res)
    }
  }
}
</script>

<style>

</style>
