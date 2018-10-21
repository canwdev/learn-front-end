<template>
  <div class="header">
    <div class="info-wrap">
      <div class="logo">
        <img :src="seller.avatar">
      </div>
      <div class="info-main">
        <div class="brand">{{seller.name}}</div>
        <div class="description">蜂鸟专送/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <div class="text">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
          <div class="count">{{seller.supports.length}}个</div>
        </div>
      </div>
    </div>
    <div class="tips">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: Object
  }
}
</script>

<style lang="stylus" scoped>
.header
  background #ccc
  color #fff
  padding 24px
  .info-wrap
    display flex
    flex-direction row
    .logo
      img
        height 64px
        width 64px
        border-radius 2px
    .info-main
      flex 1
      font-weight 200px
      line-height 12px
      margin-left 16px
      .brand
        font-size 16px
        font-weight bold
        line-height 18px
        margin-top 2px
      .description
        font-size 12px
        margin-top 8px
      .supports
        display flex
        align-items center
        justify-content space-between
        font-size 10px
        margin-top 10px
        .count
          background rgba(0, 0, 0, .2)
          padding 5px 10px
          border-radius 50px
</style>
