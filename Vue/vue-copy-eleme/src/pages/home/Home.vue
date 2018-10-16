<template>
  <div class="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
  </div>
</template>

<script>
import vHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    vHeader
  }
}
</script>

<style lang="stylus" scoped>
.app
  .tab
    display flex
    justify-content space-around
    background #ccc
    .tab-item
      line-height 45px
      flex 1
      text-align center
</style>
