<template>
  <div class="header">
    <div class="left">
      <span class="iconfont">&#xe7f1;</span>
    </div>
    <div class="input">
      <span class="iconfont">&#xe741;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/City">
      <div class="right">{{this.$store.state.city}}
        <span class="iconfont">&#xe7ee;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@css/variables.styl'
  .header
    display flex
    line-height .86rem
    background-color $themeColor
    color #fff
    .left
      width .64rem
      float left
      text-align center
    .input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      padding-left .2rem
      background-color #fff
      border-radius .1rem
      color #ccc
    .right
      padding 0 .1rem
      width 1.24rem
      float right
      text-align center
      color #fff
</style>
