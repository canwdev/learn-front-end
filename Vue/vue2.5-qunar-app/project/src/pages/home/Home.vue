<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 引入组件
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    // 声明组件，在ES6语法中，当键和值相同时，只需写一个名字
    HomeHeader
  }
}
</script>

<style>

</style>
