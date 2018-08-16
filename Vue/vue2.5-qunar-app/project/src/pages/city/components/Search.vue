<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl';
.search
  background $themeColor
  height .72rem
  padding 0 .1rem
  .search-input
    width 100%
    line-height .62rem
    height .62rem
    text-align center
    border 0
    color #666
    padding 0 .1rem
    box-sizing border-box
    border-radius .06rem
    &:focus
      outline $themeColor
</style>
