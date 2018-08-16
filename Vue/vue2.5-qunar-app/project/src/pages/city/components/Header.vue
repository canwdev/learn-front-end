<template>
  <div class="header">
    <router-link to="/">
      <div class="left">
        <span class="iconfont">&#xe7f1;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl';
.header
  height .86rem
  line-height .86rem
  overflow hidden
  text-align center
  columns #fff
  background $themeColor
  color #fff
  font-size .32rem
  position relative
  .left
    position absolute
    top 0
    left 0
    width .64rem
    color #fff
    font-size .04rem

</style>
