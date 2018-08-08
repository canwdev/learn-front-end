<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 引入组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    // 声明组件，在ES6语法中，当键和值相同时，只需写一个名字
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
